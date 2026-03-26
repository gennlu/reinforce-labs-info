"use client"

import { SlideContainer } from "../slide-container"
import { AlertTriangle, Clock, HelpCircle, TrendingUp } from "lucide-react"

export function ProblemSlide() {
  return (
    <SlideContainer>
      <div className="space-y-12">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            The Gap Between Speed and Confidence is Widening
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Organizations are under pressure to catch up in their AI adoption and are either stuck in pilot or firefighting during production.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Will this break in production?</h3>
            <p className="text-muted-foreground">
              Unpredictable failures and edge cases that only surface after deployment.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Will something harmful happen?</h3>
            <p className="text-muted-foreground">
              Safety risks and unintended behaviors that damage trust and user experience.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Will it damage my reputation?</h3>
            <p className="text-muted-foreground">
              Brand and business risks from AI systems that don&apos;t align with company values.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Where do I focus resources?</h3>
            <p className="text-muted-foreground">
              No systematic way to quantify and prioritize what needs attention first.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
