import { useState, useEffect } from "react";

import { ChatContext } from "../context/chatContext";

import { randomReplies } from "../../random-message";

import { initialMessages } from "../../initial-message";

const loadMessagesFromStorage = (userId) => {
    try {
        const storageKey = `whatsapp-chat-messages-${userId}`;
        const storedMessages = localStorage.getItem(storageKey);
        if (storedMessages) {
            const parsedMessages = JSON.parse(storedMessages);
            return parsedMessages.map((message) => ({
                ...message,
                timestamp: new Date(message.timestamp),
            }));
        }
        return initialMessages;
    } catch (error) {
        console.error("Error loading messages from localStorage:", error);
        return initialMessages;
    }
};

const saveMessagesToStorage = (messages, userId) => {
    try {
        const storageKey = `whatsapp-chat-messages-${userId}`;
        localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (error) {
        console.error("Error saving messages to localStorage:", error);
    }
};

export const ChatProvider = ({ children, user }) => {
    const [messages, setMessages] = useState(() =>
        loadMessagesFromStorage(user?.userId || "default")
    );

    const [newMessage, setNewMessage] = useState("");

    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (user?.userId) {
            setMessages(loadMessagesFromStorage(user.userId));
        }
    }, [user?.userId]);

    useEffect(() => {
        if (user?.userId) {
            saveMessagesToStorage(messages, user.userId);
        }
    }, [messages, user?.userId]);

    const sendMessage = () => {
        if (newMessage.trim() === "") return;

        const userMessage = {
            id: Date.now(),
            text: newMessage,
            sender: "me",
            timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setNewMessage("");

        setTimeout(() => {
            setIsTyping(true);
        }, 1000);

        const replyDelay = Math.random() * 2000 + 1000;

        setTimeout(() => {
            setIsTyping(false);

            const randomReply =
                randomReplies[Math.floor(Math.random() * randomReplies.length)];
            const botReply = {
                id: Date.now() + 1,
                text: randomReply,
                sender: "other",
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, botReply]);
        }, replyDelay);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    const value = {
        messages,
        newMessage,
        user,
        isTyping,
        setNewMessage,
        sendMessage,
        handleKeyPress,
    };

    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    );
};
