"use client"

import { SlideContainer } from "../slide-container"
import { Clock, ArrowRight } from "lucide-react"

export function SpeedSlide() {
  return (
    <SlideContainer>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Study</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Mercor
            </h2>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">Customer</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-muted-foreground">
            Finding failure modes and vulnerabilities at speed to accelerate deals.
          </p>
          <span className="text-muted-foreground">|</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground/50 line-through">30-90 days</span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold">2 days max</span>
            </div>
            <span className="text-muted-foreground">(15-45x faster)</span>
          </div>
        </div>
        
        <div className="bg-[#0a0c10] border border-border rounded-2xl overflow-hidden">
          <iframe 
            src="/simulation-viewer.html" 
            className="w-full h-[500px] border-0"
            title="Jailbreak Simulation Viewer"
          />
        </div>
      </div>
    </SlideContainer>
  )
}
