// styles.ts
import styled from 'styled-components'

export const Section = styled.section`
  /* padding-block: 2rem;  */
  width: 100%;
  max-width: 76.5rem;
  margin-inline: auto;

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 1rem;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 450px;
  border-radius: 1.25rem;
  overflow: hidden;
`

export const Box = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-top-right-radius: 1.25rem;
  border-top-left-radius: 1.25rem;
  overflow: hidden;

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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex-grow: 1;
      display: block;
      transition: opacity 0.3s;
    }

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
      top: 10px;
      left: 10px;
      background-color: red;
      color: white;
      padding: 0.625rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 1rem;
      z-index: 2;
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

export const Title = styled.h3`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Melodrama', serif;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.green};
`

export const CardContent = styled.div`
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.green};
  border-bottom-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 5.5rem;

  p {
    text-align: center;
    font-size: clamp(0.875rem, 5vw, 1.5rem);
    color: #fff;
    margin: 0.25rem 0;
  }

  span {
    font-size: clamp(0.875rem, 5vw, 1.5rem);
    margin-right: 10px;
    flex-wrap: wrap;
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
