import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const ContainerProduct = styled(Container)`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white};
`
