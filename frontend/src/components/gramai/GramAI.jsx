import { ArrowRight, CheckCircle2, Loader2, Mic, MicOff, RotateCcw, Send, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/client";
import { getDashboardCopy } from "../../data/dashboardCopy";
import { useAuthStore } from "../../stores/authStore";
import { useDashboardStore } from "../../stores/dashboardStore";
import { useGramAiStore } from "../../stores/gramAiStore";
import { getLanguageDefinition, useLanguageStore } from "../../stores/languageStore";
import { getDashboardPath } from "../../utils/app";

const SUGGESTIONS = {
  WORKER: [
    "Find the best jobs for my skills and location",
    "Tell me how to improve my profile so employers notice me",
    "Suggest which skill I should learn next and why",
    "Translate a job description into simple language",
  ],
  EMPLOYER: [
    "Draft a strong job post for this role",
    "Give me a worker shortlisting checklist",
    "Help me set a fair wage and benefits plan",
    "Write a call script for speaking with candidates",
  ],
  ADMIN: [
    "Summarize today's platform health",
    "List risky items that need review",
    "Tell me what needs attention first",
  ],
};

function getActionLabel(action, role, copy) {
  if (action.targetSection === "post-job") return copy.postJob;
  if (action.targetSection === "jobs") return role === "EMPLOYER" ? copy.postedJobs : copy.jobs;
  if (action.targetSection === "applications") return role === "EMPLOYER" ? copy.employerApplications : copy.applications;
  if (action.targetSection === "courses") return copy.courses;
  if (action.targetSection === "ratings") return role === "EMPLOYER" ? copy.rateWorkers : copy.ratings;
  if (action.targetSection === "settings") return copy.settings;
  return copy.about;
}

function getSpeechRecognitionConstructor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function getListeningErrorMessage(error) {
  if (error === "not-allowed" || error === "service-not-allowed") {
    return "Microphone access is blocked. Allow microphone permission and try again.";
  }

  if (error === "no-speech") {
    return "No speech was detected. Please speak a little closer to the microphone.";
  }

  if (error === "audio-capture") {
    return "No microphone was found on this device.";
  }

  return "Voice input stopped. Please try again.";
}

function buildWelcomeMessage(user) {
  return {
    role: "assistant",
    content: user?.role === "EMPLOYER"
      ? `Namaste ${user?.name || "friend"}. I am GRAM AI. I can help you draft posts, compare candidates, plan hiring steps, explain pay decisions, translate text, or open the right section for you. Tell me what you need.`
      : `Namaste ${user?.name || "friend"}. I am GRAM AI. I can help you find work, explain jobs, improve your profile, build a skill plan, translate details, or guide your next step. Tell me what you need.`,
    actions: user?.role === "EMPLOYER"
      ? [{ type: "navigate", targetSection: "post-job" }, { type: "navigate", targetSection: "applications" }]
      : [{ type: "navigate", targetSection: "jobs" }, { type: "navigate", targetSection: "courses" }],
    createdAt: new Date().toISOString(),
  };
}

function sanitizeAssistantContent(content = "") {
  return content
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/^\s*\*\s+/gm, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function createAssistantMessage(content, extra = {}) {
  return {
    role: "assistant",
    content: sanitizeAssistantContent(content),
    createdAt: new Date().toISOString(),
    ...extra,
  };
}

function resolveLocalAssistantCommand({ message, role, voiceEnabled, hasLastAssistantReply }) {
  const text = message.trim().toLowerCase();

  if (!text) {
    return null;
  }

  const navigationIntent = /\b(open|show|go to|take me to|switch to)\b/.test(text);

  if (navigationIntent) {
    if (/\b(post job|create job|new job|draft job)\b/.test(text) && role === "EMPLOYER") {
      return {
        reply: "Opening Post a Job now.",
        actions: [{ type: "navigate", targetSection: "post-job" }],
        autoNavigate: true,
      };
    }

    if (/\b(job|jobs|work|posted jobs)\b/.test(text)) {
      return {
        reply: role === "EMPLOYER" ? "Opening your posted jobs now." : "Opening jobs now.",
        actions: [{ type: "navigate", targetSection: "jobs" }],
        autoNavigate: true,
      };
    }

    if (/\b(application|applications|applied)\b/.test(text)) {
      return {
        reply: "Opening applications now.",
        actions: [{ type: "navigate", targetSection: "applications" }],
        autoNavigate: true,
      };
    }

    if (/\b(course|courses|skill|skills|training)\b/.test(text) && role !== "EMPLOYER") {
      return {
        reply: "Opening skill courses now.",
        actions: [{ type: "navigate", targetSection: "courses" }],
        autoNavigate: true,
      };
    }

    if (/\b(rating|ratings|review|reviews)\b/.test(text)) {
      return {
        reply: "Opening ratings now.",
        actions: [{ type: "navigate", targetSection: "ratings" }],
        autoNavigate: true,
      };
    }

    if (/\b(setting|settings|profile|account|language)\b/.test(text)) {
      return {
        reply: "Opening settings now.",
        actions: [{ type: "navigate", targetSection: "settings" }],
        autoNavigate: true,
      };
    }

    if (/\b(about|overview|dashboard|home)\b/.test(text)) {
      return {
        reply: "Opening the dashboard overview now.",
        actions: [{ type: "navigate", targetSection: "about" }],
        autoNavigate: true,
      };
    }
  }

  if (/\b(mute|stop speaking|stop talking|voice off|disable voice)\b/.test(text)) {
    return {
      reply: voiceEnabled ? "Voice replies are off now." : "Voice replies are already off.",
      setVoiceEnabled: false,
    };
  }

  if (/\b(enable voice|turn on voice|voice on|speak replies|unmute)\b/.test(text)) {
    return {
      reply: voiceEnabled ? "Voice replies are already on." : "Voice replies are on now.",
      setVoiceEnabled: true,
    };
  }

  if (/\b(repeat that|say that again|repeat last reply|speak that again)\b/.test(text)) {
    return {
      reply: hasLastAssistantReply ? "Repeating the last reply now." : "There is no earlier reply to repeat yet.",
      replayLastReply: hasLastAssistantReply,
    };
  }

  return null;
}

function StatusChip({ tone = "neutral", icon: Icon, children }) {
  const toneClassName = {
    neutral: "border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/72",
    success: "border-emerald-500/25 bg-emerald-500/10 text-emerald-200",
    warn: "border-amber-500/25 bg-amber-500/10 text-amber-200",
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${toneClassName[tone] || toneClassName.neutral}`}>
      {Icon ? <Icon size={13} /> : null}
      <span>{children}</span>
    </div>
  );
}

export default function GramAI() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { workerSection, employerSection, setWorkerSection, setEmployerSection } = useDashboardStore();
  const { language } = useLanguageStore();
  const copy = getDashboardCopy(language || user?.language || "en");
  const {
    voiceEnabled,
    toggleVoice,
    setVoiceEnabled,
    messages,
    addMessage,
    setMessages,
    ensureOwner,
  } = useGramAiStore();
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [transcriptPreview, setTranscriptPreview] = useState("");
  const [providerInfo, setProviderInfo] = useState({ configured: true, provider: null, model: null });
  const recognitionRef = useRef(null);
  const transcriptRef = useRef("");
  const lastSpokenRef = useRef("");
  const messagesRef = useRef(messages);
  const sendMessageRef = useRef(() => {});

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (user?.id) {
      ensureOwner(user.id);
    }
  }, [ensureOwner, user?.id]);

  useEffect(() => {
    setSpeechSupported(Boolean(getSpeechRecognitionConstructor()));
  }, []);

  useEffect(() => {
    if (isAuthenticated && user && messages.length === 0) {
      setMessages([buildWelcomeMessage(user)]);
    }
  }, [isAuthenticated, messages.length, setMessages, user]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const currentLanguage = language || user?.language || "en";
  const currentSection = user?.role === "EMPLOYER" ? employerSection : workerSection;
  const suggestions = useMemo(() => SUGGESTIONS[user?.role] || SUGGESTIONS.WORKER, [user?.role]);
  const lastAssistantMessage = useMemo(() => [...messages].reverse().find((message) => message.role === "assistant"), [messages]);

  const speakText = (text) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !text) {
      return false;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLanguageDefinition(currentLanguage).speechLocale;
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
    lastSpokenRef.current = text;
    return true;
  };

  useEffect(() => {
    if (!voiceEnabled || !lastAssistantMessage?.content) {
      return undefined;
    }

    if (lastSpokenRef.current === lastAssistantMessage.content) {
      return undefined;
    }

    speakText(lastAssistantMessage.content);

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentLanguage, lastAssistantMessage, voiceEnabled]);

  const openAssistantSection = (targetSection) => {
    if (!user) return;

    if (user.role === "EMPLOYER") {
      setEmployerSection(targetSection);
    }

    if (user.role === "WORKER") {
      setWorkerSection(targetSection);
    }

    navigate(getDashboardPath(user.role));
  };

  const sendMessage = async (rawMessage) => {
    const trimmedMessage = rawMessage.trim();
    if (!trimmedMessage || sending || !user) return;

    const nextUserMessage = {
      role: "user",
      content: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    const nextHistory = messagesRef.current.slice(-10);

    addMessage(nextUserMessage);
    setInput("");
    setTranscriptPreview("");

    const localCommand = resolveLocalAssistantCommand({
      message: trimmedMessage,
      role: user.role,
      voiceEnabled,
      hasLastAssistantReply: Boolean(lastAssistantMessage?.content),
    });

    if (localCommand) {
      if (typeof localCommand.setVoiceEnabled === "boolean") {
        setVoiceEnabled(localCommand.setVoiceEnabled);
      }

      const assistantMessage = createAssistantMessage(localCommand.reply, {
        actions: localCommand.actions || [],
      });

      addMessage(assistantMessage);

      if (localCommand.autoNavigate && localCommand.actions?.[0]?.targetSection) {
        openAssistantSection(localCommand.actions[0].targetSection);
      }

      if (localCommand.replayLastReply) {
        replayLastReply();
      }

      return;
    }

    setSending(true);

    try {
      const { data } = await api.post("/ai/chat", {
        message: trimmedMessage,
        history: nextHistory,
        currentSection,
      });

      setProviderInfo({
        configured: data.configured,
        provider: data.provider,
        model: data.model,
      });

      addMessage(createAssistantMessage(data.reply, {
        actions: data.actions || [],
      }));
    } catch (error) {
      toast.error(error.response?.data?.error || "GRAM AI assistant is unavailable right now");
      addMessage(createAssistantMessage("I could not respond right now. Please try again in a moment."));
    } finally {
      setSending(false);
    }
  };

  sendMessageRef.current = sendMessage;

  const startListening = () => {
    if (sending) return;

    const SpeechRecognition = getSpeechRecognitionConstructor();
    if (!SpeechRecognition) {
      toast.error("Voice input works best in Chrome or Edge.");
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    transcriptRef.current = "";
    setTranscriptPreview("");
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    const recognition = new SpeechRecognition();
    recognition.lang = getLanguageDefinition(currentLanguage).speechLocale;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      let finalText = "";
      let interimText = "";

      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const transcript = event.results[index][0]?.transcript || "";
        if (event.results[index].isFinal) {
          finalText += ` ${transcript}`;
        } else {
          interimText += ` ${transcript}`;
        }
      }

      const spokenText = (finalText || interimText).trim();
      if (!spokenText) return;

      transcriptRef.current = spokenText;
      setInput(spokenText);
      setTranscriptPreview(spokenText);
    };

    recognition.onerror = (event) => {
      setListening(false);
      if (event.error !== "aborted") {
        toast.error(getListeningErrorMessage(event.error));
      }
    };

    recognition.onend = () => {
      setListening(false);
      const spokenText = transcriptRef.current.trim();
      transcriptRef.current = "";
      setTranscriptPreview("");

      if (spokenText) {
        sendMessageRef.current(spokenText);
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      toast.error("Voice input could not start. Please try again.");
    }
  };

  const replayLastReply = () => {
    if (!lastAssistantMessage?.content) return;

    const hasSpoken = speakText(lastAssistantMessage.content);
    if (!hasSpoken) {
      toast.error("Voice output is not supported in this browser.");
    }
  };

  const resetConversation = () => {
    if (!user) return;
    setMessages([buildWelcomeMessage(user)]);
    setInput("");
    setTranscriptPreview("");
    lastSpokenRef.current = "";
  };

  if (!isAuthenticated || !user) return null;

  const providerTone = providerInfo.provider === "gemini"
    ? "success"
    : providerInfo.configured === false
      ? "warn"
      : "neutral";

  const providerLabel = providerInfo.provider === "gemini"
    ? "Gemini live"
    : providerInfo.configured === false
      ? "Fallback mode"
      : "Assistant ready";

  return (
    <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
      <div className="space-y-6">
        <div className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.aiHeading}</p>
          <h2 className="mt-2 font-display text-4xl text-cream">Talk to GRAM AI</h2>
          <p className="mt-4 text-sm leading-7 text-cream/68">
            Speak naturally or type your request. GRAM AI can explain, plan, draft, translate, compare options, and guide you to the right next action.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <StatusChip tone={providerTone} icon={providerInfo.provider === "gemini" ? CheckCircle2 : Sparkles}>{providerLabel}</StatusChip>
            <StatusChip tone={voiceEnabled ? "success" : "neutral"} icon={voiceEnabled ? Volume2 : VolumeX}>
              Voice replies {voiceEnabled ? "on" : "off"}
            </StatusChip>
            <StatusChip tone={!speechSupported ? "warn" : listening ? "success" : "neutral"} icon={listening ? MicOff : Mic}>
              {!speechSupported ? "Mic unavailable" : listening ? "Listening now" : "Mic ready"}
            </StatusChip>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={startListening}
              disabled={!speechSupported || sending}
              className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {listening ? <MicOff size={16} /> : <Mic size={16} />}
              {listening ? "Stop and send" : "Speak to GRAM AI"}
            </button>
            <button
              type="button"
              onClick={toggleVoice}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream"
            >
              {voiceEnabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {voiceEnabled ? "Mute replies" : "Enable voice replies"}
            </button>
            <button
              type="button"
              onClick={replayLastReply}
              disabled={!lastAssistantMessage?.content}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Volume2 size={16} />
              Speak last reply
            </button>
          </div>

          {transcriptPreview ? (
            <div className="mt-5 rounded-[24px] border border-saffron-500/20 bg-saffron-500/10 p-4 text-sm text-saffron-100">
              Listening: "{transcriptPreview}"
            </div>
          ) : (
            <p className="mt-5 text-sm text-cream/60">
              {speechSupported
                ? "Use the microphone for hands-free help in your selected language, including open-ended requests."
                : "Voice input works best in Chrome or Edge with microphone permission enabled."}
            </p>
          )}
        </div>

        <div className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Quick prompts</p>
              <h3 className="mt-2 text-2xl font-semibold text-cream">Start anywhere</h3>
            </div>
            <button
              type="button"
              onClick={resetConversation}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-4 py-2 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream"
            >
              <RotateCcw size={15} />
              Reset
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[680px] flex-col overflow-hidden rounded-[32px] border border-[var(--glass-border)] bg-forest-950/72 shadow-glass">
        <div className="border-b border-[var(--glass-border)] bg-gradient-to-r from-forest-900 to-forest-800 px-6 py-5">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Voice Assistant</p>
          <h3 className="mt-2 font-display text-3xl text-cream">
            {user.role === "EMPLOYER" ? "Hiring guidance, drafting, and decision support" : "Job guidance, planning, translation, and next steps"}
          </h3>
        </div>

        <div className="custom-scrollbar flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}-${message.createdAt || index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-7 ${message.role === "user" ? "bg-saffron-500 text-charcoal" : "bg-[var(--glass-bg)] text-cream"}`}>
                {message.role === "assistant" ? <p className="mb-1 text-xs uppercase tracking-[0.25em] text-saffron-300">GRAM AI</p> : null}
                <p>{message.role === "assistant" ? sanitizeAssistantContent(message.content) : message.content}</p>
                {message.role === "assistant" && message.actions?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action, actionIndex) => (
                      <button
                        key={`${action.targetSection}-${actionIndex}`}
                        type="button"
                        onClick={() => openAssistantSection(action.targetSection)}
                        className="inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-3 py-2 text-xs text-saffron-200 transition hover:bg-saffron-500/20"
                      >
                        {getActionLabel(action, user.role, copy)}
                        <ArrowRight size={12} />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}

          {sending ? (
            <div className="flex justify-start">
              <div className="rounded-3xl bg-[var(--glass-bg)] px-4 py-3 text-sm text-cream/70">
                <span className="inline-flex items-center gap-2"><Loader2 size={14} className="animate-spin" /> Working on it...</span>
              </div>
            </div>
          ) : null}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(input);
          }}
          className="border-t border-[var(--glass-border)] p-4"
        >
          <div className="flex items-center gap-3 rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3">
            <button
              type="button"
              onClick={startListening}
              disabled={!speechSupported || sending}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${listening ? "bg-rose-500/15 text-rose-200" : "bg-[var(--card-bg)] text-cream/75 hover:bg-[var(--glass-bg)] hover:text-cream"} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {listening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask for planning, drafting, explanation, translation, or the next best action"
              className="w-full bg-transparent text-sm text-cream outline-none placeholder:text-cream/40"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron-500 text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/55">
            <span>
              {listening
                ? "Listening now. Speak clearly and the request will send automatically."
                : "You can type anything or use the microphone for voice input and direct commands."}
            </span>
            <span>{providerInfo.model || "Assistant mode"}</span>
          </div>
        </form>
      </div>
    </section>
  );
}





