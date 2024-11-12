import styled from "styled-components"

// Container principal da seção de Testemunhos
export const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  /* background-color: ${({ theme }) => theme.colors.gold}; */
  text-align: center;

  @media (width >= 80rem) {
    width: 1000px;
  }
  @media (width >= 87.5rem) {
    width: 1300px;
  }
`

// Título da seção de Testemunhos
export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;

  @media (width >= 80rem) {
    font-size: 3rem;
  }
`

// Contêiner do carrossel
export const CarouselContainer = styled.div`
  width: 100%;
  height: 500px; /* Definindo altura fixa */

  justify-content: center;
  align-items: center;

  @media (width >= 80rem) {
    height: 700px;
  }
`
