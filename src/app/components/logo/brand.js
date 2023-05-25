import { styled } from "styled-components";

import Logo from "./logo";

const WrapperBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 48px;
`;

const Text = styled.p`
  font-family: var(--font-lastica);
  font-size: 24px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  margin-left: 12px;
`;

export default function Brand() {
  return (
    <WrapperBrand>
      <Logo />
      <Text>Flow Events 13</Text>
    </WrapperBrand>
  );
}
