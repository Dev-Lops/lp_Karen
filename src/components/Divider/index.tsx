import styled from "styled-components"

const FallingLeavesDivider = styled.div<{ width?: number }>`
  position: relative;
  width: 100vw; /* Agora ocupa 100% da largura da tela */
  height: 200px;
  overflow: hidden;
  background-color: #fff;

  /* Estilo para as folhas */
  .leaf {
    position: absolute;
    top: -50px;
    width: 30px;
    height: 30px;
    background: url("/leaf-svgrepo-com (1).svg") no-repeat center center;
    background-size: contain;
    opacity: 0.8;
    animation: fall 8s linear infinite, vanish 10s linear infinite;
  }

  /* Animação de queda das folhas */
  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(50px) rotate(45deg);
    }
    50% {
      transform: translateY(100px) rotate(90deg);
    }
    75% {
      transform: translateY(150px) rotate(135deg);
    }
    100% {
      transform: translateY(200px) rotate(180deg);
    }
  }

  /* Animação para sumir lentamente após 10s de queda */
  @keyframes vanish {
    0% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    height: 150px;

    .leaf {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 768px) {
    height: 120px;

    .leaf {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    height: 100px;

    .leaf {
      width: 18px;
      height: 18px;
    }
  }
`

const generateLeafStyles = (index: number) => {
  // Gera um valor aleatório entre 0 e 100 para a posição horizontal da folha
  const leftPosition = `${Math.random() * 100}%`

  // Gera um delay de animação aleatório entre 0 e 10 segundos
  const animationDelay = `${Math.random() * 10}s`

  // Gera uma duração de animação aleatória entre 8s e 12s
  const animationDuration = `${8 + Math.random() * 4}s`

  return {
    left: leftPosition,
    animationDelay,
    animationDuration,
  }
}

export const Divider: React.FC<{ width?: number; numLeaves?: number }> = ({
  width = 100,
  numLeaves = 12,
}) => (
  <FallingLeavesDivider width={width}>
    {Array.from({ length: numLeaves }).map((_, index) => (
      <div key={index} className='leaf' style={generateLeafStyles(index)} />
    ))}
  </FallingLeavesDivider>
)
