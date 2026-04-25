import { OTP } from "../models/OTP.js";
import { User } from "../models/User.js";
import { sendSMS } from "../services/otp.service.js";
import { signToken } from "../utils/jwt.utils.js";
import { comparePassword, hashPassword } from "../utils/password.utils.js";
import { sanitizeUser } from "../utils/user.utils.js";

const mobileRegex = /^[6-9]\d{9}$/;
const otpWindowMs = 10 * 60 * 1000;
const isDevelopmentMode = () => process.env.NODE_ENV !== "production";
const generateOTP = () => (isDevelopmentMode() ? "123456" : Math.floor(100000 + Math.random() * 900000).toString());

async function markPreviousOtpsUsed(mobile) {
  await OTP.updateMany({ mobile, used: false }, { $set: { used: true, consumedFor: "SUPERSEDED" } });
}

async function consumeOtpForPurpose(mobile, otp, purpose) {
  const now = new Date();
  const consumed = await OTP.findOneAndUpdate(
    {
      mobile,
      code: otp,
      used: false,
      expiresAt: { $gt: now },
    },
    {
      $set: {
        used: true,
        verifiedAt: now,
        consumedFor: purpose,
      },
    },
    {
      sort: { createdAt: -1 },
      returnDocument: "before",
    },
  );

  if (consumed) {
    return consumed;
  }

  return OTP.findOne({
    mobile,
    code: otp,
    verifiedAt: { $gte: new Date(Date.now() - otpWindowMs) },
    expiresAt: { $gt: now },
  }).sort({ createdAt: -1 });
}

export async function sendOTP(req, res) {
  const { mobile } = req.body;

  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ error: "Invalid mobile number" });
  }

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + otpWindowMs);

  await markPreviousOtpsUsed(mobile);
  await OTP.create({ mobile, code, expiresAt });
  await sendSMS(mobile, `Your GramSeva OTP is: ${code}. Valid for 10 minutes.`);

  return res.json({
    success: true,
    message: "OTP sent",
    ...(isDevelopmentMode() ? { devOtp: code } : {}),
  });
}

export async function verifyOTP(req, res) {
  const { mobile, otp } = req.body;
  const record = await consumeOtpForPurpose(mobile, otp, "VERIFY_OTP");

  if (!record) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  return res.json({ verified: true, ...(isDevelopmentMode() ? { devOtp: otp } : {}) });
}

export async function register(req, res) {
  const {
    mobile,
    password,
    role,
    name,
    state,
    district,
    village,
    skills = [],
    companyName,
    businessType,
    otp,
  } = req.body;

  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ error: "Invalid mobile number" });
  }

  if (!otp) {
    return res.status(400).json({ error: "OTP is required" });
  }

  const existingUser = await User.findOne({ mobile });
  if (existingUser) {
    return res.status(409).json({ error: "Mobile already registered" });
  }

  const otpRecord = await consumeOtpForPurpose(mobile, otp, "REGISTER");
  if (!otpRecord) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  const passwordHash = await hashPassword(password);
  const user = await User.create({
    mobile,
    passwordHash,
    role,
    name,
    state,
    district,
    village: village || "",
    skills: role === "WORKER" ? skills : [],
    companyName: companyName || null,
    businessType: businessType || null,
    isVerified: true,
    profile: {},
  });

  const token = signToken({ userId: user.id, role: user.role });
  return res.status(201).json({ token, user: sanitizeUser(user) });
}

export async function signIn(req, res) {
  const { mobile, password } = req.body;

  const user = await User.findOne({ mobile });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (user.isSuspended) {
    return res.status(403).json({ error: "Account is suspended" });
  }

  const isValid = await comparePassword(password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = signToken({ userId: user.id, role: user.role });
  return res.json({ token, user: sanitizeUser(user) });
}

export async function forgotPassword(req, res) {
  return sendOTP(req, res);
}

export async function resetPassword(req, res) {
  const { mobile, otp, newPassword } = req.body;

  const record = await consumeOtpForPurpose(mobile, otp, "RESET_PASSWORD");
  if (!record) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  const user = await User.findOne({ mobile });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.passwordHash = await hashPassword(newPassword);
  await user.save();

  return res.json({ success: true, message: "Password reset successfully" });
}

