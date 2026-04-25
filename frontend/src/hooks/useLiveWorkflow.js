import { useEffect, useRef } from "react";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const streamBaseUrl = apiBaseUrl.replace(/\/api\/?$/, "");

export function useLiveWorkflow({ token, enabled = true, onEvent }) {
  const onEventRef = useRef(onEvent);

  useEffect(() => {
    onEventRef.current = onEvent;
  }, [onEvent]);

  useEffect(() => {
    if (!enabled || !token || typeof window === "undefined" || typeof EventSource === "undefined") {
      return undefined;
    }

    const streamUrl = `${streamBaseUrl}/api/live/events?token=${encodeURIComponent(token)}`;
    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (!payload?.type || payload.type === "connected" || payload.type === "ping") {
          return;
        }
        onEventRef.current?.(payload);
      } catch {
        // Ignore malformed events.
      }
    };

    return () => {
      eventSource.close();
    };
  }, [enabled, token]);
}
