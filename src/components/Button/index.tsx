import styled from "styled-components"

interface StyledButtonProps {
  color?: string
  backgroundColor?: string
  size?: "small" | "medium" | "large"
}

const StyledButton = styled.a<StyledButtonProps>`
  display: inline-block; /* Para garantir que funcione como um botão */
  background-color: ${({ backgroundColor }) => backgroundColor || "#01ab9e"};
  color: ${({ color }) => color || "#fff"};
  text-decoration: none; /* Remove o sublinhado do link */
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;

  padding: 20px 30px;
  font-size: 1rem;

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 15px 20px;
          font-size: 0.875rem;
        `
      case "large":
        return `
          padding: 16px 32px;
          font-size: 1.125rem;
        `
      default:
        return `
          padding: 12px 24px;
          font-size: 1rem;
        `
    }
  }}

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: 80rem) {
    padding: 20px 30px;
    font-size: 1.5rem; // Tamanho médio para telas médias
  }

  @media (min-width: 1400px) {
    padding: 16px 32px;
    font-size: 2rem; // Tamanho grande para telas grandes
  }
`

export default StyledButton
