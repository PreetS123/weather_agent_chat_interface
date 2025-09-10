import { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import Message from "./Message";

const MessageList = () => {
  const { messages } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col overflow-y-auto h-[400px] p-4 space-y-2 bg-gray-50">
      {messages.map((msg, idx) => (
        <Message key={idx} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
