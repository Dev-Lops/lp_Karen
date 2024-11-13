// src/components/ProductsGrid/styles.ts

import styled from "styled-components"

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px; /* Adiciona padding horizontal e vertical */
  gap: 48px;
  width: 100%;
  max-width: 1280px;
  background: #ffffff;

  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    font-family: "Baskervville", serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.green};
  }
`

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  width: 100%;

  /* Responsividade para 4 colunas em telas grandes */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 4 colunas */
    gap: 24px;
  }

  /* Responsividade para telas menores (até 1024px) */
  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    gap: 24px;
  }

  /* Responsividade para mobile (telas menores que 600px) */
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr; /* 1 coluna */
    gap: 16px;
  }
`

export const ProductCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  background: #557655;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  width: 100%; /* Ajusta o card ao tamanho da coluna */
  min-width: 300px;
  height: 100%;

  @media (width >= 80rem) {
  }

  .product-image {
    display: flex;
    width: 100%;

    margin-bottom: 1rem;
    cursor: pointer;

    img {
      width: 100%;
      height: 400px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;

      object-fit: cover;
    }
  }

  .product-info {
    display: flex;
    width: 100%;

    padding: 32px;

    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    h3 {
      font-size: 1.25rem;
      color: #fff;
      margin: 0;
    }

    p {
      font-size: 1rem;
      color: #f5f5f5;
    }

    @media (width >= 80rem) {
      h3 {
        font-size: 2rem;
        color: #fff;
        margin: 0;
      }

      p {
        font-size: 1.25rem;
        color: #f5f5f5;
      }
    }
  }
`
