"use client"

import { SlideContainer } from "../slide-container"
import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClosingSlide() {
  return (
    <SlideContainer className="bg-background">
      <div className="flex flex-col items-center text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance max-w-3xl">
          All-in-one AI evaluation platform
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          Evaluate alignment, uncover vulnerabilities, and prioritize what matters — 
          all before your users find the problems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="https://calendly.com/jonathanvillarin-reinforcelabs/30min-1" target="_blank" rel="noopener noreferrer">
              Schedule a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://reinforcelabs.ai" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        </div>
        
        <div className="pt-12 text-sm text-muted-foreground">
          <p>contact@reinforcelabs.ai</p>
        </div>
      </div>
    </SlideContainer>
  )
}
