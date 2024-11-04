import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 23.4375rem;
  margin: 0 auto;
  height: 6.25rem;

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
      ${({ theme }) => theme.colors.green},
      ${({ theme }) => theme.colors.gold},
      ${({ theme }) => theme.colors.green}
    );
    z-index: -1;
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media (width >=80rem) {
    width: 80rem;
  }
  @media (width >=120rem) {
    width: 120rem;
  }
`
