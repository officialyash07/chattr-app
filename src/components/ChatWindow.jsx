import darkBackArrow from "../assets/icons/dark-arrow.svg";

import lightBackArrow from "../assets/icons/light-arrow.svg";

import lightSendBtn from "../assets/icons/light-send.svg";

import Button from "../ui/Button";

import MessageBubble from "./MessageBubble";

import { ChatProvider } from "../context/ChatContext";

import { useChat } from "../hooks/useChat";

import { useTheme } from "../hooks/useTheme";

import ThemeButton from "../ui/ThemeButton";

import { useState, useEffect } from "react";

const ChatInput = () => {
    const { newMessage, setNewMessage, sendMessage, handleKeyPress } =
        useChat();

    const { theme } = useTheme();

    return (
        <div className="chat-input p-10">
            <input
                type="text"
                name="message"
                id="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message"
                data-theme={theme}
            />

            <Button
                className="button send-Btn"
                onClick={sendMessage}
                disabled={newMessage.trim() === ""}
            >
                <img src={lightSendBtn} alt="send button" />
            </Button>
        </div>
    );
};

const ChatWindow = ({ onBack }) => {
    const { user } = useChat();
    const { theme } = useTheme();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const backArrow = theme === "light" ? darkBackArrow : lightBackArrow;

    return (
        <section className="chat-window">
            <header className="chat-window-header p-10 sticky">
                {!isDesktop && (
                    <Button className="button back-Btn" onClick={onBack}>
                        <img src={backArrow} alt="back arrow" />
                    </Button>
                )}
                <div className="avatar-image">
                    <img
                        className="avatar"
                        src={user.avatar}
                        alt="user avatar"
                    />
                </div>
                <h3>{user.name}</h3>
                <ThemeButton className="theme-Btn" />
            </header>
            <div className="chat-window-body">
                <MessageBubble />
                <ChatInput />
            </div>
        </section>
    );
};

const ChatContent = ({ user, onBack }) => {
    return (
        <ChatProvider user={user}>
            <ChatWindow onBack={onBack} />
        </ChatProvider>
    );
};

export default ChatContent;
