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
                  url="https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/karen_fraz%C3%A3o%20(1080p).mp4.mov?alt=media&token=1c5057f0-70c3-408c-a7aa-db4e9b470696"
                  width="100%"
                  height="100%"
                  controls
                  playing
                  onReady={() => console.log("Player pronto")}
                  onStart={() => console.log("Vídeo começou")}
                  onError={(e) => {
                    console.error("Erro no player:", e);
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
