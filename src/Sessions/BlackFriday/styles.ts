import styled from 'styled-components'

export const BirthdayPromoWrapper = styled.section`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`

export const BirthdayPromoContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, #f8f8f5, #e8e6dd, #f8f8f5);
  border-left: 10px solid #557655;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 0.75rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease forwards;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .background-icons {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-around;
    align-items: start;
    opacity: 0.1;
    pointer-events: none;

    img {
      width: 64px;
      height: 64px;
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }

  h3 {
    /* font-weight: 800;
      color: #557655;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem; */
    animation: pulse 2s infinite;

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.02);
      }
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  p {
    font-size: clamp(1rem, 3vw, 1.25rem);
    color: #557655;
    font-weight: 500;

    strong {
      color: #557655;
    }

    &.sub {
      /* margin-top: 1rem; */
      font-size: 0.875rem;
      color: #777;
      font-style: italic;
    }
  }

  .timer {
    margin-top: 1.5rem;
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    font-weight: 700;
    background: #e8e6dd;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    display: inline-block;
    color: #557655;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
  }
`
