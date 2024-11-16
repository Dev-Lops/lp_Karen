import styled from "styled-components"
import { FaStar } from "react-icons/fa"

// Card de Testemunho
export const TestimonialCard = styled.div`
  background: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;

  /* Responsividade */
  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const ClientImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;

  /* Responsividade */
  @media (max-width: 768px) {
    max-width: 250px; /* Ajusta para telas menores */
  }
`

export const ClientName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
  max-width: 90%;
  margin: 0 auto;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const Star = styled(FaStar)`
  color: #ffcc00;
  margin: 0 2px;
  font-size: 1.5rem;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
