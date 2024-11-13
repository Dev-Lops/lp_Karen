import { Button } from "../../components/Button"
import { ContainerKit, ContentKit } from "./styles"

import Kit from "../../assets/kit.jpg"
import Stars from "../../assets/5stars.svg"

export function PresentationKit() {
  return (
    <ContainerKit
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      id='kit'
    >
      <img src={Kit} alt='Kit alisamneto natural' />
      <ContentKit>
        <h1>Kit alisamento</h1>
        <img src={Stars} alt='5 estrelas' />
        <p>
          O kit Equilíbrio THERAPY, foi desenvolvido com ativos naturais para
          devolver a saúde, força, brilho e resistência, tanto para o couro
          cabeludo, quanto para os fios.
        </p>
        <Button backgroundColor='#557655' href='#' className='jello-horizontal'>
          {" "}
          Compre agora
        </Button>
      </ContentKit>
    </ContainerKit>
  )
}
