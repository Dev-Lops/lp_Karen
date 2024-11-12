import { useRef, useState } from "react"
import { FaPlay } from "react-icons/fa"
import {
  Content,
  Description,
  PlayButton,
  PresentationContainer,
  Title,
  Video,
  VideoContainer,
  VideoThumbnail,
  ModalOverlay,
  ModalContent,
  MediaQueries,
} from "./styles"

export function Presentation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePause = () => {
    setIsPlaying(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (videoRef.current) {
      videoRef.current.pause() // Pausa o vídeo quando o modal é fechado
    }
  }

  return (
    <PresentationContainer>
      <Content>
        <Title>Conheça Nosso Trabalho</Title>
        <Description>
          Assista ao nosso vídeo de apresentação para saber mais sobre nós e
          como podemos ajudá-lo.
        </Description>
        <VideoContainer onClick={openModal}>
          <VideoThumbnail>
            <Video
              ref={videoRef}
              onPause={handlePause}
              onEnded={handlePause}
              poster='thumbnail.jpg'
            >
              <source src='src/assets/media/IMG_2218.MOV' type='video/mp4' />
              Seu navegador não suporta o vídeo.
            </Video>
            {!isPlaying && (
              <PlayButton>
                <FaPlay size={50} />
              </PlayButton>
            )}
          </VideoThumbnail>
        </VideoContainer>
        {isModalOpen && (
          <ModalOverlay onClick={closeModal}>
            <div onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                <Video ref={videoRef} controls poster='thumbnail.jpg' autoPlay>
                  <source
                    src='src/assets/media/IMG_2218.MOV'
                    type='video/mp4'
                  />
                  Seu navegador não suporta o vídeo.
                </Video>
              </ModalContent>
            </div>
          </ModalOverlay>
        )}
      </Content>
      <MediaQueries />
    </PresentationContainer>
  )
}
