import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDashboardStore = create(
  persist(
    (set) => ({
      workerSection: "about",
      employerSection: "about",
      setWorkerSection: (section) => set({ workerSection: section }),
      setEmployerSection: (section) => set({ employerSection: section }),
    }),
    {
      name: "gramrozgaar-dashboard",
    },
  ),
);
