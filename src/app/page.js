"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Main from "./components/main/main";

import { useTheme } from "styled-components";

import Header1 from "./components/typography/header";

import Logo from "./components/logo/logo";

export default function Home() {
  return (
    <Main>
      <div className={styles.header}>
        <Header1>Accueil</Header1>
      </div>

      <div className={styles.center}>Flow Events 13 arrive prochainement.</div>
    </Main>
  );
}
