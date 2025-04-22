// styles.ts
import styled from 'styled-components'

// Container principal da seção de CTA
export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.green};
  background: ${({ theme }) => theme.colors.white};
`

// Conteúdo principal com limite de largura para centralização
export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

// Título principal
export const CTATitle = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Stardom', serif;
  letter-spacing: 3px;
  font-weight: bold;
  text-align: center;
`

// Contêiner da imagem
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1.5rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`

// Descrição
export const CTADescription = styled.div`
  /* Reduzimos o valor máximo de 1.5rem para 1.3rem, por exemplo */
  font-size: clamp(1rem, 4vw, 1.3rem);
  line-height: 1.6;
  margin: 1.5rem;
  max-width: 900px;
  text-align: justify;

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    list-style-type: square;
    text-align: left;

    li {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin: 1rem 0;
  }

  /* Ajustes extras para telas menores que 480px (ou 425px) */
  @media (max-width: 480px) {
    font-size: 0.9rem; /* Reduz a fonte */
    margin: 1rem; /* Menor margem */
    line-height: 1.4; /* Diminui um pouco o espaçamento de linha */

    ul {
      padding-left: 1rem;
    }
  }
`

// Contêiner dos botões
// export const CTAButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   width: 100%;
//   margin-top: 1.5rem;
//   font-weight: bold;
// `
