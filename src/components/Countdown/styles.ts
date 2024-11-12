import styled from "styled-components"

// Estilos para a contagem regressiva
export const CountdownSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gold};
  color: #000;
  padding: 50px 30px;
  text-align: center;

  @media (width >= 80rem) {
    width: 1000px;
  }
`

export const CountdownTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #000;

  @media (width >= 80rem) {
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-size: 1.2rem;

  margin-bottom: 15px;

  @media (width >= 80rem) {
    font-size: 1.5rem;
  }
`

export const Timer = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (width >= 80rem) {
    font-size: 2rem;
  }

  @media (width >= 87.5rem) {
  }
`

export const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;

  @media (width >= 80rem) {
    font-size: 3rem;
  }
`

export const TimeLabel = styled.span`
  font-size: 1rem;
  color: #000;

  @media (width >= 80rem) {
    font-size: 1.5rem;
  }

  @media (width >= 87.5rem) {
  }
`
