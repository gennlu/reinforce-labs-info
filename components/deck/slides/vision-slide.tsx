"use client"

import { SlideContainer } from "../slide-container"
import { ArrowRight, Users, Sparkles, Wrench, CheckCircle2 } from "lucide-react"

export function VisionSlide() {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Where the Data Business is Headed</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Data Vendors That Will Stand Out
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          The data vendors that will differentiate don't only provide human data, they 
          <span className="text-primary font-medium"> scale it with high-quality synthetic data</span> and 
          <span className="text-primary font-medium"> build intuitive tools</span> that streamline evaluation of agents.
        </p>
        
        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pillar 1: Human Data */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Human Data</h3>
                <p className="text-xs text-muted-foreground">Foundation layer</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Expert annotations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Domain-specific knowledge
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Golden reference data
              </li>
            </ul>
          </div>
          
          {/* Pillar 2: Synthetic Scale */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Synthetic Scale</h3>
                <p className="text-xs text-primary">High-quality amplification</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                10-100x data multiplication
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Maintains quality standards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Edge case generation
              </li>
            </ul>
          </div>
          
          {/* Pillar 3: Evaluation Tools */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Evaluation Tools</h3>
                <p className="text-xs text-primary">Streamlined workflows</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Intuitive agent evaluation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Real-time quality metrics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Automated failure detection
              </li>
            </ul>
          </div>
        </div>
        
        {/* Value Flow */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">Human Data</div>
            <ArrowRight className="h-4 w-4 text-primary shrink-0" />
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">Synthetic Scale</div>
            <ArrowRight className="h-4 w-4 text-primary shrink-0" />
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">Agent Evaluation</div>
            <ArrowRight className="h-4 w-4 text-primary shrink-0" />
            <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">Production-Ready Agents</div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Reinforce Labs provides the <span className="text-primary font-medium">synthetic scaling</span> and <span className="text-primary font-medium">evaluation tooling</span> to accelerate feedback loops
          </p>
        </div>
        
        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Simple Annotation Example */}
          <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Simple Annotation</h4>
              <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">Traditional</span>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xs text-muted-foreground text-center">Interior Image</span>
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-xs text-muted-foreground">Evaluate: Interior with nudist artwork</p>
                  <p className="text-xs font-medium text-foreground">Policy: Sexual Content</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-3 space-y-2">
                <p className="text-xs font-medium text-foreground">Rubric:</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span>Explicit nudity visible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span>Artistic context, partial nudity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>No policy violation</span>
                  </div>
                </div>
                <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">Verdict: Borderline - Artistic Context</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trajectory Evaluation Example */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Trajectory Evaluation</h4>
              <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">Agent-Native</span>
            </div>
            
            <div className="bg-background/50 rounded-xl p-4 space-y-3">
              <p className="text-xs text-muted-foreground">Task: Generate content and post to social media</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">1</div>
                  <p className="text-xs text-foreground">Research trending topics</p>
                  <CheckCircle2 className="h-3 w-3 text-green-500 ml-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">2</div>
                  <p className="text-xs text-foreground">Draft post with brand voice</p>
                  <CheckCircle2 className="h-3 w-3 text-green-500 ml-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">3</div>
                  <p className="text-xs text-foreground">Generate accompanying image</p>
                  <CheckCircle2 className="h-3 w-3 text-yellow-500 ml-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">4</div>
                  <p className="text-xs text-foreground">Schedule and publish</p>
                  <CheckCircle2 className="h-3 w-3 text-green-500 ml-auto" />
                </div>
              </div>
              
              <div className="border-t border-border pt-3">
                <p className="text-xs font-medium text-foreground mb-2">Step 3 Rubric:</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    <span>Brand guidelines followed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    <span>Image quality acceptable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-yellow-500" />
                    <span>Alt text missing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
