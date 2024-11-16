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
    height: 100%;
  }

  .number-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 500;

    .photo img {
      object-fit: cover;
      width: 100%;
      height: 300px;
      border-radius: 16px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
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
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 1rem;
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
        color: ${({ theme }) => theme.colors.green};
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: ${({ theme }) => theme.colors.green};
          color: #fff;
        }
      }
    }

    &.out-of-stock {
    }
  }

  /* Media Queries */
  @media (min-width: 1024px) {
    .number-slide {
      flex-direction: row; /* Layout em linha para telas grandes */
      justify-content: space-between;
      text-align: start;
      padding: 30px;

      .photo {
        flex: 1;
        max-width: 50%;
      }

      .photo img {
        height: 90vh;
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

      .button-container {
        justify-content: flex-end; /* Botão à esquerda em telas grandes */
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
      height: 250px;
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
      font-size: 0.875rem; /* 14px */
    }
  }
`
