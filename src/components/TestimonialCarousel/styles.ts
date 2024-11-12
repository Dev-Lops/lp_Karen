import styled from "styled-components"
import { FaStar } from "react-icons/fa"

// Card de Testemunho
export const TestimonialCard = styled.div`
  background: white;

  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 400px;

  @media (width >= 80rem) {
    height: 500px;
  }
`

export const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (width >= 80rem) {
    width: 100px;
    height: 100px;
  }
  @media (width >= 87.5rem) {
    width: 130px;
    height: 130px;
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
