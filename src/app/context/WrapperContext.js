"use client";

import { createContext, useState, useEffect } from "react";

import Theme from "./Theme";

export const CustomThemeContext = createContext();

export default function WrapperContext({ children }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    // TagManager.initialize({ gtmId: "GTM-5DQ87FJ" });

    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(setIsLoaded(true))
    //   }, 5000);

    // })

    window.addEventListener("resize", handleResizing);
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
    return () => {
      window.removeEventListener("resize", handleResizing);
    };
  }, []);

  function handleResizing() {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  }

  // html.styles.backgroundColor = theme;

  return (
    <CustomThemeContext.Provider value={{ theme, switchTheme }}>
      <Theme currentTheme={{ theme }}>{children}</Theme>
    </CustomThemeContext.Provider>
  );
}
