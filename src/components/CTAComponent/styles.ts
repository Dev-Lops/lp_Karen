import styled from "styled-components"

// Container principal da seção de CTA
export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.colors.green};
`

// Conteúdo principal
export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

// Título principal
export const CTATitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.green};
  font-family: "Stardom", serif;
  letter-spacing: 3px;
  font-weight: bold;
`

// Contêiner da imagem
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    /* object-fit: cover; */
    border-radius: 10px;
  }
`

// Descrição
export const CTADescription = styled.div`
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  line-height: 1.6;
  margin: 20px;
  max-width: 900px;

  ul {
    margin: 15px 0;
    padding-left: 20px;
    list-style-type: square;
    text-align: left;

    li {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  p {
    margin: 10px 0;
  }
`

// Contêiner dos botões
export const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  font-weight: bold;
`
