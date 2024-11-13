import { useState, useEffect } from "react"
import Slider from "react-slick" // Importando o Slider do react-slick
import "slick-carousel/slick/slick.css" // Estilos do slick
import "slick-carousel/slick/slick-theme.css" // Estilos do tema do slick
import { TestimonialSection, SectionTitle, CarouselContainer } from "./styles"
import { Testimonial } from "../../components/TestimonialCarousel"

// Dados dos Testemunhos
const testimonialsData = [
  {
    image: "src/assets/testemonials/1.png",
    name: "Myrland",
    rating: 5,
  },
  {
    image: "src/assets/testemonials/2.png",
    name: "Maria Oliveira",
    text: "Muito bom, recomendo para todos! A qualidade é excelente.",
    rating: 5,
  },
  {
    image: "src/assets/testemonials/3.png",
    name: "Carlos Pereira",
    text: "Atendeu minhas expectativas, mas poderia melhorar a entrega.",
    rating: 5,
  },
  {
    image: "src/assets/testemonials/4.png",
    name: "Carlos Pereira",
    text: "Atendeu minhas expectativas, mas poderia melhorar a entrega.",
    rating: 5,
  },
]

export const TestimonialSectionComponent = () => {
  const [loading, setLoading] = useState(true) // Estado para verificar se os dados estão carregados

  // Configurações do slider
  const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Exibe 1 slide por vez
    slidesToScroll: 1, // Rola 1 slide por vez
    autoplay: false, // Desabilitado temporariamente
    arrows: true, // Exibe as setas por padrão

    // Responsividade para esconder as setas em telas pequenas
    responsive: [
      {
        breakpoint: 768, // Em telas menores que 768px
        settings: {
          arrows: false, // Remover as setas
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
      <SectionTitle>O que nossos clientes dizem</SectionTitle>
      <CarouselContainer>
        {loading ? (
          <p>Carregando...</p> // Exibe uma mensagem de carregamento
        ) : (
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <Testimonial
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </Slider>
        )}
      </CarouselContainer>
    </TestimonialSection>
  )
}
