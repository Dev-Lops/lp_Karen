import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const ContainerProduct = styled(Container)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    height: 50%;
  }
`
