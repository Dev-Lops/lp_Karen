import { SpinnerDotted } from "spinners-react"
import { LoaderContainer } from "./styles"

export function Loader() {
  return (
    <LoaderContainer>
      <SpinnerDotted
        size={90}
        thickness={60}
        speed={150}
        color='rgba(224, 176, 120, 1)'
      />
      <div className='cssanimation leBlurIn sequence'>STUDIO KAREN FRAZÃO</div>
    </LoaderContainer>
  )
}
