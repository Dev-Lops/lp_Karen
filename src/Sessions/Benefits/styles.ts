import styled from "styled-components"

export const BenefitsContainer = styled.section`
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gold};
  height: 100vh;

  flex-direction: column;

  & h1 {
    padding: 24px;
    text-align: center;
    color: #01ab9e;
  }

  @media (width >=80rem) {
    height: 500px;

    > div {
      display: inline-flex;
    }

    & h1 {
      padding: 32px;
      text-align: center;
      font-size: 3.125rem;
    }
  }
  @media (width >=87.5rem) {
    > div {
      width: 1200px;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

export const CardBeneficit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 16px;
  gap: 16px;

  p {
    text-align: center;
  }

  @media (width >=80rem) {
    width: 350px;

    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }

    img {
      width: 90px;
      height: auto;
    }
  }
  @media (width >=87.5rem) {
    width: 450px;
    img {
      width: 100px;
      height: auto;
    }
  }
`
