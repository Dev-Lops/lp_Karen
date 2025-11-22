import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyles'

export const ContainerProduct = styled(Container)`
  display: flex;
  width: 100%;
  padding: 4rem 0;

  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  margin: 0;
  border: 0;

  @media (max-width: 1280px) {
  }
`
