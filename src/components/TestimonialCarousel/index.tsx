// Importando o Slider do react-slick
import { ClientImage, TestimonialCard } from "./styles"

interface TestimonialProps {
  image: string
}

export const Testimonial = ({ image }: TestimonialProps) => (
  <TestimonialCard data-aos='fade-up' data-aos-duration='3000'>
    <ClientImage
      src={image}
      alt=''
    />
  </TestimonialCard>
)
