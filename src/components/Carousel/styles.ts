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

    padding: 32px 0;

    .photo {
      border-radius: 800px;
      background-color: ${({ theme }) => theme.colors.gold};
      padding: 5px;
      img {
        width: 250px;
        height: 400px;
      }
    }

    img {
      width: 180px;
      border-radius: 900px;
    }

    .text {
      gap: 30px;
      padding: 30px;
      text-align: center;

      img {
        padding: 10px;
        margin-bottom: 20px;
        svg {
          color: ${({ theme }) => theme.colors.gold};
        }
      }

      h1 {
        font-size: 2rem;
      }
    }

    @media (width >= 80rem) {
      flex-direction: row;
      padding: 0 50px;
      justify-content: space-evenly;
      gap: 40px;

      .photo {
        border-radius: 800px;
        background-color: ${({ theme }) => theme.colors.gold};
        padding: 5px;
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
      }

      img {
        width: 250px;
      }

      p {
        font-size: 24px;
        margin-top: 10px;
      }
    }
    @media (width >= 87.5rem) {
      flex-direction: row;
      padding: 0 70px;
      justify-content: space-evenly;
      gap: 40px;

      .photo {
        img {
          width: 400px;
          height: 600px;
        }
      }

      .text {
        width: 800px;

        img {
          width: 200px;
          margin-right: 30px;
        }

        h1 {
          font-size: 5rem;
        }
      }

      p {
        font-size: 1.75rem;
        margin-top: 10px;
      }
    }
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
