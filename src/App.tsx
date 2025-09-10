import "./App.css";
import ChatWindow from "./components/ChatWindow";
import ErrorBoundary from "./components/ErrorBoundary";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <>
      <ChatProvider>
        <ErrorBoundary>
          <div className="min-h-screen flex items-center justify-center">
            <ChatWindow />
          </div>
        </ErrorBoundary>
      </ChatProvider>
    </>
  );
}

export default App;
