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

  @media (width >= 80rem) {
  }
`

export const ClientImage = styled.img`
  width: 400px;
  height: 100%;
  object-fit: cover;

  @media (width >= 80rem) {
  }
  @media (width >= 87.5rem) {
  }
`

// Nome do cliente
export const ClientName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (width >= 80rem) {
    font-size: 2rem;
  }
`

// Relato do cliente (testemunho)
export const TestimonialText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
  max-width: 90%;
  margin: 0 auto;
  @media (width >= 80rem) {
    font-size: 1.5rem;
  }
`

// Avaliação (em estrelas)
export const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

// Estrela de avaliação
export const Star = styled(FaStar)`
  color: #ffcc00;
  margin: 0 2px;
  font-size: 1.5rem;
  @media (width >= 80rem) {
    font-size: 2rem;
  }
`
