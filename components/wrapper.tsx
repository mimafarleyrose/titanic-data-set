import LightMode from "../styles/svgs/light_theme.svg";
import DarkMode from "../styles/svgs/dark_theme.svg";
import { useEffect, useState } from "react";
import { useIsDarkMode } from "../utils/useIsDarkMode";
import Link from "next/link";
import SandCastle from "../styles/svgs/sand_castle.svg";
import { useRouter } from "next/router";

export const Wrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { isDarkMode, toggleIsDarkMode } = useIsDarkMode();
  const router = useRouter();

  const isHomePage = router.pathname === "/";

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
      <div className="lg:w-full lg:flex lg:justify-between flex flex-row">
        <div>
          {!isHomePage && (
            <Link href="/" passHref>
              <SandCastle className="cursor-pointer md:w-32 md:h-32 h-16 w-16" />
            </Link>
          )}
        </div>
        <button onClick={changeTheme}>
          <DarkMode className={"md:w-20 md:h-20 h-12 w-12"} />
        </button>
      </div>
      <main className="h-5/6 w-full flex flex-row items-center justify-center">
        {children}
      </main>
    </div>
  );
};
