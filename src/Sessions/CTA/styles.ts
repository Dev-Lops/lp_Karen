import styled from 'styled-components'

export const ContainerCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 0;

  background-color: ${({ theme }) => theme.colors.green};
`
