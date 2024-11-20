import { useState, useCallback } from "react"
import ReactPlayer from "react-player"
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

  return (
    <PresentationContainer data-aos='zoom-in-up'>
      <Content>
        <Title>Conheça Nossos Serviços</Title>

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
          <ModalOverlay onClick={toggleModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ReactPlayer
                url='https://dtsel6fm8qr8n.cloudfront.net/karen_frazão (1080p).mp4'
                width='100%'
                height='100%'
                controls
                playing
                onReady={() => console.log("Player pronto")}
                onStart={() => console.log("Vídeo começou")}
                onError={(e) => {
                  console.error("Erro no player:", e)
                  alert(
                    "O vídeo não pôde ser carregado. Por favor, tente novamente mais tarde."
                  )
                }}
              />
            </ModalContent>
          </ModalOverlay>
        )}
      </Content>
    </PresentationContainer>
  )
}
