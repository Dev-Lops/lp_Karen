import { Carousel } from "../../components/Carousel/index.tsx"
import { ContainerProduct } from "./styles.ts"

export function Product() {
  return (
    <ContainerProduct id='products'>
      <Carousel />
    </ContainerProduct>
  )
}
