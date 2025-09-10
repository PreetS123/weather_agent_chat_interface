import { useState } from "react";
import { sendMessage } from "../api/weatherAgent";
import { type Message } from "../types";

export function useWeatherAgent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async (
    threadId: string,
    content: string,
    onData: (msg: Message) => void
  ) => {
    setLoading(true);
    setError(null);
    try {
      const stream = await sendMessage(threadId, content);
      const reader = stream.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          const text = decoder.decode(value, { stream: true });
          onData({
            role: "agent",
            content: text,
            timestamp: new Date().toISOString(),
          });
        }
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { send, loading, error };
}
