import styled from "styled-components"

// Container principal dos benefícios
export const BenefitsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gold};
  height: 100vh;

  h1 {
    width: 375px;
    margin: 0 auto;
    padding: 24px;
    text-align: center;
    color: #000;
  }
  h2 {
    text-align: center;
    color: #000;
  }

  p {
    text-align: center;
    color: #000;
    margin-bottom: 10px;
  }

  @media (width >= 80rem) {
    height: 500px;

    > div {
      display: inline-flex;
    }

    h1 {
      padding: 32px;
      font-size: 3.125rem;
    }
  }

  @media (min-width: 87.5rem) {
    > div {
      width: 1200px;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

// Estilos para cada card de benefício
export const CardBeneficit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 16px;
  gap: 16px;

  img {
    animation: bounce 4s infinite;
    width: 50px;
    height: auto;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }

  @media (min-width: 80rem) {
    width: 350px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 87.5rem) {
    width: 450px;
  }
`
