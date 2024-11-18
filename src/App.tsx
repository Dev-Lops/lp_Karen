import { useEffect, useState } from "react"
import { LandingPage } from "./Page"
import { Loader } from "./components/Loader"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Analytics } from "@vercel/analytics/react"

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Analytics /> {isLoading ? <Loader /> : <LandingPage />}
    </>
  )
}
