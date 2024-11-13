import { Button } from "../../components/Button"
import { ContainerKit, ContentKit } from "./styles"

import Kit from "../../assets/kit.jpg"
import Stars from "../../assets/5stars.svg"

export function PresentationKit() {
  return (
    <ContainerKit data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
      <img src={Kit} alt='Kit alisamneto natural' />
      <ContentKit>
        <h1>Kit alisamento</h1>
        <img src={Stars} alt='5 estrelas' />
        <p>
          Lorem ipsum dolor sit amet consectetur. Vestibulum sem facilisis amet
          aliquet. Massa nunc viverra placerat ante cum tempus. Quis lorem
          condimentum quis ipsum at viverra. Faucibus elit consectetur vehicula
          amet
        </p>
        <Button backgroundColor='#557655' href='#'>
          {" "}
          Compre agora
        </Button>
      </ContentKit>
    </ContainerKit>
  )
}
