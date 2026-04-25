import { Document } from "../models/Document.js";
import { User } from "../models/User.js";
import { uploadFile } from "../services/storage.service.js";

const typeMap = {
  aadhaar: "AADHAAR",
  pan: "PAN",
  driving: "DRIVING",
  other: "OTHER",
};

export async function uploadDocument(req, res) {
  if (!req.file) {
    return res.status(400).json({ error: "Document file is required" });
  }

  const documentType = typeMap[req.body.documentType];
  if (!documentType) {
    return res.status(400).json({ error: "Invalid document type" });
  }

  const asset = await uploadFile({
    buffer: req.file.buffer,
    fileName: req.file.originalname,
    mimeType: req.file.mimetype,
    folder: "documents",
  });

  const document = await Document.create({
    userId: req.user.id,
    type: documentType,
    fileUrl: asset.url,
    fileName: req.file.originalname,
    fileSize: req.file.size,
    status: "PENDING",
  });

  await User.findByIdAndUpdate(req.user.id, {
    $set: { hasUploadedDocuments: true },
  });

  return res.status(201).json({
    documentId: document.id,
    url: document.fileUrl,
    status: document.status,
  });
}

export async function getMyDocuments(req, res) {
  const documents = await Document.find({ userId: req.user.id }).sort({ uploadedAt: -1 });
  return res.json({ documents });
}

export async function updateDocumentStatus(req, res) {
  const { id } = req.params;
  const { status, reason } = req.body;

  const document = await Document.findByIdAndUpdate(
    id,
    {
      $set: {
        status,
        rejectionReason: reason || null,
        verifiedAt: status === "VERIFIED" ? new Date() : null,
      },
    },
    { new: true },
  );

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  if (status === "VERIFIED") {
    await User.findByIdAndUpdate(document.userId, {
      $set: {
        isDocVerified: true,
        isVerified: true,
        hasUploadedDocuments: true,
      },
    });
  }

  return res.json({ document });
}
