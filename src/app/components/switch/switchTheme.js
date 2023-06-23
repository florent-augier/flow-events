"use client";

import { useContext } from "react";

import { CustomThemeContext } from "./../../context/WrapperContext";

import { styled, useTheme } from "styled-components";

import { Moon } from "@styled-icons/entypo/Moon";

import { Sun } from "@styled-icons/feather/Sun";

import styles from "./styles.module.scss";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border: none;
`;

export default function Switcher({ onClick, className }) {
  const { theme, switchTheme } = useContext(CustomThemeContext);

  return (
    <Button onClick={switchTheme} alt="Changer de thème">
      {theme === "light" ? (
        <Moon size="42" fill="#040319" style={{ borderRadius: "50%" }} />
      ) : (
        <Sun size="42" fill="#040319" style={{ borderRadius: "50%" }} />
      )}
    </Button>
  );
}
