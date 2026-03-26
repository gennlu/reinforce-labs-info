"use client"

import { SlideContainer } from "../slide-container"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DemoSlide() {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Product Demo</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Flint Platform
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl">
          Walk through our evaluation platform to see how it works in practice.
        </p>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                <div className="h-3 w-3 rounded-full bg-chart-2/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">rl-flint.vercel.app</span>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
              <a 
                href="https://rl-flint.vercel.app/campaigns/campaign-1773188526730/simulation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Open <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
          
          <div className="aspect-[16/9] bg-muted/20">
            <iframe
              src="https://rl-flint.vercel.app/campaigns/campaign-1773188526730/simulation"
              className="w-full h-full border-0"
              title="Flint Platform Demo"
              loading="lazy"
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          Interactive demo - click around to explore the platform
        </p>
      </div>
    </SlideContainer>
  )
}
