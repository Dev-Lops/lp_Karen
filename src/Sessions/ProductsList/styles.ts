import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyles'

export const ContainerProduct = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media (width >= 80rem) {
  }
  @media (width>= 87.5rem) {
  }
`
