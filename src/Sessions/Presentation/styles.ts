import styled from "styled-components"

export const PresentationContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  padding: 40px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gold};
`

export const Content = styled.div`
  display: flex;
  width: 375px;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (width>= 80rem) {
    width: 1000px;
  }
  @media (width>= 87.5rem) {
    font-size: 4rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (width>= 80rem) {
    font-size: 3rem;
  }
  @media (width>= 87.5rem) {
    font-size: 4rem;
  }
`

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.brunswickGreen};

  @media (width>= 80rem) {
    font-size: 1.5rem;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`

export const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  background: #000;
  border-radius: 8px;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; /* Garante que o vídeo se ajuste sem distorcer */
    object-position: center; /* Mantém o vídeo centralizado */
    border-radius: 8px;
  }
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
  max-width: 100%; /* Garante que o modal tenha uma largura razoável */
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  max-height: 90vh; /* Limita a altura do modal */
`

export const Video = styled.video`
  width: 100%; /* O vídeo ocupará 100% da largura do modal */
  height: auto; /* A altura será ajustada automaticamente */
  max-height: 90vh; /* Limita a altura do vídeo */
  object-fit: contain; /* Garante que o vídeo será redimensionado sem cortar ou distorcer */
  border-radius: 10px;
`

export const MediaQueries = styled.div`
  /* Media Query para telas maiores */
  @media (width >= 80rem) {
    ${ModalContent} {
      max-width: 90%;
    }

    ${Video} {
      max-width: 100%;
      max-height: 80vh; /* A altura do vídeo será maior em telas grandes */
    }
  }

  /* Media Query para telas ainda maiores */
  @media (width >= 87.5rem) {
    ${ModalContent} {
      max-width: 95%; /* Aumenta a largura ainda mais para telas maiores */ /* Aumenta o padding para telas maiores */
    }

    ${Video} {
      max-width: 100%; /* O vídeo ocupa 100% da largura do modal */
      max-height: 75vh; /* Ajusta a altura para telas grandes */
    }
  }
`

export const ModalContentLarge = styled(ModalContent)`
  max-width: 1200px;
`

export const ModalContentExtraLarge = styled(ModalContent)`
  max-width: 1200px;
`
