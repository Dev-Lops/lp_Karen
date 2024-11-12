import styled from "styled-components"
import type { AccordionContentProps } from "."

// Estilos principais da seção de FAQ
export const FAQSection = styled.section`
  background-color: #f9f9f9;
  padding: 50px 10px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  width: 100%;
`

export const FAQTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
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
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: #fff;
  padding: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gradients.radial};
  }
`

export const AccordionContent = styled.div<AccordionContentProps>`
  background-color: #e9ecef;
  color: #000;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`
