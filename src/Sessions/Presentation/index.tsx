import { useState, useCallback } from "react"
import ReactPlayer from "react-player/vimeo"
import { FaPlay } from "react-icons/fa"
import {
  Content,
  Description,
  PlayButton,
  PresentationContainer,
  Title,
  VideoContainer,
  ModalOverlay,
  ModalContent,
} from "./styles"

export function Presentation() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Alterna o estado do modal (abre/fecha)
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const videoUrl = "https://vimeo.com/1029386098?share=copy" // Substitua pelo link correto

  return (
    <PresentationContainer data-aos='zoom-in-up'>
      <Content>
        <Title>Conheça Nosso Trabalho</Title>

        <VideoContainer onClick={toggleModal}>
          <PlayButton aria-label='Assistir vídeo'>
            <FaPlay size={50} />
          </PlayButton>
        </VideoContainer>

        <Description>
          Assista ao nosso vídeo de apresentação para saber mais sobre os nossos
          produtos.
        </Description>

        {isModalOpen && (
          <ModalOverlay
            onClick={toggleModal}
            aria-hidden={!isModalOpen} // Ajuda ferramentas de acessibilidade
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ReactPlayer
                url={videoUrl}
                width='100%'
                height='100%'
                controls
                playing
              />
            </ModalContent>
          </ModalOverlay>
        )}
      </Content>
    </PresentationContainer>
  )
}
