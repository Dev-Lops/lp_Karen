import { BenefitsContainer, CardBeneficit } from "./styles"

export function Benefits() {
  return (
    <BenefitsContainer>
      <h1>Por que a sua solução é melhor do que a atual</h1>
      <div className='cardContainers'>
        <CardBeneficit>
          <img
            src='src\assets\box.svg'
            alt='caixa
          '
          />
          <h2>Beneficio 1</h2>
          <p>
            Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.
          </p>
        </CardBeneficit>
        <CardBeneficit>
          <img
            src='src\assets\box.svg'
            alt='caixa
          '
          />
          <h2>Beneficio 1</h2>
          <p>
            Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.
          </p>
        </CardBeneficit>
        <CardBeneficit>
          <img
            src='src\assets\box.svg'
            alt='caixa
          '
          />
          <h2>Beneficio 1</h2>
          <p>
            Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.
          </p>
        </CardBeneficit>
      </div>
    </BenefitsContainer>
  )
}
