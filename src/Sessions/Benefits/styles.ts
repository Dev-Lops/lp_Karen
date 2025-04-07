import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyles'

// Container dos benefícios em layout grid responsivo
export const BenefitsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.green};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

// Card de benefício com background, sombra e hover suave
export const BenefitCard = styled.article`
  /* background: ${({ theme }) => theme.colors.gold || '#FFD9B7'}; */
  color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    margin: 0;
  }
`

// Container para o contador com tipografia responsiva usando clamp
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'LeagueGothic', sans-serif;
  font-size: clamp(1rem, 2vw, 2rem);

  span {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }
`

// Título do card com espaçamento e tamanho ajustável
export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  letter-spacing: 2px;
  font-size: clamp(1.25rem, 2vw, 2rem);
  margin: 0;
  padding-top: 8px;
`
