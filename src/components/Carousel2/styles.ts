import styled from "styled-components"

export const Embla = styled.div`
  max-width: 100vw;
  margin: auto;
  --slide-height: 100vh;
  --slide-spacing: 1rem;
  --slide-size: 100%;

  /* Media Queries para responsividade */
  @media (max-width: 80rem) {
    --slide-height: 100vh; /* Menor altura para tablets */
    --slide-size: 100%; /* Ajusta o tamanho do slide em telas médias */
  }

  @media (max-width: 480px) {
    --slide-height: 100vh; /* Menor altura para dispositivos móveis */
    --slide-size: 100%; /* Ajuste total da largura do slide */
  }
`

export const EmblaViewport = styled.div`
  overflow: hidden;
`

export const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
  transition: transform 0.5s ease-in-out; /* Adicionando transição suave */
`

export const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
`

export const EmblaSlideImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const EmblaSlideImg = styled.img`
  display: block;
  height: var(--slide-height);
  width: 100vw;
  object-fit: cover;
  user-select: none;

  @media (min-width: 80rem) {
    object-fit: cover;
  }
`

export const EmblaSlideInfo = styled.div`
  position: absolute;
  font-family: "Jura", serif;

  font-weight: 400;
  bottom: 10px;
  left: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 8px;
  width: calc(100% - 20px);

  .old-price {
    text-decoration: line-through;
    margin-right: 0.5rem;
    color: #fff;
    font-weight: 100;
  }

  .current-price {
    font-weight: bold;
    color: #fff;
  }

  /* Ajuste responsivo para o texto */
  @media (min-width: 80rem) {
    font-size: 2rem; /* Reduzir o tamanho da fonte para telas médias */
    padding: 0.8rem; /* Ajustar o padding para telas menores */
  }
  @media (min-width: 90rem) {
    font-size: 2.5rem; /* Reduzir o tamanho da fonte para telas médias */
    padding: 0.8rem; /* Ajustar o padding para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Fonte ainda menor em dispositivos móveis */
    padding: 0.6rem; /* Menor padding */
  }
`

export const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0;

  @media (min-width: 80rem) {
    font-size: 1.5rem; /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Ajuste do tamanho da fonte para celulares */
  }
`

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; /* Ajuste do tamanho da fonte para dispositivos móveis */
  }
`

export const ProductPrice = styled.div`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduzir a fonte para dispositivos menores */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Reduzir ainda mais a fonte em dispositivos móveis */
  }
`
