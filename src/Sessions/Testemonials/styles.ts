import styled from 'styled-components'

// Container principal da seção de Testemunhos
export const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 4rem 1.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-color: #fff;

  text-align: center;

  @media (width >= 80rem) {
    padding: 40px;
  }
  @media (width >= 87.5rem) {
  }
`

// Título da seção de Testemunhos
export const SectionTitle = styled.h2`
  margin-bottom: 40px;

  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Stardom', serif;
  letter-spacing: 3px;
  font-weight: bold;

  @media (width >= 80rem) {
    font-size: 3rem;
  }
`

// Contêiner do carrossel
export const CarouselContainer = styled.div`
  width: 100%;

  justify-content: center;
  align-items: center;

  @media (width >= 80rem) {
  }
`
