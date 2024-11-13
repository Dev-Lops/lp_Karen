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
}

const StyledButton = styled.a<StyledButtonProps>`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor || "#01ab9e"};
  color: ${({ color }) => color || "#fff"};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
  padding: 20px 30px;
  font-size: 1rem;

  -webkit-animation: slide-in-elliptic-top-fwd 2s
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slide-in-elliptic-top-fwd 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @-webkit-keyframes slide-in-elliptic-top-fwd {
    0% {
      -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) rotateX(0) scale(1);
      transform: translateY(0) rotateX(0) scale(1);
      -webkit-transform-origin: 50% 1400px;
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
  @keyframes slide-in-elliptic-top-fwd {
    0% {
      -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) rotateX(0) scale(1);
      transform: translateY(0) rotateX(0) scale(1);
      -webkit-transform-origin: 50% 1400px;
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 20px 25px;
          font-size: 1rem;
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
    text-decoration: underline ease-in-out;
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
  className, // Adiciona className aqui
}) => (
  <StyledButton
    color={color}
    backgroundColor={backgroundColor}
    size={size}
    href={href}
    onClick={onClick}
    className={className} // Passa className para StyledButton
  >
    {children}
  </StyledButton>
)
