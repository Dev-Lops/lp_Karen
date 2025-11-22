import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Embla = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 5%;
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.gold} 0%,
    #f8f4ec 50%,
    ${({ theme }) => theme.colors.gold} 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  font-family: 'Montserrat', sans-serif;
  user-select: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${shimmer} 3s infinite;
  }

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
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.1) 0%,
      transparent 50%,
      rgba(16, 185, 129, 0.1) 100%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

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
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(212, 175, 55, 0.3);

  &:hover {
    transform: scale(1.05) translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.2),
      inset 0 0 0 2px rgba(212, 175, 55, 0.5);
    border-color: rgba(212, 175, 55, 0.6);
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
  gap: 1.25rem;
  text-align: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.green};
  animation: ${fadeIn} 1s ease-out 0.3s both;

  p {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    line-height: 1.6;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
  font-weight: 700;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.green} 0%,
    ${({ theme }) => theme.colors.brunswickGreen} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  letter-spacing: 0.5px;
`

export const InStock = styled.span`
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  padding: 0.5rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.15) 0%,
    rgba(16, 185, 129, 0.05) 100%
  );
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  display: inline-block;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  animation: ${fadeIn} 1s ease-out 0.4s both;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 375px) {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }
`
