import { Router } from "express";
import { User } from "../models/User.js";
import { registerLiveClient } from "../services/liveEvents.service.js";
import { verifyToken } from "../utils/jwt.utils.js";

const router = Router();

router.get("/events", async (req, res) => {
  const token = req.query.token || req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId);

    if (!user || user.isSuspended) {
      return res.status(401).json({ error: "User not found or suspended" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders?.();

    const unregister = registerLiveClient(user, res);
    req.on("close", unregister);
    return undefined;
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
