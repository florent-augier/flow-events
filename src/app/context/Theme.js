"use client";

import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

const themes = {
  light: {
    main: {
      textColor: "#040319",
      backgroundColor: "#ffffff",
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
      textColor: "#ffffff",
      backgroundColor: "#040319",
    },
    colors: {
      white: "#ffffff",
      black: "#040319",
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

  const th = themes[theme];

  console.log(th);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = window.document.body;
      if (body) {
        body.className = theme;
        body.style.transitionDuration = "1000ms";
        body.style.color = th.main.textColor;
        body.style.backgroundColor = th.main.backgroundColor;
      }
    }
  }, [th, th.main.backgroundColor, th.main.textColor]);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
