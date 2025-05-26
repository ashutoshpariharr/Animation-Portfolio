import React, { useState } from 'react';

const chatbotResponses = {
  "hello": "Hi there! How can I help you today?",
  "who are you": "I'm your assistant chatbot.",
  "what is your name": "I'm Ashutosh!",
  "task": "You can assign or track tasks here.",
};

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const lowerInput = input.toLowerCase();
    const botReply = chatbotResponses[lowerInput] || "Sorry, I don't understand that yet.";

    setMessages(prev => [...prev, userMessage, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask me something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
