// styles.ts
import styled, { css, keyframes } from 'styled-components'

type BFProps = { $bfActive?: boolean }

const goldPulse = keyframes`
  0%, 100% {
    box-shadow:
      0 8px 16px rgba(212, 175, 55, 0.15),
      0 4px 6px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      0 0 0 1px rgba(212, 175, 55, 0.2) inset,
      0 0 20px 2px rgba(212, 175, 55, 0.15);
  }
  50% {
    box-shadow:
      0 12px 32px rgba(212, 175, 55, 0.25),
      0 6px 12px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 1),
      0 0 0 2px rgba(212, 175, 55, 0.35) inset,
      0 0 35px 6px rgba(212, 175, 55, 0.25);
  }
`

export const Section = styled.section`
  width: 100%;
  max-width: 76.5rem;
  margin-inline: auto;
  padding: 4rem 1rem;

  h2 {
    text-transform: uppercase;
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Stardom', serif;
    letter-spacing: 3px;
    font-weight: bold;
    text-align: center;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 0.5rem;
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CardWrapper = styled.div<BFProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 400px;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.25rem;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.15) 0%,
      rgba(16, 185, 129, 0.05) 50%,
      rgba(16, 185, 129, 0.15) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${({ $bfActive }) =>
    $bfActive &&
    css`
      background: linear-gradient(145deg, #fffbf0 0%, #fff9e6 100%);
      border: 2px solid rgba(212, 175, 55, 0.3);
      box-shadow: 0 8px 16px rgba(212, 175, 55, 0.15),
        0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9),
        0 0 0 1px rgba(212, 175, 55, 0.2) inset;
      animation: ${goldPulse} 2.6s ease-in-out infinite;

      &::before {
        background: linear-gradient(
          135deg,
          rgba(212, 175, 55, 0.4) 0%,
          rgba(255, 215, 0, 0.2) 50%,
          rgba(212, 175, 55, 0.4) 100%
        );
        opacity: 1;
      }

      &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(212, 175, 55, 0.25),
          0 10px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1),
          0 0 0 2px rgba(212, 175, 55, 0.4) inset,
          0 0 30px 8px rgba(212, 175, 55, 0.2);
      }
    `}

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 1);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    min-height: 380px;
  }

  @media (min-width: 768px) {
    min-height: 450px;
    border-radius: 1.25rem;
  }
`

export const Box = styled.div<BFProps>`
  width: 100%;
  height: auto;
  position: relative;
  border-top-right-radius: 1.25rem;
  border-top-left-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    height: 350px;
  }

  &.disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex-grow: 1;
      display: block;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      filter: brightness(1) contrast(1.02);
    }

    ${CardWrapper}:hover & img {
      transform: scale(1.08);
      filter: brightness(1.05) contrast(1.05);
    }

    /* Overlay sutil verde no hover */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at center,
        rgba(16, 185, 129, 0.08) 0%,
        transparent 70%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 1;
    }

    ${CardWrapper}:hover &::after {
      opacity: 1;
    }

    /* Efeitos apenas durante Black Friday */
    ${({ $bfActive }) =>
      $bfActive &&
      css`
        background: linear-gradient(180deg, #fffbf0 0%, #fff9e6 100%);

        ${CardWrapper}:hover & img {
          transform: scale(1.1) rotate(1deg);
          filter: brightness(1.08) contrast(1.08) saturate(1.1);
        }

        /* realce suave nas bordas superiores da imagem */
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(
            180deg,
            rgba(212, 175, 55, 0.3),
            transparent
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Brilho sutil no hover */
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            rgba(212, 175, 55, 0.15) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        ${CardWrapper}:hover &::after {
          opacity: 1;
        }
      `}

    &.outOfStock {
      ::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
      }

      img {
        opacity: 0.2;
      }

      .outOfStockText {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: red;
        font-weight: bold;
        font-size: 1.5rem;
        z-index: 2;
      }
    }

    .discount-tag {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 0.6rem 1rem;
      font-size: 0.95rem;
      font-weight: 900;
      border-radius: 999px;
      z-index: 2;
      border: 2px solid #000;
      backdrop-filter: blur(4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.4);
      animation: ${goldPulse} 2s ease-in-out infinite;
      transition: transform 0.3s ease;

      ${CardWrapper}:hover & {
        transform: scale(1.1) rotate(-2deg);
      }
    }

    .icon {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      background: ${({ theme }) => theme.colors.green};
      display: flex;
      justify-content: center;
      align-items: center;

      &.outOfStock {
        background: none;
      }

      .iconBox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme.colors.white};
        background: none;
        border: none;
        font-size: clamp(0.875rem, 5vw, 1rem);
        font-family: 'Melodrama', sans-serif;
        letter-spacing: 2px;
        white-space: nowrap;

        &:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      }
    }
  }
`

export const Title = styled.h3<BFProps>`
  font-size: clamp(0.9rem, 4vw, 1.25rem);
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Melodrama', serif;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 12px 8px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: auto;
  min-height: 3.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.green};
    transition: width 0.3s ease;
  }

  ${CardWrapper}:hover & {
    background: linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%);

    &::after {
      width: 80%;
    }
  }

  ${({ $bfActive }) =>
    $bfActive &&
    css`
      border-top: 1px solid rgba(212, 175, 55, 0.35);
      border-bottom: 1px solid rgba(212, 175, 55, 0.35);
      background: linear-gradient(180deg, #fffbf0 0%, #fff9e6 100%);
      color: ${({ theme }) => theme.colors.gold};
      text-shadow: 0 1px 2px rgba(212, 175, 55, 0.2);

      &::after {
        background: linear-gradient(
          90deg,
          transparent 0%,
          ${({ theme }) => theme.colors.gold} 50%,
          transparent 100%
        );
      }
    `}

  @media (max-width: 640px) {
    font-size: 0.95rem;
    padding: 6px;
    min-height: 3rem;
    letter-spacing: 0.3px;
  }

  @media (min-width: 768px) {
    height: 4rem;
    padding: 10px;
  }
`

export const CardContent = styled.div<BFProps>`
  padding: 1rem 0.75rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.green} 0%,
    ${({ theme }) => theme.colors.brunswickGreen} 100%
  );
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${CardWrapper}:hover & {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.brunswickGreen} 0%,
      ${({ theme }) => theme.colors.green} 100%
    );
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);

    &::before {
      opacity: 1;
    }
  }

  ${({ $bfActive }) =>
    $bfActive &&
    css`
      background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(212, 175, 55, 0.3), 0 4px 8px rgba(212, 175, 55, 0.2);

      &::before {
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(212, 175, 55, 0.5) 50%,
          transparent 100%
        );
        opacity: 1;
      }

      ${CardWrapper}:hover & {
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4),
          inset 0 1px 0 rgba(212, 175, 55, 0.4),
          0 6px 12px rgba(212, 175, 55, 0.3);
      }
    `}

  @media (max-width: 640px) {
    padding: 0.5rem 0.375rem;
    min-height: 4.5rem;
    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 0.625rem;
    min-height: 5.5rem;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }

  p {
    text-align: center;
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    color: #fff;
    margin: 0.15rem 0;

    @media (max-width: 640px) {
      font-size: 0.85rem;
      margin: 0.1rem 0;
    }
  }

  span {
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    margin-right: 8px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      font-size: 0.85rem;
      margin-right: 6px;
    }
  }
`

export const CheckoutButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  font-weight: bold;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9.375rem;
  max-width: 80%;
  overflow: hidden;
  z-index: 99;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brunswickGreen};
  }

  .cart-count {
    background-color: red;
    min-width: 1.5rem;
    height: 1.5rem;
    padding: 0 0.4rem;
    border-radius: 999px;
    color: white;
    font-weight: bold;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.75rem;
  }
`
