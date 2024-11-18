import styled from "styled-components"
import type { AccordionContentProps } from "."

// Estilos principais da seção de FAQ
export const FAQSection = styled.section`
  background-color: #fff;
  padding: 50px 10px;
  width: 100%;
`

export const FAQTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.green};
  font-family: "Baskervville", serif;
  font-weight: 100;
`

// Estilos para o acordeão
export const Accordion = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const AccordionItem = styled.div`
  margin-bottom: 10px;
`

export const AccordionHeader = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  padding: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-top: 1px solid ${({ theme }) => theme.colors.green};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenLight};
  }
`

export const AccordionContent = styled.div<AccordionContentProps>`
  color: #000;
  padding: 15px;
  font-size: 1.25rem;
  border-radius: 5px;
  max-height: ${({ isOpen }) =>
    isOpen ? "1000px" : "0"}; // Usando max-height para animar a expansão
  overflow: hidden; // Garante que o conteúdo não fique visível quando a altura for 0
  transition: max-height 0.3s ease-out; // Transição suave para expandir ou recolher
  opacity: ${({ isOpen }) =>
    isOpen ? "1" : "0"}; // Opacidade para um efeito suave
`
