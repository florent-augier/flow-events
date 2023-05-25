import Image from "next/image";

import flowEventsLogo from "public/Flow.jpg";

import { styled } from "styled-components";

import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <Image
      className={styles.logo}
      src={flowEventsLogo}
      alt="Next.js Logo"
      width={48}
      height={48}
      style={{ borderRadius: "50%" }}
    />
  );
}
