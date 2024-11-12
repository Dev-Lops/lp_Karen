import styled from "styled-components"

export const ContainerProduct = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 375px;
  height: 100vh;

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
