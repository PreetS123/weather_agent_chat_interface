import { type Message as MessageType } from "../types";

const Message = ({ message }: { message: MessageType }) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} p-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{message.content}</p>
        <span className="text-xs text-gray-500 block text-right mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default Message;
