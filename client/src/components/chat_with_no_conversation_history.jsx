import api from "../services/ai.services.js";
import { useState, useEffect } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

 useEffect(() => {
  console.log(messages)
}, [messages])


  async function handleSend() {
    try {        
        const userMessage = { role: "user", content: message };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        const response = await api.post("/chat", { message });
        console.log(response.data);

        const aiMessage = { role: "ai", content: response.data.response };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        setMessage("");
    } catch (error) {
        console.error("Error sending message:", error);
    }

  }

  return (
    <div>
      <h2>Chat with AI</h2>

      <input
        type="text"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>Send</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.role}>
            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;