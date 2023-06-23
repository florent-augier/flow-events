"use client";

import { styled } from "styled-components";


import { devices } from "../../devices";

const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  height: auto;
  @media ${devices.lg} {
    padding: 4rem;
  }
  @media ${devices.sm} {
    padding: 2rem;
  }
  @media ${devices.xs} {
    padding: 1rem;
  }
`;

export default function Main({ children }) {
  return <MainPage>{children}</MainPage>;
}
