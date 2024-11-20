import styled from "styled-components"

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

export const AccordionContent = styled.div<{ $isOpen?: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
`
