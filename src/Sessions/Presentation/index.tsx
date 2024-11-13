import React, { useState } from "react"
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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <PresentationContainer>
      <Content>
        <Title>Conheça Nosso Trabalho</Title>

        <VideoContainer onClick={openModal}>
          <PlayButton>
            <FaPlay size={50} />
          </PlayButton>
        </VideoContainer>

        <Description>
          Assista ao nosso vídeo de apresentação para saber mais sobre os nossos
          produtos.
        </Description>

        {isModalOpen && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ReactPlayer
                url='https://vimeo.com/1029386098?share=copy' // Substitua pelo link do seu vídeo do Vimeo
                width='100%' // Define para ocupar 100% da largura do container
                height='100%' // Ajuste para altura responsiva
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
