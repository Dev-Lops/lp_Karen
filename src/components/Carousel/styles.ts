import styled from "styled-components"

export const CarrouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.green || "#2e8b57"};

  .keen-slider {
  }

  .number-slide {
    display: flex;
    flex-direction: column;

    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 500;

    .photo img {
      object-fit: cover;
      width: 300px;
      height: 400px;
      padding: 30px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: center;
      padding: 20px;

      h1 {
        font-size: 1.875rem; /* 30px */
      }

      p {
        margin-top: 1rem;
        font-size: 1.125rem; /* 18px */
        line-height: 1.6;
      }

      .out-of-stock {
        background-color: #e63946;
        color: #fff;
        padding: 20px 25px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 2rem;
        margin-top: 10px;
        text-align: center;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      button {
        color: ${({ theme }) => theme.colors.green || "#2e8b57"};
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: ${({ theme }) => theme.colors.green || "#2e8b57"};
          color: #fff;
        }
      }
    }
  }

  /* Media Queries */
  @media (min-width: 1024px) {
    .number-slide {
      flex-direction: row;
      justify-content: space-between;
      text-align: start;
      padding: 30px;

      .photo {
        flex: 1;
        max-width: 50%;
      }

      .photo img {
        height: 100%;
        max-height: 75vh; /* Ajuste proporcional */
        width: 100%;
        border-radius: 0;
      }

      .text {
        flex: 1;
        align-items: flex-start;
        padding: 20px;

        h1 {
          font-size: 2.5rem; /* 40px */
        }

        p {
          font-size: 1.5rem; /* 24px */
          line-height: 1.8;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .number-slide .photo img {
      height: 300px; /* Ajuste de altura para tablets */
    }

    .number-slide .text h1 {
      font-size: 1.5rem; /* 24px */
    }

    .number-slide .text p {
      font-size: 1rem; /* 16px */
    }
  }

  @media (max-width: 768px) {
    .number-slide {
      flex-direction: column; /* Retorna para coluna em telas médias */
    }

    .number-slide .photo img {
      height: 100%;
    }

    .number-slide .text h1 {
      font-size: 1.25rem; /* 20px */
    }

    .number-slide .text p {
      font-size: 0.875rem; /* 14px */
    }
  }

  @media (max-width: 480px) {
    .number-slide .photo img {
      height: 400px; /* Ajuste para telas pequenas */
    }

    .number-slide .text h1 {
      font-size: 1.2rem; /* 16px */
    }

    .number-slide .text p {
      font-size: 1rem; /* 12px */
    }

    .number-slide .text .out-of-stock {
      font-size: 1.5rem; /* 14px */
    }
  }
`
