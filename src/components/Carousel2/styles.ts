import styled from 'styled-components'

export const Embla = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 5%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    #f8f4ec 100%
  );
  font-family: 'Montserrat', sans-serif;
  user-select: none;

  @media (max-width: 375px) {
    padding: 1.5rem 3%;
  }
`

export const EmblaViewport = styled.div`
  overflow: hidden;
  min-height: 350px;

  @media (max-width: 375px) {
    min-height: 250px;
  }
`

export const EmblaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: opacity 0.8s ease, transform 0.8s ease;

  @media (max-width: 375px) {
    gap: 1rem;
  }
`

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

export const EmblaSlideImgWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 375px) {
    max-width: 280px;
  }
`

export const EmblaSlideImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 375px) {
    width: 280px;
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
  color: ${({ theme }) => theme.colors.green};

  p {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
  }

  @media (max-width: 375px) {
    padding: 1rem;

    p {
      width: 100%;
    }
  }
`

export const ProductTitle = styled.h3`
  font-size: clamp(1.4rem, 5vw, 2.3rem);
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.green};
`

export const InStock = styled.span`
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: ${({ theme }) => theme.colors.green};

  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`
