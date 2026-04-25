import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const documentUpload = upload.single("file");
export const avatarUpload = upload.single("file");
