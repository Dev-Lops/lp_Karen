import styled from "styled-components"

export const PresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 10px;
  height: 90vh;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (width >= 80rem) {
    width: 750px;
  }

  @media (width >= 87.5rem) {
    width: 850px;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.green};
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding-top: 56.25%; /* Proporção de 16:9 */
  cursor: pointer;
  background-color: #000;
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
`

export const ModalContent = styled.div`
  width: 85%; // Ajusta a largura do modal para ocupar grande parte da tela
  height: 450px;
  aspect-ratio: 16/9; // Mantém a proporção
  background: #000;
  position: relative;
  border-radius: 10px;

  @media (width >= 80rem) {
    height: 75%;
    width: 35%; // Ajusta a largura do modal para ocupar grande parte da tela
  }

  @media (width >= 80rem) {
    height: 75%;
    width: 35%; // Ajusta a largura do modal para ocupar grande parte da tela
  }
`
export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
`
