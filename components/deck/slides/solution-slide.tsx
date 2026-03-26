"use client"

import { SlideContainer } from "../slide-container"
import { Bot, Target, Zap, Shield } from "lucide-react"

export function SolutionSlide() {
  return (
    <SlideContainer>
      <div className="space-y-12">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Solution</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Multi-Agent System for AI Evaluation
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          We&apos;ve built a multi-agent system to evaluate the alignment of AI systems to 
          expected outcomes and business requirements.
        </p>
        
        <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
          <div className="flex items-start gap-6">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Bot className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Automated Simulation</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Our agent simulates interactions with your AI systems to uncover failure modes 
                and vulnerabilities at scale. No more spending millions in resources and time manually testing the system.
              </p>
            </div>
          </div>
          
          <div className="h-px bg-border" />
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Alignment Testing</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Verify your AI meets business requirements
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Fast Iteration</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ship faster with confidence
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Risk Mitigation</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Business leaders sleep at night
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
