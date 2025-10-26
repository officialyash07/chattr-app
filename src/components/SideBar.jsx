import { users } from "../../data";

import ContactCard from "./ContactCard";

import ThemeButton from "../ui/ThemeButton";

import { useTheme } from "../hooks/useTheme";

const SideBar = ({ onUserClick, windowSize }) => {
    const { theme } = useTheme();

    const handleContactClick = (userId) => {
        onUserClick(userId);
    };

    return (
        <aside className="aside" data-theme={theme}>
            <header className="p-10 aside-header sticky">
                <h1>Chattr</h1>
                {!windowSize && <ThemeButton className="theme-Btn" />}
            </header>

            {users.map((user) => (
                <ContactCard
                    key={user.userId}
                    avatar={user.avatar}
                    name={user.name}
                    status={user.status}
                    timestamp={user.lastActive}
                    onClick={handleContactClick.bind(null, user.userId)}
                />
            ))}
        </aside>
    );
};

export default SideBar;
