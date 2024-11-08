import { Header } from "./components/Header"
import { About } from "./Sessions/About"
import { Benefits } from "./Sessions/Benefits"
import { Product } from "./Sessions/Products"

export const LandingPage = () => {
  return (
    <>
      <Header />
      <About />
      <Benefits />
      <Product />
    </>
  )
}
