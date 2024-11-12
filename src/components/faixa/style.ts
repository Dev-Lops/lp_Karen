import { motion } from "framer-motion"
import styled from "styled-components"

export const ParallaxContainer = styled.div`
  display: flex;
  overflow: hidden;
  letter-spacing: -1px;
  line-height: 0.8;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;

  color: #000;
  font-family: "Syncopate", serif;

  font-weight: 500;
  text-transform: uppercase;
`

export const Scroller = styled(motion.div)`
  text-transform: uppercase;
  font-size: 1.875rem;
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    display: block;
    gap: 20px;
    margin: 0 20px;
    width: 100%;
  }
`

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;

  display: flex;
`
