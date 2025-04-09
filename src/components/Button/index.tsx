import React from "react"
import styled from "styled-components"

interface StyledButtonProps {
  type?: "submit" | "button"
  color?: string
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  width?: "big" | "md"
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  target?: string // Adicionado para controlar o target
  disabled?: boolean // Adicionando a propriedade disabled
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

const StyledButton = styled.button<{
  $backgroundColor?: string
  $size?: "small" | "medium" | "large"
  $width?: "big" | "md"
  disabled?: boolean // Adicionando disabled aqui
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
  padding: ${({ $size }) => sizes[$size || "medium"].padding};
  font-size: ${({ $size }) => sizes[$size || "medium"].fontSize};
  cursor: ${({ disabled }) =>
    disabled
      ? "not-allowed"
      : "pointer"}; // Mudando o cursor quando desabilitado
  opacity: ${({ disabled }) =>
    disabled ? 0.5 : 1}; // Diminui a opacidade quando desabilitado
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(0)")};
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
  font-weight: 600;

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 87.5rem) {
    font-size: 1.5rem;
  }
`

// Alterando para renderizar como <a> se houver href
export const Button: React.FC<StyledButtonProps> = ({
  color = "#fff", // Valor padrão
  backgroundColor = "red", // Valor padrão
  size = "small", // Valor padrão
  href,
  width,
  onClick,
  children,
  className,
  type,
  target, // Recebe a prop target
  disabled, // Recebe disabled
}) => {
  const commonProps = {
    $backgroundColor: backgroundColor,
    $size: size,
    color: color,
    $width: width,
    onClick: onClick,
    className: className,
    disabled: disabled,
  }

  // Verificar se href está presente
  if (href) {
    return (
      <StyledButton
        as='a'
        {...commonProps}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </StyledButton>
    )
  }

  return (
    <StyledButton {...commonProps} type={type}>
      {children}
    </StyledButton>
  )
}
