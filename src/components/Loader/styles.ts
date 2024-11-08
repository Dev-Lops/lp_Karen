import styled, { keyframes } from "styled-components"

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  font-size: 1rem;
  font-family: "Syncopate", sans-serif;
  font-weight: bold;

  .leBlurIn span {
    animation-name: leBlurIn;
    margin-top: 2rem;
  }
  @keyframes leBlurIn {
    from {
      transform: scaleX(0.2);
      filter: blur(20px);
      opacity: 0;
    }
  }

  @media (width >=80rem) {
    font-size: 2rem;

    @keyframes leBlurIn {
      from {
        transform: scaleX(0.2);
        filter: blur(20px);
        opacity: 0;
      }
    }
  }
  @media (width >=87.5rem) {
    font-size: 3rem;
  }
  @keyframes leBlurIn {
    from {
      transform: scaleX(0.2);
      filter: blur(20px);
      opacity: 0;
    }
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(1.05);
  }
`

export const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.25rem;
`
/* HTML: <div class="loader"></div> */
