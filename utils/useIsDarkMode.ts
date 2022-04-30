import { useEffect, useState } from "react";

export function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("themePreference");
    if (localTheme) {
      setIsDarkMode(localTheme === "dark" ? true : false);
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!localTheme && prefersDark) {
      setIsDarkMode(true);
    }
  }, []);

  return { isDarkMode, toggleIsDarkMode };
}
