import styled from 'styled-components'

// Estilos principais da seção de FAQ
export const FAQSection = styled.section`
  padding: 50px 5%;
  width: 1200px;
  margin: 0 auto;
`

export const FAQTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.8rem;
  font-size: clamp(1rem, 5vw, 2rem);
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Stardom', serif;
  letter-spacing: 3px;
  font-weight: bold;
`

// Estilos para o acordeão
export const Accordion = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const AccordionItem = styled.div`
  margin-bottom: 10px;
`

export const AccordionHeader = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  padding: 15px;
  font-size: 1.125rem;
  cursor: pointer;
  font-weight: semi-bold;
  transition: background-color 0.3s ease;
  border-top: 1px solid ${({ theme }) => theme.colors.green};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenLight};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }
`

export const AccordionContent = styled.div<{ $isOpen?: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  transition: max-height 0.3s ease;
  padding: ${({ $isOpen }) => ($isOpen ? '1.2rem' : '0')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: ${({ $isOpen }) => ($isOpen ? '1rem' : '0')};
  }
`
