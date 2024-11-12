// src/components/CTASection/styles.ts

import styled from "styled-components"

// Container da seção de CTA
export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: ${({ theme }) =>
    theme.colors.gold}; /* Cor de fundo personalizada */
  color: white;
  text-align: center;
`

// Título da seção CTA
export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`

// Descrição da seção CTA
export const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
`

// Contêiner de botões
export const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`

// Estilo do botão
export const CTAButton = styled.button<{ primary?: boolean }>`
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.secondary : theme.colors.secondaryLight};
  color: ${({ primary }) => (primary ? "white" : "black")};

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.secondaryDark : theme.colors.secondaryLightDark};
  }
`
