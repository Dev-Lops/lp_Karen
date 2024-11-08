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
    color: #fff;
    font-weight: 500;

    padding: 32px 0;

    .photo {
      border-radius: 800px;
      /* border: 1px solid ${({ theme }) => theme.colors.gold}; */
      background-color: ${({ theme }) => theme.colors.gold};
      padding: 8px;
    }

    img {
      width: 180px;
      border-radius: 800px;
    }

    .text {
      gap: 30px;
      padding: 30px;
      text-align: center;

      img {
        padding: 0 0 10px;
      }
      svg {
        background-color: ${({ theme }) => theme.colors.gold};
      }

      h1 {
        font-size: 2rem;
      }
    }

    @media (width >= 80rem) {
      flex-direction: row;
      padding: 0 50px;
      justify-content: space-around;

      .text {
        text-align: start;
        width: 700px;

        img {
          width: 200px;
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

      img {
        width: 320px;
      }

      p {
        font-size: 1.75rem;
        margin-top: 10px;
      }
    }
  }

  .number-slide1 {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
