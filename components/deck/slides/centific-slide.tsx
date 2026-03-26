"use client"

import { SlideContainer } from "../slide-container"
import { Handshake, CheckCircle2 } from "lucide-react"

export function CentificSlide() {
  return (
    <SlideContainer>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Study</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Centific Partnership
            </h2>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Handshake className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">Customer + Channel Partner</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-muted-foreground">
            Centific provides HITL expertise. We automate and scale quality spot checks.
          </p>
          <span className="text-muted-foreground">|</span>
          <span className="font-medium text-foreground">Use Case: Travel Agent</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Policy Alignment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Brand Voice</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Over-Refusal</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f5f4f0] border border-border rounded-2xl overflow-hidden">
          <iframe 
            src="/conversation-viewer.html" 
            className="w-full h-[500px] border-0"
            title="Refusal Campaign Conversation Viewer"
          />
        </div>
      </div>
    </SlideContainer>
  )
}
