import { StyleSheetManager } from "styled-components"
import { LandingPage } from "./Page"
import isPropValid from "@emotion/is-prop-valid"

import "@fortawesome/fontawesome-free/css/all.min.css"

export function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <LandingPage />
    </StyleSheetManager>
  )
}
