import styled from "styled-components"

// Container da seção de CTA
export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  width: 100vw;
  padding: 2rem 1.25rem;
  background-color: ${({ theme }) =>
    theme.colors.background}; // Adicionando fundo opcional
`

// Título da seção CTA
export const CTATitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem); // Tamanho da fonte adaptável
  margin-bottom: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
`

// Descrição da seção CTA
export const CTADescription = styled.p`
  font-size: clamp(1.1rem, 4vw, 1.4rem); // Tamanho da fonte responsivo
  margin-bottom: 40px;
  max-width: 600px;
  text-align: center; // Garante que o texto fique centralizado
  line-height: 1.6;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 20px;
  }
`

// Contêiner de botões
export const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap; // Permite que os botões se ajustem em telas menores
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

  @media (max-width: 600px) {
    padding: 10px 20px; // Ajuste para telas menores
  }
`
