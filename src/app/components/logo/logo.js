import Image from "next/image";

import flowEventsLogo from "public/Flow.jpg";

import { styled } from "styled-components";

import styles from "./styles.module.scss";

import { devices } from "./../../devices";

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  @media ${devices.lg} {
    height: 36px;
    width: 36px;
  }
  @media ${devices.sm} {
    display: none;
  }
  @media ${devices.xs} {
    display: none;
  }
`;

export default function Logo() {
  return (
    <WrapperLogo>
      <Image
        className={styles.logo}
        src={flowEventsLogo}
        alt="Next.js Logo"
        width={48}
        height={48}
        style={{ borderRadius: "50%" }}
      />
    </WrapperLogo>
  );
}
