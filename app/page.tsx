'use client';
import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import LoadingAnimation from "./components/loading"
import { smoothScrollTo } from "./components/smoothScroll"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5500) // Adjust time as needed
  }, [])

  // Arriving from another page via /#contact or /#projects: scroll once the content exists
  useEffect(() => {
    if (isLoading || !window.location.hash) return
    const target = document.getElementById(window.location.hash.slice(1))
    if (target) {
      requestAnimationFrame(() => smoothScrollTo(target))
    }
  }, [isLoading])

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
