import styled from "styled-components"

// Estilos para a contagem regressiva
export const CountdownSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: 3rem 1.875rem; /* Usando unidades relativas */
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`

export const CountdownTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  font-family: "Syncopate", serif;
  font-weight: bold;

  @media (min-width: 48rem) {
    font-size: 2rem;
  }

  @media (min-width: 64rem) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 1.2rem;
  font-family: "Syncopate", serif;
  margin-bottom: 1rem;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 64rem) {
    font-size: 1.75rem;
  }
`

export const Timer = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 64rem) {
    font-size: 2rem;
  }
`

export const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;

  @media (min-width: 48rem) {
    font-size: 3rem;
  }

  @media (min-width: 64rem) {
    font-size: 4rem;
  }
`

export const TimeLabel = styled.span`
  font-size: 1rem;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 64rem) {
    font-size: 2rem;
  }
`
