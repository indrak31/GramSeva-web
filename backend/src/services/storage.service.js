import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = process.env.AWS_REGION && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
  ? new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    })
  : null;

export async function uploadFile({ buffer, fileName, mimeType, folder = "documents" }) {
  const safeName = `${Date.now()}-${crypto.randomUUID()}-${fileName.replace(/\s+/g, "-")}`;

  if (process.env.NODE_ENV !== "production" || !s3 || !process.env.AWS_BUCKET_NAME) {
    const uploadsDir = path.resolve(process.cwd(), "uploads", folder);
    await fs.mkdir(uploadsDir, { recursive: true });
    const filePath = path.join(uploadsDir, safeName);
    await fs.writeFile(filePath, buffer);
    return {
      url: `/uploads/${folder}/${safeName}`,
      key: `${folder}/${safeName}`,
    };
  }

  const key = `${folder}/${safeName}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: mimeType,
    }),
  );

  return {
    url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    key,
  };
}
