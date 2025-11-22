import { BlackFridayBanner } from "@/components/BlackFridayBanner"
import { BlackFridayCountdown } from "@/components/BlackFridayCountdown"
import { Divider } from "@/components/Divider"
import { FooterComponent } from "@/components/FooterComponent"
import { isBlackFridayActive, shouldShowCountdown } from "@/config/blackfriday"
import { About } from "./Sessions/About"
import { CTA } from "./Sessions/CTA"
import { FAQ } from "./Sessions/FAQ'S"
import { PresentationKit } from "./Sessions/PresentationKit"
import { Product } from "./Sessions/Products"
import { ProductList } from "./Sessions/ProductsList"
import { TestimonialSectionComponent } from "./Sessions/Testemonials"
import { Container } from "./styles/GlobalStyles"

export const LandingPage = () => {
  const showCountdown = shouldShowCountdown()
  const isBFActive = isBlackFridayActive()

  return (
    <Container>
      {/* Banner de Black Friday ATIVA */}
      {isBFActive && <BlackFridayBanner />}

      {/* Countdown ANTES da Black Friday (não exibe quando BF está ativa) */}
      {showCountdown && !isBFActive && <BlackFridayCountdown />}

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
