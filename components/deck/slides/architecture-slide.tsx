"use client"

import { SlideContainer } from "../slide-container"
import { ArrowRight, ArrowDown, User, FileText, Target, Bot, Scale, Shield, Database, Cpu } from "lucide-react"

export function ArchitectureSlide() {
  return (
    <SlideContainer>
      <div className="space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            A system grounded in real world scenarios
          </h2>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-3">
          {/* Row 1: Input Sources */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Business Requirements */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-500" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Business Requirements</h4>
              </div>
              <p className="text-xs text-muted-foreground">Optional context on business use cases and intended AI behavior</p>
            </div>

            {/* Policy Library */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-purple-500" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Policy Library</h4>
              </div>
              <p className="text-xs text-muted-foreground">Robust library of safety policies and compliance rules</p>
              <div className="flex items-center gap-1 pt-1">
                <span className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium flex items-center gap-1">
                  <User className="h-3 w-3" /> Authoring Policies
                </span>
              </div>
            </div>

            {/* Strategy & Use Case Library */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Target className="h-4 w-4 text-green-500" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Strategy & Use Case Library</h4>
              </div>
              <p className="text-xs text-muted-foreground">Attack strategies and real-world use case scenarios</p>
              <div className="flex items-center gap-1 pt-1">
                <span className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium flex items-center gap-1">
                  <User className="h-3 w-3" /> Human Review
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>

          {/* Row 2: Flint System */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Simulation Engine</h3>
                <p className="text-xs text-muted-foreground">End-to-end evaluation pipeline</p>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-3 items-center">
              {/* Simulation Agents */}
              <div className="bg-background/80 border border-border rounded-xl p-3 space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Flint</h4>
                <p className="text-xs text-muted-foreground">Simulation Agents</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">Red Team</span>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">User Sim</span>
                </div>
              </div>

              {/* Arrow with Human Intervention */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium flex items-center gap-1">
                  <User className="h-3 w-3" /> Human Intervention
                </span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>

              {/* Target Model */}
              <div className="bg-background/80 border border-border rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-orange-500" />
                  <h4 className="font-semibold text-foreground text-sm">Target Model</h4>
                </div>
                <p className="text-xs text-muted-foreground">Agent under evaluation</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>

              {/* Judge */}
              <div className="bg-background/80 border border-border rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground text-sm">Stone</h4>
                </div>
                <p className="text-xs text-muted-foreground">Judge</p>
                <span className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium flex items-center gap-1 w-fit">
                  <User className="h-3 w-3" /> Review with rubrics
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>

          {/* Row 3: Output - Stone, Report & Data */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Stone */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Real-time Defenses</h3>
                  <p className="text-xs text-muted-foreground">Custom Guardrails</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-600 font-medium mt-3 inline-block">Production-Ready</span>
            </div>

            {/* Model Alignment Report */}
            <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border-2 border-purple-500/30 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Model Alignment Report</h3>
                  <p className="text-xs text-muted-foreground">Safety & compliance assessment</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-600 font-medium mt-3 inline-block">Stakeholder Ready</span>
            </div>

            {/* Data */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Data</h3>
                  <p className="text-xs text-muted-foreground">Simulated conversations & trajectories as seed for eval/SFT data</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 font-medium">SFT Datasets</span>
                <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 font-medium">Eval Sets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Human-in-the-Loop Legend */}
        <div className="flex items-center justify-center gap-6 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-3 w-3 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Human-in-the-Loop touchpoints throughout the pipeline</span>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
