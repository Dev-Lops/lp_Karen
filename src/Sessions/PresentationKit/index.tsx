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
  imageUrl: "https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/kitequ.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2tpdGVxdS5qcGVnIiwiaWF0IjoxNzQ0Njc2OTI5LCJleHAiOjQ4NjY3NDA5Mjl9.Lcrz1gsjbkD_ebbZD11d78kzS_HUVhnXvjNlBN8t3Jc",
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
            src='https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/5stars.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzLzVzdGFycy5zdmciLCJpYXQiOjE3NDQ2NzY4NTQsImV4cCI6NDg2Njc0MDg1NH0.ruQo1sfyVP8Fr9wjWChjF79IYDvMnmuepYHYSBJAwHs'
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
