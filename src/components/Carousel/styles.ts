// BenefitsCarousel/styles.ts
import styled from "styled-components"

export const CarrouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};

  .keen-slider {
    width: 100%;
    height: 100vh;
  }

  .number-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 500;

    .photo {
      img {
        object-fit: cover;
        width: 100%;
        height: 500px;
        border-radius: 500px;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
      color: #fff;
      width: 100%;

      h1 {
        font-size: 1.875rem;
      }

      img {
        width: 110px;
        height: 20px;
      }

      p {
        margin-top: 1rem;
        font-size: 1.125rem;
        line-height: 1.6;
      }

      .out-of-stock {
        background-color: #e63946;
        color: #fff;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 1rem;
      }
    }

    @media (width >= 80rem) {
      justify-content: space-evenly;
      flex-direction: row;
      padding: 30px;
      height: 100vh;

      & .photo {
        width: 100vw;
        object-fit: cover;
        height: 100%;

        img {
          width: 100%;
          height: 100vh;
          object-position: center;
          border-radius: 0;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        width: 900px;

        letter-spacing: 0px;

        h1 {
          font-size: 2.5rem;
          text-align: center;
        }
        p {
          text-align: left;
          width: 500px;
          font-size: 1.8rem;
        }
        img {
          width: 100px;
        }

        .out-of-stock {
          font-size: 2rem;
          padding: 10px 20px;
        }
      }
    }

    @media (width >= 87.5rem) {
      .photo {
      }
      .text {
        width: 700px;
        text-align: start;

        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.5rem;
        }
        .out-of-stock {
          font-size: 2rem;
          padding: 10px 20px;
        }
      }
    }
  }
`
