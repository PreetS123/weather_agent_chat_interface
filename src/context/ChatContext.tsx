import { createContext, useContext, useState, type ReactNode } from "react";
import { type ChatContextType, type Message } from "../types";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const threadId = "YOUR_COLLEGE_ROLL_NUMBER";

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, clearMessages, threadId }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
};

export { ChatProvider, useChat };
