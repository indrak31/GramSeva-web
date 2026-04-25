import jwt from "jsonwebtoken";

function getJwtSecret() {
  if (process.env.JWT_SECRET) {
    return process.env.JWT_SECRET;
  }

  if (process.env.NODE_ENV !== "production") {
    return "gramseva-dev-secret";
  }

  throw new Error("JWT_SECRET is not configured");
}

export function signToken(payload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "30d" });
}

export function verifyToken(token) {
  return jwt.verify(token, getJwtSecret());
}
