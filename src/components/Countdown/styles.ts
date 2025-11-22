import styled from 'styled-components'

// Estilos para a contagem regressiva
export const CountdownSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #fff;
  padding: 1.5rem 1rem;
  width: 100vw;
  text-align: center;
  box-sizing: border-box;
  border-top: 3px solid #d4af37;
  border-bottom: 3px solid #d4af37;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`

export const CountdownTitle = styled.h2`
  font-size: clamp(1rem, 3.5vw, 1.35rem);
  margin-bottom: 0.5rem;
  color: #d4af37;
  font-family: 'Stardom', serif;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);

  @media (min-width: 48rem) {
    font-size: 1.35rem;
  }

  @media (min-width: 64rem) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0.65rem;
  color: #f0f0f0;

  @media (min-width: 48rem) {
    font-size: 0.95rem;
  }

  @media (min-width: 64rem) {
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  max-width: 280px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border: 2px solid #d4af37;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 0.8rem;
  }
`

export const Message = styled.p<{ success: boolean }>`
  margin-top: 1rem;
  background-color: ${(props) => (props.success ? 'green' : 'red')};
  color: white;
  padding: 10px;
  border-radius: 5px;
`

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`

export const TooltipText = styled.div`
  visibility: hidden;
  opacity: 0;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  transition: opacity 0.3s;
`
