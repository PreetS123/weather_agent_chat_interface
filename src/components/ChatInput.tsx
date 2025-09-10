import { useState, type KeyboardEvent } from "react";
import { useChat } from "../context/ChatContext";
import { useWeatherAgent } from "../hooks/useWeatherAgent";
import { MdOutlineArrowOutward } from "react-icons/md";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { addMessage, threadId } = useChat();
  const { send, loading } = useWeatherAgent();

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = {
      role: "user" as "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };
    addMessage(userMessage);
    setInput("");

    await send(threadId, userMessage.content, (agentMessage) => {
      addMessage(agentMessage);
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex space-x-2 p-4 border-t border-gray-200">
      <input
        className="flex-grow border-0 rounded px-4 py-2 focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type your message..."
        disabled={loading}
      />
      <button
        onClick={handleSend}
        disabled={loading || !input.trim()}
        className="bg-['#0A0A0A'] text-['#FAFAFA'] px-4 py-2 rounded-xl disabled:opacity-50"
      >
        <MdOutlineArrowOutward />
      </button>
    </div>
  );
};

export default ChatInput;
