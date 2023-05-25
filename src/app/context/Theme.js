"use client";

import { ThemeProvider } from "styled-components";
import { useState } from "react";

const themes = {
  light: {
    main: {
      textColor: "dark",
      backgroundColor: "white",
    },
    colors: {
      black: "black",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em",
    },
    background: {
      color: "white",
    },
  },
  dark: {
    main: {
      textColor: "white",
      backgroundColor: "dark",
    },
    colors: {
      colors: {
        white: "white",
      },
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em",
    },
    background: {
      color: "#FFFDF",
    },
  },
  common: {
    fonts: {
      fontLastica: "var(--font-lastica)",
      fontFeatherly: "var(--font-featherly)",
    },
    headers: {
      h1: {
        fontSize: "48px",
        fontFamily: "var(--font-lastica)",
      },
      h2: {
        fontSize: "36px",
        fontFamily: "var(--font-lastica)",
      },
      h3: {
        fontSize: "24px",
        fontFamily: "var(--font-lastica)",
      },
    },
  },
};

const Theme = ({ currentTheme, children }) => {
  const { theme } = currentTheme;

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
