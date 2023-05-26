"use client";

import { styled } from "styled-components";

import Logo from "./logo";

import { devices } from "../../devices";

const WrapperBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 48px;
  @media ${devices.md} {
    left: 24px;
  }
  @media ${devices.sm} {
    left: 8px;
  }
`;

const Text = styled.span`
  font-family: var(--font-lastica);
  font-size: 24px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  margin-left: 12px;
  @media ${devices.md} {
    font-size: 18px;
  }
  @media ${devices.sm} {
    font-size: 12px;
  }
`;

export default function Brand() {
  return (
    <WrapperBrand>
      <Logo />
      <Text>Flow Events</Text>
    </WrapperBrand>
  );
}
