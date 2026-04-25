import { User } from "../models/User.js";
import { verifyToken } from "../utils/jwt.utils.js";

export async function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId);

    if (!user || user.isSuspended) {
      return res.status(401).json({ error: "User not found or suspended" });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}
