import React from "react"
import styled from "styled-components"

interface StyledButtonProps {
  color?: string
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  width?: "big" | "md"
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  target?: string // Adicionado para controlar o target
}

const widths = {
  big: {
    width: "330px",
  },
  md: {
    width: "200px",
  },
}

const sizes = {
  small: {
    padding: "8px 16px",
    fontSize: "1rem",
  },
  medium: {
    padding: "15px 30px",
    fontSize: "1.125rem",
  },
  large: {
    padding: "16px 32px",
    fontSize: "1.25rem",
  },
}

const StyledButton = styled.a<{
  $backgroundColor?: string
  $size?: "small" | "medium" | "large"
  $width?: "big" | "md"
}>`
  display: inline-block;
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.colors.green};
  color: ${({ color, theme }) => color || theme.colors.textLight};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0.5rem;
  font-family: "Melodrama", serif;
  width: ${({ $width }) => widths[$width || "big"].width};
  padding: 0;

  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  padding: ${({ $size }) => sizes[$size || "medium"].padding};
  font-size: ${({ $size }) => sizes[$size || "medium"].fontSize};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

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
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: 80rem) {
    /* padding: 15px 30px; */
    font-size: 1.5rem;
  }

  @media (min-width: 87.5rem) {
    /* padding: 15px 30px; */
    font-size: 1.5rem;
  }
`

export const Button: React.FC<StyledButtonProps> = ({
  color = "#fff", // Valor padrão
  backgroundColor = "#01ab9e", // Valor padrão
  size = "medium", // Valor padrão
  href,
  width,
  onClick,
  children,
  className,
  target, // Recebe a prop target
}) => (
  <StyledButton
    $backgroundColor={backgroundColor} // Transient prop
    $size={size} // Transient prop
    color={color}
    href={href}
    $width={width}
    onClick={onClick}
    className={className}
    target={target}
    rel={href && target === "_blank" ? "noopener noreferrer" : undefined}
  >
    {children}
  </StyledButton>
)
