// Benefits/styles.ts
import styled from "styled-components"
import { Container } from "../../styles/GlobalStyles"

// Container principal dos benefícios
export const BenefitsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 40px 20px;
  width: 100%;
  gap: 24px; // Espaçamento entre os BenefitCards

  // Em telas médias e maiores, os BenefitCards ficam lado a lado
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    color: #fff;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 3.125rem;
    }
  }
`

// Estilos para cada card de benefício
export const BenefitCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; // Largura total em telas pequenas
  max-width: 380px;
  color: #fff;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 16px;

  // Ajustes de layout em telas médias
  @media (min-width: 768px) {
    width: 100%; // Dois por linha em telas médias
  }

  // Ajustes de layout em telas grandes
  @media (min-width: 1200px) {
    width: 100%; // Três por linha em telas grandes
  }
`

// Container para o contador e o sinal "+"
export const CounterContainer = styled.div`
  display: flex;
  align-items: center; // Espaçamento entre o Counter e o span

  span {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;

    span {
      font-size: 2rem;
      font-weight: bold;
    }
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
    width: 100%;
    font-size: 1.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.75rem;
  }
`
