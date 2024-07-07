import { useState } from "react";
import "./chatbot.css";
import chatImg from "../assets/chat_134718.png";
// Make sure to import the CSS file

const ChatBot = () => {
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const toggleIframeVisibility = () => {
    setIsIframeVisible(!isIframeVisible);
  };

  return (
    <div className="z-50">
      <button onClick={toggleIframeVisibility}>
        <img src={chatImg} alt="chat" height={40} width={40} />
        <p className="text-center font-semibold text-black">Ask AI</p>
      </button>
      <div>
        <iframe
          className={`modal ${isIframeVisible ? "show" : ""}`}
          src="https://www.chatbase.co/chatbot-iframe/n9SVbE7JC0jWIT8plO5o2"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatBot;
