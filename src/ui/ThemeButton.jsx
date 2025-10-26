import Button from "./Button";

import { useTheme } from "../hooks/useTheme";

import dark from "../assets/icons/dark.svg";

import light from "../assets/icons/light.svg";

const ThemeButton = ({ className }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button className={`button ${className}`} onClick={toggleTheme}>
            <img
                src={theme === "light" ? dark : light}
                alt="theme toggle button"
            />
            {console.log(theme)}
        </Button>
    );
};

export default ThemeButton;
