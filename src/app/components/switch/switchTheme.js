import Image from "next/image";

import { useContext } from "react";

import flowEventsLogo from "public/Flow.jpg";

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
  border: none;
`;

export default function Switcher({ onClick }) {
  const { theme, switchTheme } = useContext(CustomThemeContext);

  return (
    <Button onClick={() => switchTheme()} alt="Changer de thème">
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
