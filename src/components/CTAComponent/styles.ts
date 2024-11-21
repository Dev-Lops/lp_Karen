import styled from "styled-components"

// Container da seção de CTA
export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: #000;
  text-align: center;

  margin-bottom: 20px;
`

// Título da seção CTA
export const CTATitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem); // Tamanho da fonte adaptável
  margin-bottom: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  font-family: "Baskervville", serif;
  text-transform: uppercase;
  font-weight: 100;
`

// Descrição da seção CTA
export const CTADescription = styled.p`
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  margin-bottom: 40px;
  max-width: 800px;
  text-align: center; // Garante que o texto fique centralizado
  line-height: 1.6;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

// Contêiner de botões
export const CTAButtons = styled.div`
  display: flex;

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
    primary ? theme.colors.green : theme.colors.secondaryLight};
  color: ${({ primary }) => (primary ? "white" : "black")};

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.secondaryDark : theme.colors.secondaryLightDark};
  }

  @media (max-width: 600px) {
    padding: 10px 20px; // Ajuste para telas menores
  }
`
