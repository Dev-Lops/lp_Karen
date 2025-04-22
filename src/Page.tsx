import { About } from "./Sessions/About"
// import { CountdownBlack } from "./Sessions/CountdownBlack"
import { Divider } from "@/components/Divider"
import { FooterComponent } from "@/components/FooterComponent"
import { CTA } from "./Sessions/CTA"
import { FAQ } from "./Sessions/FAQ'S"
import { PresentationKit } from "./Sessions/PresentationKit"
import { Product } from "./Sessions/Products"
import { ProductList } from "./Sessions/ProductsList"
import { TestimonialSectionComponent } from "./Sessions/Testemonials"
import { Container } from "./styles/GlobalStyles"

export const LandingPage = () => {
  return (
    <Container>
      <About />
      <CTA />
      <Divider />
      <ProductList />
      <Product />
      <Divider />
      <PresentationKit />
      <TestimonialSectionComponent />
      <FAQ />
      <FooterComponent />
    </Container>
  )
}
