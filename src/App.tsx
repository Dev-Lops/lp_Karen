import { useEffect, useState } from "react"
import { LandingPage } from "./Page"
import { Loader } from "./components/Loader"

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  return <>{isLoading ? <Loader /> : <LandingPage />}</>
}
