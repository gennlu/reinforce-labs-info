"use client"

import { useState, useEffect, useCallback } from "react"
import { SlideNavigation } from "./slide-navigation"
import { TitleSlide } from "./slides/title-slide"
import { ProblemSlide } from "./slides/problem-slide"
import { SolutionSlide } from "./slides/solution-slide"
import { TractionSimpleSlide } from "./slides/traction-simple-slide"
import { CentificSlide } from "./slides/centific-slide"
import { SpeedSlide } from "./slides/speed-slide"
import { InstructionFollowingSlide } from "./slides/instruction-following-slide"
import { SftDataSlide } from "./slides/sft-data-slide"
import { ProductSlide } from "./slides/product-slide"
import { ArchitectureSlide } from "./slides/architecture-slide"
import { VisionSlide } from "./slides/vision-slide"
import { PricingSlide } from "./slides/pricing-slide"
import { ClosingSlide } from "./slides/closing-slide"

const slides = [
  { id: "title", component: TitleSlide },
  { id: "problem", component: ProblemSlide },
  { id: "solution", component: SolutionSlide },
  { id: "traction-simple", component: TractionSimpleSlide },
  { id: "centific", component: CentificSlide },
  { id: "speed", component: SpeedSlide },
  { id: "instruction-following", component: InstructionFollowingSlide },
  { id: "sft-data", component: SftDataSlide },
  { id: "product", component: ProductSlide },
  { id: "architecture", component: ArchitectureSlide },
  { id: "vision", component: VisionSlide },
  { id: "pricing", component: PricingSlide },
  { id: "closing", component: ClosingSlide },
]

export function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }, [])

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const goToNext = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        goToNext()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious, goToSlide])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div 
        className="transition-opacity duration-300 ease-in-out"
        key={currentSlide}
      >
        <CurrentSlideComponent />
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
      
      {/* Keyboard hints */}
      <div className="fixed bottom-6 right-6 text-xs text-muted-foreground hidden md:block">
        <span className="opacity-50">Use arrow keys or space to navigate</span>
      </div>
    </div>
  )
}
