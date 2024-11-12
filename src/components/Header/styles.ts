import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.gold};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5rem;
  margin: 0 auto;

  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.0625rem;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.gold},
      ${({ theme }) => theme.colors.white},
      ${({ theme }) => theme.colors.gold}
    );
    z-index: -1;
  }

  img {
    width: 40px;
    height: 40px;
    opacity: 0.4;
  }

  @media (width >=80rem) {
  }
  @media (width >=90rem) {
  }
`
