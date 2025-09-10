import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const ChatWindow = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto border rounded shadow-lg flex flex-col h-[600px] bg-white">
        <div className="p-4 text-xl font-bold border-b">Weather Chat</div>
        <MessageList />
        <ChatInput />
      </div>
    </>
  );
};

export default ChatWindow;
