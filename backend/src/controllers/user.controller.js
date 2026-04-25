import { User } from "../models/User.js";
import { uploadFile } from "../services/storage.service.js";
import { sanitizeUser } from "../utils/user.utils.js";

export async function getCurrentUser(req, res) {
  const user = await User.findById(req.user.id);
  return res.json({ user: sanitizeUser(user) });
}

export async function getLanguage(req, res) {
  return res.json({ language: req.user.language });
}

export async function updateLanguage(req, res) {
  const { language } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      $set: {
        language,
        needsLanguageSelection: false,
      },
    },
    { new: true },
  );

  return res.json({ language: user.language, user: sanitizeUser(user) });
}

export async function updateProfile(req, res) {
  const {
    name,
    village,
    district,
    state,
    bio,
    skills,
    companyName,
    businessType,
    gstNumber,
    website,
  } = req.body;

  const updates = {
    ...(name !== undefined ? { name } : {}),
    ...(village !== undefined ? { village } : {}),
    ...(district !== undefined ? { district } : {}),
    ...(state !== undefined ? { state } : {}),
    ...(Array.isArray(skills) ? { skills } : {}),
    ...(companyName !== undefined ? { companyName } : {}),
    ...(businessType !== undefined ? { businessType } : {}),
    ...(gstNumber !== undefined ? { gstNumber } : {}),
    ...(website !== undefined ? { website } : {}),
    ...(bio !== undefined ? { "profile.bio": bio } : {}),
  };

  const user = await User.findByIdAndUpdate(req.user.id, { $set: updates }, { new: true });
  return res.json({ user: sanitizeUser(user) });
}

export async function uploadAvatar(req, res) {
  if (!req.file) {
    return res.status(400).json({ error: "Avatar file is required" });
  }

  const asset = await uploadFile({
    buffer: req.file.buffer,
    fileName: req.file.originalname,
    mimeType: req.file.mimetype,
    folder: "avatars",
  });

  await User.findByIdAndUpdate(req.user.id, {
    $set: {
      "profile.avatarUrl": asset.url,
    },
  });

  return res.json({ avatarUrl: asset.url });
}
