import { useEffect, useRef } from "react";

import { useChat } from "../hooks/useChat";

import { useTheme } from "../hooks/useTheme";

const MessageBubble = () => {
    const { messages, isTyping } = useChat();

    const messagesEndRef = useRef(null);

    const { theme } = useTheme();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const formatTime = (timestamp) => {
        return timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="messages-list">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`message-bubble ${
                        message.sender === "me" ? "sent" : "received"
                    }`}
                >
                    <div className="message-content" data-theme={theme}>
                        <p className="message-text">{message.text}</p>
                        <span className="message-time">
                            {formatTime(message.timestamp)}
                        </span>
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="message-bubble received typing-indicator">
                    <div className="message-content">
                        <div className="typing-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            )}

            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageBubble;
