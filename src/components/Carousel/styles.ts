import styled from "styled-components"

export const CarrouselContainer = styled.div`
  width: 100%;

  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: 500;
    padding: 32px;

    .photo {
      border-radius: 800px;
      background-color: ${({ theme }) => theme.colors.gold};
      padding: 5px;
      img {
        width: 250px;
        height: 370px;
        border-radius: 500px;
      }
    }

    .text {
      gap: 30px;
      padding: 30px;
      justify-content: center;
      align-items: center;
      text-align: center;

      img {
        padding: 10px;
        margin-bottom: 10px;
      }

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1.25rem;
      }

      .out-of-stock {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;

        background-color: #e63946;
        border-radius: 0.5rem;
        padding: 0.625rem;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
        font-size: 1.25rem;
      }
    }

    @media (width >= 80rem) {
      flex-direction: row;
      padding: 0 50px;
      justify-content: space-evenly;
      gap: 40px;

      .photo {
        img {
          width: 350px;
          height: 550px;
        }
      }

      .text {
        text-align: start;
        width: 900px;

        img {
          width: 150px;
          margin-right: 30px;
        }

        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
        }

        .out-of-stock {
          width: 300px;
          font-size: 2rem;
        }
      }
    }

    /* Outras configurações de mídia */
  }

  .number-slide1 {
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0;

    @media (width >= 80rem) {
      padding: 30px;
      border-radius: 30px;
    }

    @media (width >= 87.5rem) {
      padding: 40px;
      border-radius: 20px;
    }
  }
`
