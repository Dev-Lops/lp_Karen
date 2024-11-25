import styled from "styled-components"

// Container principal da seção de apresentação
export const PresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.green};

  @media (min-width: 80rem) {
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 80rem) {
    width: 750px;
  }

  @media (min-width: 87.5rem) {
    width: 850px;
  }
`

export const Title = styled.h2`
  font-family: "Baskervville", serif;
  font-weight: 100;
  text-transform: uppercase;

  font-size: 1rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* Proporção de 16:9 */
  cursor: pointer;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: white;
  z-index: 1;
  font-size: 2rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.green};
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
`

export const ModalContent = styled.div`
  width: 90%;
  max-width: 900px;
  height: 70%;
  aspect-ratio: 16/9;
  background: #000;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 80%;
    height: 75%;
  }

  @media (min-width: 1024px) {
    width: 70%;
    height: 75%;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`
