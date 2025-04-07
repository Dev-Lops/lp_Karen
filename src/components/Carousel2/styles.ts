import styled from 'styled-components'

export const Embla = styled.div`
  /* Container principal do carousel */
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 2rem 1rem; /* Espaço interno para "respirar" */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  /* Gradiente sutil no background */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    #f8f4ec 100%
  );

  font-family: 'Montserrat', sans-serif;
  user-select: none;
`

export const EmblaViewport = styled.div`
  overflow: hidden;
  min-height: 400px; /* Evita "pulo" no layout */
`

export const EmblaContainer = styled.div`
  display: flex;
  gap: 2rem;
  transition: opacity 0.8s ease, transform 0.8s ease;
`

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Em telas >= 768px, divide em duas colunas (imagem e texto) */
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const EmblaSlideImgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const EmblaSlideImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  /* Animação sutil no hover */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  }
`

export const EmblaSlideInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.green}; /* Ajusta a cor do texto */

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.green};
    @media (min-width: 80rem) {
      font-size: 1.25rem;
    }
  }
`

export const ProductTitle = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
`

export const InStock = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.green};
  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }
`
