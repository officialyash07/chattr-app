import SideBar from "./components/SideBar";

import ChatWindow from "./components/ChatWindow";

import { useState, useEffect } from "react";

import { users } from "../data";

import { useTheme } from "./hooks/useTheme";

function App() {
    const [selectedUser, setSelectedUser] = useState(null);

    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const [isChatWindowVisible, setIsChatWindowVisible] = useState(false);

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const { theme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 768;
            setIsDesktop(desktop);

            if (desktop && isChatWindowVisible && !isSidebarVisible) {
                setIsSidebarVisible(true);
            } else if (!desktop && isChatWindowVisible && isSidebarVisible) {
                setIsSidebarVisible(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isChatWindowVisible, isSidebarVisible]);

    const handleUserSelect = (userId) => {
        setSelectedUser(userId);
        if (!isDesktop) {
            setIsSidebarVisible(false);
            setIsChatWindowVisible(true);
        } else {
            setIsChatWindowVisible(true);
        }
    };

    const handleBack = () => {
        if (!isDesktop) {
            setIsChatWindowVisible(false);
            setIsSidebarVisible(true);
        } else {
            setIsChatWindowVisible(false);
        }
    };

    return (
        <main data-theme={theme} className="app-container">
            {(isSidebarVisible || isDesktop) && (
                <SideBar
                    onUserClick={handleUserSelect}
                    windowSize={isChatWindowVisible}
                />
            )}
            {isChatWindowVisible && selectedUser && (
                <ChatWindow
                    user={users.find((user) => user.userId === selectedUser)}
                    onBack={handleBack}
                />
            )}
        </main>
    );
}

export default App;
