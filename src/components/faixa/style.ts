import styled from "styled-components"

export const StacksContainer = styled.div`
  font-family: "Syncopate", sans-serif;

  @media (width >= 80rem) {
    max-width: 100vw;
  }
`

export const Carousel = styled.div`
  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    height: 70px;
    gap: 0.75rem;

    & p {
      font-weight: bold;
      letter-spacing: 0.625rem;
    }

    & img {
      width: 1rem;
    }
  }

  .number-slide1 {
    display: flex;
    justify-content: space-between;
    background: #000;
    padding: 0 1.25rem;

    @media (width >= 80rem) {
      padding: 0 3rem;
      font-size: 1.875rem;
      width: 100%;
      height: 30px;

      .number-slide1 {
        display: flex;
        justify-content: space-between;
        background: #000;
        padding: 0 1.25rem;
      }
    }

    @media (width >=87.5rem) {
      height: 70px;
    }
  }
`
