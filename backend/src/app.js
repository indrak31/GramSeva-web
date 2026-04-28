import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import applicationsRoutes from "./routes/applications.routes.js";
import documentsRoutes from "./routes/documents.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import ratingsRoutes from "./routes/ratings.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import liveRoutes from "./routes/live.routes.js";
import { generalLimiter } from "./middleware/rateLimit.middleware.js";

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:4001"],
    credentials: true,
  }),
);
app.use(helmet());
app.use(generalLimiter);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "gramseva-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/applications", applicationsRoutes);
app.use("/api/documents", documentsRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/ratings", ratingsRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/live", liveRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error?.statusCode) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  if (error?.code === 11000) {
    return res.status(409).json({ error: "This record already exists" });
  }

  if (error?.name === "CastError") {
    return res.status(400).json({ error: "Invalid identifier" });
  }

  if (error?.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  if (error?.name === "MulterError") {
    return res.status(400).json({ error: error.message });
  }

  return res.status(500).json({ error: error.message || "Internal server error" });
});

export default app;
