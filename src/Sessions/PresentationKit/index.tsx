import { Button } from "../../components/Button"
import LazyImage from "../../components/LazyImg"
import { ContainerKit, ContentKit } from "./styles"


const product = {
  title: "Kit Equilíbrio THERAPY",
  description: `
    O kit Equilíbrio THERAPY foi desenvolvido com ativos naturais para
    devolver a saúde, força, brilho e resistência, tanto para o couro
    cabeludo, quanto para os fios.
  `,
  imageUrl: "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/kitequ.jpeg?alt=media&token=ba255c01-abb0-41e7-b7f6-7bc14bda4393",
  purchaseLink:
    "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20kit%20Equilíbrio%20THERAPY",
}

export function PresentationKit() {
  const { title, description, imageUrl, purchaseLink } = product

  return (
    <section aria-labelledby='product-title'>
      <ContainerKit>
        {/* Imagem do produto */}
        <img
          data-aos='fade-right'
          data-aos-anchor-placement='center-bottom'
          src={imageUrl}
          alt={`Imagem do ${title}`}
        />

        {/* Conteúdo do produto */}
        <ContentKit>
          <h1
            id='product-title'
            data-aos='fade-left'
            data-aos-anchor-placement='center-bottom'
          >
            {title}
          </h1>

          {/* Avaliação */}
          <LazyImage
            src='https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/5stars.svg?alt=media&token=ae944a31-0a38-4ae7-8921-30d877c8d2d4'
            alt='Classificação de 5 estrelas'
            data-aos='fade-up'
            loading='lazy'
          />

          {/* Descrição */}
          <p data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
            {description}
          </p>

          {/* Botão de compra */}
          <Button
            backgroundColor='#557655'
            href={purchaseLink}
            target='_blank'
            aria-label={`Saiba mais sobre ${title}`}
          >
            Compre agora
          </Button>
        </ContentKit>
      </ContainerKit>
    </section>
  )
}
