import { LoaderContainer, TrackingText, Spinner } from "./styles"

export function Loader() {
  return (
    <LoaderContainer aria-live="polite" role="alert">
      <Spinner />
      <TrackingText>STUDIO KAREN FRAZÃO</TrackingText>
    </LoaderContainer>
  )
}
