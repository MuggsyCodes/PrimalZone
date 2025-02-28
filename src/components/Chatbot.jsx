"use client";

import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to Hormonesforme! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border border-gray-300 shadow-lg rounded-lg">
      <div className="bg-blue-500 text-white p-3 font-bold rounded-t-lg">
        Chatbot
      </div>
      <div className="p-3 h-64 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md max-w-[75%] ${
              msg.sender === "bot"
                ? "bg-gray-200 self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex p-3 border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="ml-2 bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
