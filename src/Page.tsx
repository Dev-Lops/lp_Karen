import { StudioBirthdayCountdown } from "@/components/BlackFridayCountdown"
import { Divider } from "@/components/Divider"
import { FooterComponent } from "@/components/FooterComponent"
import { getCampaignStatus } from "@/config/birthday-campaign"
import { About } from "./Sessions/About"
import { CTA } from "./Sessions/CTA"
import { FAQ } from "./Sessions/FAQ'S"
import { PresentationKit } from "./Sessions/PresentationKit"
import { Product } from "./Sessions/Products"
import { ProductList } from "./Sessions/ProductsList"
import { TestimonialSectionComponent } from "./Sessions/Testemonials"
import { Container } from "./styles/GlobalStyles"

export const LandingPage = () => {
  const campaignStatus = getCampaignStatus()

  return (
    <>
      {campaignStatus !== 'ended' && <StudioBirthdayCountdown />}

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
    </>
  )
}