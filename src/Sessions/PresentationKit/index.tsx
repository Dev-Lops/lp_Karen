import { Button } from "../../components/Button"
import { ContainerKit, ContentKit } from "./styles"

import Stars from "../../assets/5stars.svg"
import LazyImage from "../../components/LazyImg"

const product = {
  title: "Kit Equilíbrio THERAPY",
  description: `
    O kit Equilíbrio THERAPY foi desenvolvido com ativos naturais para
    devolver a saúde, força, brilho e resistência, tanto para o couro
    cabeludo, quanto para os fios.
  `,
  imageUrl: "https://dtsel6fm8qr8n.cloudfront.net/kit.avif",
  starsImage: Stars,
  purchaseLink:
    "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20kit%20Equilíbrio%20de%20THERAPY",
}

export function PresentationKit() {
  const { title, description, imageUrl, starsImage, purchaseLink } = product

  return (
    <>
      <ContainerKit>
        <img
          data-aos-anchor-placement='center-bottom'
          data-aos='fade-right'
          data-aos-offset='100'
          data-aos-easing='ease-in-sine'
          src={imageUrl}
          alt={title}
        />
        <ContentKit>
          <h1
            data-aos-anchor-placement='center-bottom'
            data-aos='fade-left'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            {title}
          </h1>
          <LazyImage
            data-aos-anchor-placement='center-bottom'
            data-aos='fade-up'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
            src={starsImage}
            alt='5 estrelas'
            loading='lazy'
          />
          <p
            data-aos-anchor-placement='center-bottom'
            data-aos='fade-up'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            {description}
          </p>
          <Button
            backgroundColor='#557655'
            href={purchaseLink}
            target='_blank'
            aria-label={`Saiba mais sobre ${title}`}
            className='jello-horizontal'
          >
            Compre agora
          </Button>
        </ContentKit>
      </ContainerKit>
    </>
  )
}
