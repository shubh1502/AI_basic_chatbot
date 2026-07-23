import api from "../services/ai.services.js";
import { useState, useEffect } from "react";

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    //  useEffect(() => {
    //   console.log(messages)
    // }, [messages])
    async function handleSend() {
        try {
            setLoading(true);
            const userMessage = { role: "user", content: message };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            const response = await api.post("/chat", { message });
            console.log(response.data);

            const aiMessage = { role: "ai", content: response.data.response };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.role}
                    >
                        <strong>
                            {msg.role === "user"
                                ? "You"
                                : "AI"}
                        </strong>
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    placeholder="Ask anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend()
                        }
                    }}
                />
                <button
                    onClick={handleSend}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    )
}

export default Chat;