import styled from "styled-components"

// Card de Testemunho
export const TestimonialCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 10px;

  /* Responsividade */
  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
  }
`

export const ClientImage = styled.img`
  width: 100%;

  /* Responsividade */
  @media (min-width: 1280px) {
    width: 500px;
    height: 500px;
  }
`
