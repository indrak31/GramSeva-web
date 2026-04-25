const DEFAULT_MODEL = process.env.GEMINI_MODEL || process.env.GRAM_AI_MODEL || "gemini-2.5-flash";
const FALLBACK_MODELS = (process.env.GEMINI_FALLBACK_MODELS || "")
  .split(",")
  .map((model) => model.trim())
  .filter(Boolean)
  .filter((model, index, models) => model !== DEFAULT_MODEL && models.indexOf(model) === index);
const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504]);
const MAX_ATTEMPTS_PER_MODEL = 2;

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || null;
}

function normaliseHistory(history = []) {
  return history
    .filter((entry) => entry?.role === "user" || entry?.role === "assistant")
    .slice(-10)
    .map((entry) => ({
      role: entry.role === "assistant" ? "model" : "user",
      parts: [{ text: entry.content }],
    }));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildPayload({ systemPrompt, history, message }) {
  return {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: [
      ...normaliseHistory(history),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ],
    generationConfig: {
      temperature: 0.55,
      topP: 0.9,
      maxOutputTokens: 900,
    },
  };
}

async function requestGemini({ model, apiKey, payload }) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`Gemini API request failed: ${response.status} ${errorText}`);
    error.status = response.status;
    error.responseText = errorText;
    error.model = model;
    throw error;
  }

  return response.json();
}

function extractReply(data) {
  return data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("\n").trim();
}

export function isAiConfigured() {
  return Boolean(getGeminiApiKey());
}

export async function generateAssistantReply({ systemPrompt, history, message }) {
  const apiKey = getGeminiApiKey();

  if (!apiKey) {
    return {
      reply: "GRAM AI assistant is in local fallback mode. Add GEMINI_API_KEY in backend/.env for live Gemini responses.",
      source: "fallback",
      model: null,
      temporaryUnavailable: false,
    };
  }

  const payload = buildPayload({ systemPrompt, history, message });
  const modelsToTry = [DEFAULT_MODEL, ...FALLBACK_MODELS];
  let lastError = null;

  for (const model of modelsToTry) {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt += 1) {
      try {
        const data = await requestGemini({ model, apiKey, payload });
        return {
          reply: extractReply(data) || "I could not generate a response right now.",
          source: "gemini",
          model,
          temporaryUnavailable: false,
        };
      } catch (error) {
        lastError = error;
        const isRetryable = RETRYABLE_STATUS_CODES.has(error.status);
        const hasMoreAttemptsForModel = attempt < MAX_ATTEMPTS_PER_MODEL;

        if (isRetryable && hasMoreAttemptsForModel) {
          await wait(700 * attempt);
          continue;
        }

        if (!isRetryable) {
          throw error;
        }
      }
    }
  }

  if (lastError && RETRYABLE_STATUS_CODES.has(lastError.status)) {
    return {
      reply: "GRAM AI is temporarily busy because Gemini is under high demand. Please wait a moment and try again.",
      source: "fallback",
      model: null,
      temporaryUnavailable: true,
    };
  }

  throw lastError || new Error("GRAM AI could not reach Gemini right now.");
}
