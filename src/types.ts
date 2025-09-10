export interface Message {
  role: "user" | "agent";
  content: string;
  timestamp: string;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  threadId: string;
}
