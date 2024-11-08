import styled from "styled-components"

export const ContainerProduct = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;

  @media (width: 80rem) {
    width: 1200px;
    height: 100vh;

    margin: 0 auto;
  }
  @media (width: 120rem) {
    width: 1500px;
    height: 100vh;

    margin: 0 auto;
  }
`
