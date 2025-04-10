import { About } from "./Sessions/About"
import { Benefits } from "./Sessions/Benefits"
// import { CountdownBlack } from "./Sessions/CountdownBlack"
import { Divider } from "@/components/Divider"
import { FooterComponent } from "@/components/FooterComponent"
import { CTA } from "./Sessions/CTA"
import { FAQ } from "./Sessions/FAQ'S"
import { Presentation } from "./Sessions/Presentation"
import { PresentationKit } from "./Sessions/PresentationKit"
import { Product } from "./Sessions/Products"
import { ProductList } from "./Sessions/ProductsList"
import { TestimonialSectionComponent } from "./Sessions/Testemonials"
import { Container } from "./styles/GlobalStyles"

export const LandingPage = () => {
  return (
    <Container>
      <About />
      {/* <BirthdayPromo /> */}
      <CTA />
      <Benefits />
      <Presentation />
      <PresentationKit />
      <Product />
      <Divider />

      <ProductList />
      <TestimonialSectionComponent />
      {/* <CountdownBlack /> */}
      <FAQ />
      <FooterComponent />
    </Container>
  )
}
