import { motion } from "framer-motion"
import styled from "styled-components"

// Container da seção de Parallax
export const ParallaxContainer = styled.div`
  overflow-x: hidden;
  line-height: 0.8;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: transparent;
  font-family: "Syncopate", serif;
  font-weight: 500;
  text-transform: uppercase;
  padding: 20px 0; // Garantir algum padding para a seção
`

// Estilos do Scroller (texto rolante)
export const Scroller = styled(motion.div)`
  text-transform: uppercase;
  font-size: clamp(1.5rem, 5vw, 3rem); // Font-size responsivo
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  flex-wrap: nowrap;

  span {
    gap: 30px;
    padding: 0 30px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 10px;
    white-space: nowrap; // Evitar quebra de linha
  }
`

// Wrapper da seção
export const SectionWrapper = styled.section`
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
