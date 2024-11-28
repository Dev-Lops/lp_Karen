// Importando o Slider do react-slick
import "slick-carousel/slick/slick.css" // Estilos do slick
import "slick-carousel/slick/slick-theme.css" // Estilos do tema do slick
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
