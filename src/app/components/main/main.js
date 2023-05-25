import { styled } from "styled-components";

const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export default function Main({ children }) {
  return <MainPage>{children}</MainPage>;
}
