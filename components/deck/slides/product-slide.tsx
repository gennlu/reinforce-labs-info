"use client"

import { SlideContainer } from "../slide-container"
import { FileText, BarChart3, ListChecks, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductSlide() {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Product</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Systematic AI Evaluation
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          A systematic way to evaluate your AI system alignment to your requirements 
          and produces a report with actionable insights.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <ListChecks className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Define Requirements</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set up your policies, expected behaviors, and business requirements for evaluation.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Run Simulations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our multi-agent system simulates thousands of interactions to uncover edge cases.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Get Insights</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Receive comprehensive reports with prioritized findings and recommendations.
            </p>
          </div>
        </div>
        
        {/* Flint Platform Demo */}
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
