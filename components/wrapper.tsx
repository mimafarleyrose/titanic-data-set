import LightMode from "../styles/light_theme.svg";
import DarkMode from "../styles/dark_theme.svg";
import { useEffect, useState } from "react";
import { useIsDarkMode } from "../utils/useIsDarkMode";

export const Wrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { isDarkMode, toggleIsDarkMode } = useIsDarkMode();

  const changeTheme = () => {
    localStorage.setItem("themePreference", !isDarkMode ? "dark" : "light");
    toggleIsDarkMode();
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-dark" : "bg-light"
      } text-dark items-end flex flex-col p-4 w-screen h-screen justify-start`}
    >
      <button onClick={changeTheme}>
        <DarkMode />
      </button>
      <main className="flex flex-row items-center w-full h-full justify-center">
        {children}
      </main>
    </div>
  );
};
