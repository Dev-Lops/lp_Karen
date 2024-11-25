import { useState, useEffect } from "react"
import Slider from "react-slick" // Importando o Slider do react-slick
import "slick-carousel/slick/slick.css" // Estilos do slick
import "slick-carousel/slick/slick-theme.css" // Estilos do tema do slick
import { TestimonialSection, SectionTitle, CarouselContainer } from "./styles"
import { Testimonial } from "../../components/TestimonialCarousel"
import { testimonialsData } from "./data"

export const TestimonialSectionComponent = () => {
  const [loading, setLoading] = useState(true) // Estado para verificar se os dados estão carregados

  // Configurações do slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <TestimonialSection>
      <SectionTitle data-aos='fade-up' data-aos-duration='3000'>
        O que nossos clientes dizem
      </SectionTitle>
      <CarouselContainer >
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <Testimonial key={index} image={testimonial.image} />
            ))}
          </Slider>
        )}
      </CarouselContainer>
    </TestimonialSection>
  )
}
