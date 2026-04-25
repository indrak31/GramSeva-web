export function sanitizeUser(user) {
  if (!user) return null;

  const source = typeof user.toJSON === "function" ? user.toJSON() : user;

  return {
    id: source.id || source._id?.toString?.() || null,
    mobile: source.mobile,
    role: source.role,
    name: source.name,
    state: source.state,
    district: source.district,
    village: source.village,
    language: source.language,
    needsLanguageSelection: source.needsLanguageSelection,
    hasUploadedDocuments: source.hasUploadedDocuments,
    isVerified: source.isVerified,
    isDocVerified: source.isDocVerified,
    isSuspended: source.isSuspended,
    skills: source.skills || [],
    companyName: source.companyName,
    businessType: source.businessType,
    gstNumber: source.gstNumber,
    website: source.website,
    createdAt: source.createdAt,
    avatarUrl: source.profile?.avatarUrl || null,
    bio: source.profile?.bio || "",
    rating: source.profile?.rating || 0,
    totalRatings: source.profile?.totalRatings || 0,
  };
}
