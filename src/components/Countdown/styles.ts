import styled from "styled-components"

// Estilos para a contagem regressiva
export const CountdownSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: 3rem 1.875rem; /* Usando unidades relativas */
  width: 100vw;
  text-align: center;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CountdownTitle = styled.h2`
  font-size: clamp(1rem, 5vw, 2rem);
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Stardom", serif;
  letter-spacing: 3px;
  font-weight: bold;

  @media (min-width: 48rem) {
    font-size: 2rem;
  }

  @media (min-width: 64rem) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 64rem) {
    font-size: 1.75rem;
  }
`

export const Input = styled.input`
  width: 350px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`

export const Message = styled.p<{ success: boolean }>`
  margin-top: 1rem;
  background-color: ${(props) => (props.success ? "green" : "red")};
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
