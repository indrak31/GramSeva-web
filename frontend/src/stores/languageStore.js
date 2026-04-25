import { create } from "zustand";
import { persist } from "zustand/middleware";

export const LANGUAGE_DEFINITIONS = [
  { code: "en", label: "English", nativeLabel: "English", symbol: "EN", speechLocale: "en-IN" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", symbol: "हि", speechLocale: "hi-IN" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", symbol: "म", speechLocale: "mr-IN" },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা", symbol: "ব", speechLocale: "bn-IN" },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்", symbol: "த", speechLocale: "ta-IN" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు", symbol: "త", speechLocale: "te-IN" },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ", symbol: "ಕ", speechLocale: "kn-IN" },
  { code: "pa", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ", symbol: "ਪ", speechLocale: "pa-IN" },
  { code: "gu", label: "Gujarati", nativeLabel: "ગુજરાતી", symbol: "ગ", speechLocale: "gu-IN" },
];

export const SUPPORTED_LANGUAGE_CODES = LANGUAGE_DEFINITIONS.map((language) => language.code);

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGE_CODES.includes(language) ? language : "en";
}

export function getLanguageDefinition(language) {
  return LANGUAGE_DEFINITIONS.find((item) => item.code === normalizeLanguage(language)) || LANGUAGE_DEFINITIONS[0];
}

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => set({ language: normalizeLanguage(language) }),
    }),
    {
      name: "gramseva-language",
      partialize: (state) => ({ language: normalizeLanguage(state.language) }),
      version: 2,
      migrate: (persistedState) => ({
        ...(persistedState || {}),
        language: normalizeLanguage(persistedState?.language),
      }),
    },
  ),
);
