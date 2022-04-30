import LightMode from "../styles/light_theme.svg";
import DarkMode from "../styles/dark_theme.svg";
import { useEffect, useState } from "react";
import { getUsersThemePreference } from "../utils/getUsersThemePreference";

export const Wrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const prefersDark = getUsersThemePreference();
    setDarkTheme(prefersDark);
  }, []);

  const changeTheme = () => {
    localStorage.setItem("darkMode", !darkTheme ? "enabled" : null);
    setDarkTheme(!darkTheme);
  };

  return (
    <div
      className={`${
        darkTheme ? "bg-dark text-light" : "bg-light text-dark"
      } items-end flex flex-col p-4 w-screen h-screen justify-start`}
    >
      <button onClick={changeTheme}>
        {darkTheme ? <LightMode /> : <DarkMode />}
      </button>
      <main className="flex flex-row items-center w-full h-full justify-center">{children}</main>
    </div>
  );
};
