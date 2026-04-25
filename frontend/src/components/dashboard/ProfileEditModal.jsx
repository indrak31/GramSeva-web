import { Camera, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import toast from "react-hot-toast";
import api from "../../api/client";
import { indiaLocations, stateOptions } from "../../data/india";
import { skillOptions } from "../../data/options";
import { useAuthStore } from "../../stores/authStore";
import { getCroppedImageBlob } from "../../utils/cropImage";
import { getInitials, resolveAssetUrl } from "../../utils/app";

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

export default function ProfileEditModal({ open, onClose, extraFields = [] }) {
  const { user, updateUser } = useAuthStore();
  const [form, setForm] = useState({
    name: "",
    village: "",
    district: "",
    state: "",
    bio: "",
    skills: [],
    companyName: "",
    businessType: "",
    gstNumber: "",
    website: "",
  });
  const [preview, setPreview] = useState("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [sourceImage, setSourceImage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("avatar.jpg");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user || !open) return;
    setForm({
      name: user.name || "",
      village: user.village || "",
      district: user.district || "",
      state: user.state || stateOptions[0],
      bio: user.bio || "",
      skills: user.skills || [],
      companyName: user.companyName || "",
      businessType: user.businessType || "",
      gstNumber: user.gstNumber || "",
      website: user.website || "",
    });
    setPreview(resolveAssetUrl(user.avatarUrl || ""));
    setSourceImage("");
    setCompletedCrop(null);
  }, [open, user]);

  if (!open) return null;

  const districtOptions = indiaLocations[form.state] || [];

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setSourceImage(reader.result?.toString() || "");
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const { data } = await api.patch("/user/profile", form);
      updateUser(data.user);

      if (sourceImage && completedCrop) {
        const croppedFile = await getCroppedImageBlob(sourceImage, completedCrop, selectedFileName);
        const avatarForm = new FormData();
        avatarForm.append("file", croppedFile);
        const avatarResponse = await api.post("/user/avatar", avatarForm, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const nextAvatarUrl = avatarResponse.data.avatarUrl;
        updateUser({ avatarUrl: nextAvatarUrl });
        setPreview(resolveAssetUrl(nextAvatarUrl));
        setSourceImage("");
        setCompletedCrop(null);
      }

      toast.success("Profile updated");
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/70 p-4 backdrop-blur-md">
      <div className="glass-panel custom-scrollbar max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] p-6 shadow-glow sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Profile</p>
            <h2 className="mt-2 font-display text-4xl text-cream">Edit your profile</h2>
          </div>
          <button onClick={onClose} className="rounded-full border border-[var(--glass-border)] p-2 transition hover:border-saffron-500/50">
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="space-y-4 rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
            <div className="relative mx-auto flex h-44 w-44 items-center justify-center overflow-hidden rounded-[32px] border border-[var(--glass-border)] bg-forest-900">
              {sourceImage || preview ? (
                <img src={sourceImage || preview} alt="Avatar preview" className="h-full w-full object-cover" />
              ) : (
                <span className="font-display text-5xl text-saffron-300">{getInitials(form.name)}</span>
              )}
              <label className="absolute bottom-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl bg-saffron-500 text-charcoal shadow-glow">
                <Camera size={18} />
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>
            </div>
            {sourceImage ? (
              <div>
                <p className="mb-3 text-sm text-cream/70">Crop avatar</p>
                <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={(pixelCrop) => setCompletedCrop(pixelCrop)} aspect={1}>
                  <img
                    src={sourceImage}
                    alt="Crop source"
                    onLoad={(event) => {
                      const { width, height } = event.currentTarget;
                      setCrop(centerAspectCrop(width, height, 1));
                    }}
                  />
                </ReactCrop>
              </div>
            ) : null}
            <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-900/70 p-4 text-sm text-cream/68">
              <div className="flex items-center gap-2 text-saffron-300">
                <CheckCircle2 size={16} />
                <span>Square crop recommended</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm text-cream/70">Full Name</span>
              <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-cream/70">State</span>
              <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.state} onChange={(event) => setForm((current) => ({ ...current, state: event.target.value, district: indiaLocations[event.target.value]?.[0] || "" }))}>
                {stateOptions.map((state) => <option key={state} value={state}>{state}</option>)}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm text-cream/70">District</span>
              <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.district} onChange={(event) => setForm((current) => ({ ...current, district: event.target.value }))}>
                {districtOptions.map((district) => <option key={district} value={district}>{district}</option>)}
              </select>
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm text-cream/70">Village / Town</span>
              <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.village} onChange={(event) => setForm((current) => ({ ...current, village: event.target.value }))} />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm text-cream/70">About Me</span>
              <textarea maxLength={250} rows={4} className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.bio} onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))} />
            </label>
            <div className="space-y-2 sm:col-span-2">
              <span className="text-sm text-cream/70">Skills</span>
              <div className="flex flex-wrap gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-3">
                {skillOptions.map((skill) => {
                  const active = form.skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() =>
                        setForm((current) => ({
                          ...current,
                          skills: active ? current.skills.filter((item) => item !== skill) : [...current.skills, skill],
                        }))
                      }
                      className={`rounded-full px-3 py-2 text-sm transition ${active ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70 hover:border-saffron-500/30"}`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {extraFields.includes("companyName") ? (
              <label className="space-y-2">
                <span className="text-sm text-cream/70">Company Name</span>
                <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.companyName} onChange={(event) => setForm((current) => ({ ...current, companyName: event.target.value }))} />
              </label>
            ) : null}
            {extraFields.includes("businessType") ? (
              <label className="space-y-2">
                <span className="text-sm text-cream/70">Business Type</span>
                <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.businessType} onChange={(event) => setForm((current) => ({ ...current, businessType: event.target.value }))} />
              </label>
            ) : null}
            {extraFields.includes("gstNumber") ? (
              <label className="space-y-2">
                <span className="text-sm text-cream/70">GST Number</span>
                <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.gstNumber} onChange={(event) => setForm((current) => ({ ...current, gstNumber: event.target.value }))} />
              </label>
            ) : null}
            {extraFields.includes("website") ? (
              <label className="space-y-2">
                <span className="text-sm text-cream/70">Website</span>
                <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.website} onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))} />
              </label>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-cream/70 transition hover:border-[var(--border-glow)] hover:text-cream">Cancel</button>
          <button onClick={handleSave} disabled={saving} className="rounded-full bg-saffron-500 px-6 py-3 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-70">
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}




