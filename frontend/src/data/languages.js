import { LANGUAGE_DEFINITIONS } from "../stores/languageStore";

export const languageOptions = LANGUAGE_DEFINITIONS.map(({ code, label, nativeLabel, symbol }) => ({
  code,
  label,
  nativeLabel,
  symbol,
}));
