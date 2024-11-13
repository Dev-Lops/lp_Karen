import { ProductsGrid } from "../../components/ProductsList/index.tsx"
import { ContainerProduct } from "./styles.ts"

export function ProductList() {
  return (
    <ContainerProduct id='products'>
      <ProductsGrid />
    </ContainerProduct>
  )
}
