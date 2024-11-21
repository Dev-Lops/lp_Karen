// import { Carousel } from "../../components/Carousel/index"
import type { EmblaOptionsType } from "embla-carousel"
import EmblaCarousel from "../../components/Carousel2"
import { ContainerProduct } from "./styles"
import { products } from '../../components/Carousel2/data'

const OPTIONS: EmblaOptionsType = { loop: true, duration: 5 }


export function Product() {
  return (
    <ContainerProduct id='products'>
      <EmblaCarousel slides={products} options={OPTIONS} />
    </ContainerProduct>
  )
}
