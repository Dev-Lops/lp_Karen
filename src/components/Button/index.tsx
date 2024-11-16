import React from "react"
import styled from "styled-components"

interface StyledButtonProps {
  color?: string
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  target?: string // Adicionado para controlar o target
}

const sizes = {
  small: {
    padding: "12px 24px",
    fontSize: "1rem",
  },
  medium: {
    padding: "20px 25px",
    fontSize: "1.125rem",
  },
  large: {
    padding: "16px 32px",
    fontSize: "1.25rem",
  },
}

const StyledButton = styled.a<StyledButtonProps>`
  display: inline-block;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.primary};
  color: ${({ color, theme }) => color || theme.colors.textLight};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
  padding: ${({ size }) => sizes[size || "medium"].padding};
  font-size: ${({ size }) => sizes[size || "medium"].fontSize};

  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    text-decoration: underline;
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: 80rem) {
    padding: 20px 30px;
    font-size: 1.5rem;
  }

  @media (min-width: 1400px) {
    padding: 16px 32px;
    font-size: 2rem;
  }
`

export const Button: React.FC<StyledButtonProps> = ({
  color,
  backgroundColor,
  size = "medium",
  href,
  onClick,
  children,
  className,
  target, // Recebe a prop target
}) => (
  <StyledButton
    color={color}
    backgroundColor={backgroundColor}
    size={size}
    href={href}
    onClick={onClick}
    className={className}
    target={target} // Usa a prop target que foi passada
    rel={href && target === "_blank" ? "noopener noreferrer" : undefined}
  >
    {children}
  </StyledButton>
)

Button.defaultProps = {
  color: "#fff",
  backgroundColor: "#01ab9e",
  size: "medium",
}
