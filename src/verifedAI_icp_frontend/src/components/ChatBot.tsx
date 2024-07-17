import { useState } from "react";
import "./chatbot.css";
import chatImg from "../assets/chat_134718.png";
import chat from "../assets/astro.png";
// Make sure to import the CSS file
import logo from "../assets/logo-removebg-preview.png";
const ChatBot = () => {
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const toggleIframeVisibility = () => {
    setIsIframeVisible(!isIframeVisible);
  };

  return (
    <div className="z-50">
      <button
        onClick={toggleIframeVisibility}
        className="fixed bottom-3 right-3"
      >
        <img src={chat} alt="chat" height={100} width={100} className="" />
        {/* <img
          src={logo}
          width={10}
          height={10}
          alt=""
          className="top-2 right-10"
        /> */}
        {/* <p className="text-center font-semibold text-black">Ask AI</p> */}
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
