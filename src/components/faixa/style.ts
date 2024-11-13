import { motion } from "framer-motion"
import styled from "styled-components"

export const ParallaxContainer = styled.div`
  overflow: hidden;
  line-height: 0.8;
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: transparent;

  color: #fff;
  font-family: "Syncopate", serif;

  font-weight: 500;
  text-transform: uppercase;
`

export const Scroller = styled(motion.div)`
  text-transform: uppercase;
  font-size: 1.875rem;
  display: flex;
  justify-content: center;

  span {
    gap: 20px;

    padding: 30px;
    width: 600px;

    text-align: center;

    font-weight: bold;
    letter-spacing: 10px;
  }
`

export const SectionWrapper = styled.section`
  position: relative;
  max-width: 100%;

  display: flex;
`
