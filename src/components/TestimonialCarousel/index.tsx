// Importando o Slider do react-slick
import "slick-carousel/slick/slick.css" // Estilos do slick
import "slick-carousel/slick/slick-theme.css" // Estilos do tema do slick
import {
  ClientImage,
  ClientName,
  Rating,
  Star,
  TestimonialCard,
  TestimonialText,
} from "./styles"


export const Testimonial = ({ image, name, text, rating }: any) => (
  <TestimonialCard>
    <ClientImage src={image} alt={name} />
    <ClientName>{name}</ClientName>
    <TestimonialText>{text}</TestimonialText>
    <Rating>
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill={index < rating ? "#ffcc00" : "#e0e0e0"} />
      ))}
    </Rating>
  </TestimonialCard>
)
