import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

export const ContainerProduct = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.green};
`
