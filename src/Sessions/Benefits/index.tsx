import { Counter } from "../../components/Counter"
import { BenefitsContainer } from "./styles"

export function Benefits() {
  return (
    <BenefitsContainer data-aos='fade-up' data-aos-duration='3000'>
      <div className='cardContainers'>
        <Counter from={0} to={1000} duration={4} />
        <Counter from={0} to={300} duration={3} />
        <Counter from={0} to={100} duration={5} />
      </div>
    </BenefitsContainer>
  )
}
