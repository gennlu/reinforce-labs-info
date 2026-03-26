"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (index: number) => void
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-card/95 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
        <Image 
          src="/images/reinforce-logo.png" 
          alt="Reinforce Labs" 
          width={24} 
          height={24}
          className="object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="h-8 w-8 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentSlide === index 
                  ? "w-6 bg-primary" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="h-8 w-8 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        
        <div className="text-xs text-muted-foreground pl-2 border-l border-border">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  )
}
