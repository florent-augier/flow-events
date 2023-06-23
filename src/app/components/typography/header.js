"use client";

import { ThemeContext, styled } from "styled-components";

import { devices } from "./../../devices";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-block: 100px;
`;

const H1 = styled.h1`
  font-size: 48px;
  font-family: var(--font-lastica);

  @media screen and ${devices.lg} {
    font-size: 48px;
  }
  @media screen and ${devices.md} {
    font-size: 36px;
  }
  @media screen and ${devices.sm} {
    font-size: 24px;
  }
`;

export default function Header1({ children }) {
  return (
    <Container>
      <H1>{children}</H1>
    </Container>
  );
}
