import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGramAiStore = create(
  persist(
    (set, get) => ({
      isOpen: false,
      ownerId: null,
      voiceEnabled: true,
      messages: [],
      ensureOwner: (ownerId) => set((state) => (state.ownerId === ownerId ? {} : { ownerId, messages: [], isOpen: false })),
      toggleChat: () => set({ isOpen: !get().isOpen }),
      openChat: () => set({ isOpen: true }),
      closeChat: () => set({ isOpen: false }),
      toggleVoice: () => set({ voiceEnabled: !get().voiceEnabled }),
      setVoiceEnabled: (voiceEnabled) => set({ voiceEnabled }),
      addMessage: (message) => set({ messages: [...get().messages, message] }),
      setMessages: (messages) => set({ messages }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "gramrozgaar-ai",
    },
  ),
);
