import { useCallback, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Divider } from "../../components/Divider";
import {
  Content,
  Description,
  ModalContent,
  ModalOverlay,
  PlayButton,
  PresentationContainer,
  Title,
  VideoContainer
} from "./styles";

export function Presentation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Alterna o estado do modal (abre/fecha)
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <PresentationContainer>
        <Content data-aos="zoom-in-up">
          <Title data-aos="fade-up" data-aos-duration="3000">
            Tudo que seu cabelo precisa, na palma de suas mãos.
          </Title>

          <VideoContainer onClick={toggleModal}>
            <PlayButton aria-label="Assistir vídeo">
              <FaPlay size={50} />
            </PlayButton>
          </VideoContainer>

          <Description>
            Assista ao nosso vídeo de apresentação para saber mais sobre os
            nossos produtos.
          </Description>

          {isModalOpen && (
            <ModalOverlay onClick={toggleModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                  url="https://streamable.com/73j94v"
                  width="100%"
                  height="100%"
                  controls
                  playing
                  onError={() => {
                    alert(
                      "O vídeo não pôde ser carregado. Por favor, tente novamente mais tarde."
                    );
                  }}
                />
              </ModalContent>
            </ModalOverlay>
          )}
        </Content>
      </PresentationContainer>
      <Divider />
    </>
  );
}
