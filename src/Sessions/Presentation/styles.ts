import styled from 'styled-components'

/* Container principal da seção de apresentação */
export const PresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Usa min-height para garantir que o container tenha espaço mínimo */
  min-height: 60vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.green};
  position: relative;
  z-index: 1;

  /* Para dispositivos muito pequenos, diminui os paddings sem restringir demasiadamente a largura */
  @media (max-width: 375px) {
    padding: 10px;
  }
`

/* Conteúdo principal centralizado com largura fluida */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`

/* Título com tipografia fluida e espaçamento ajustável */
export const Title = styled.h2`
  font-family: 'Stardom', serif;
  font-weight: bold;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 10px;

  @media (max-width: 480px) {
    /* Reduz ligeiramente a fonte e letter-spacing em telas pequenas */
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
`

/* Container de vídeo com proporção 16:9 ajustada para pequenos dispositivos */
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 */
  cursor: pointer;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    /* Se necessário, ajuste ligeiramente a proporção para pequenos dispositivos */
    padding-top: 60%;
  }
`

/* Botão de play com tamanho fluido */
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
  font-size: clamp(1.5rem, 3vw, 2rem);

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 1.4rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.green};
  }
`

/* Overlay para modal com transição suave */
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

/* Conteúdo do modal responsivo */
export const ModalContent = styled.div`
  width: 90%;
  max-width: 900px;
  height: 70%;
  aspect-ratio: 16 / 9;
  background: #000;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 480px) {
    /* Em telas muito pequenas, usar largura quase total e ajustar altura automaticamente */
    width: 95%;
    height: auto;
    aspect-ratio: auto;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    width: 85%;
    height: 75%;
  }

  @media (min-width: 1024px) {
    width: 70%;
    height: 75%;
  }
`

/* Descrição com tipografia fluida e margens ajustáveis */
export const Description = styled.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: #fff;
  text-align: center;
  margin: 20px auto 0;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 480px) {
    margin: 10px auto;
    font-size: 0.9rem;
    line-height: 1.4;
    max-width: 90%;
  }
`

/* Estrelas com tamanho fluido */
export const Stars = styled.img`
  width: clamp(4rem, 8vw, 6rem);
  height: auto;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    width: 3.5rem;
  }
`
