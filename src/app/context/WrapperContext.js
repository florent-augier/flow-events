"use client";

import { createContext, useState } from "react";

import Theme from "./Theme";

export const CustomThemeContext = createContext();

export default function WrapperContext({ children }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <CustomThemeContext.Provider value={{ theme, switchTheme }}>
      <Theme currentTheme={{ theme }}>{children}</Theme>
    </CustomThemeContext.Provider>
  );
}
