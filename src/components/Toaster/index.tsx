import React, { useEffect } from "react"
import styled from "styled-components"

interface ToasterProps {
  message: string
  show: boolean
  duration?: number // Duração opcional (em milissegundos)
  onClose: () => void
}

const ToasterContainer = styled.div<{ show: boolean }>`
  position: fixed;
  width: 380px;
  font-size: 1.125rem;
  top: 20px;
  right: 5px;
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-20px)")};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`

export const Toaster: React.FC<ToasterProps> = ({
  message,
  show,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer) // Limpa o timeout se o componente for desmontado
    }
  }, [show, duration, onClose])

  return <ToasterContainer show={show}>{message}</ToasterContainer>
}
