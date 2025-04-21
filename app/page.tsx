'use client';
import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import LoadingAnimation from "./components/loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5500) // Adjust time as needed
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="bg-black p-2 w-full h-full">
          <Navbar />
          <Hero />
        </div>
      )}
    </>
  )
}
