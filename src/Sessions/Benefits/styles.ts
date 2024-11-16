import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

// Container principal dos benefícios
export const BenefitsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

// Estilos para cada card de benefício
export const BenefitCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  color: #fff;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 48%; // Ajuste para 2 cards por linha em telas médias
  }

  @media (min-width: 1200px) {
    width: 31%; // Ajuste para 3 cards por linha em telas grandes
  }
`

// Container para o contador e o sinal "+"
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;

  span {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.75rem;
  }
`

// Estilos do título de cada card
export const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gold};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.75rem;
  }
`
