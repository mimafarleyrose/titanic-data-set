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
      } text-dark items-center flex flex-col p-4 justify-start w-full h-screen`}
    >
        <div className="lg:w-full lg:flex lg:justify-end">
      <button onClick={changeTheme}>
        <DarkMode className={"md:w-20 md:h-20 h-12 w-12"} />
      </button></div>
      <main className="h-5/6 w-full flex flex-row items-center justify-center">
        {children}
      </main>
    </div>
  );
};
