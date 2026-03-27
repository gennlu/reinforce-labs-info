"use client"

import { SlideContainer } from "../slide-container"

export function ProblemSlide() {
  return (
    <SlideContainer>
      <div className="space-y-10">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            The Gap Between Speed and Confidence is Widening
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider">Manual Probing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Teams test what they <em>imagine</em> goes wrong — not what actually does. Real user behavior is always weirder. One-off sessions miss compounding multi-turn failures entirely.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider">The Rubric Trap</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automating eval means manually crafting rubrics — written by the same team, encoding the same blind spots. They measure the easy stuff, not what matters.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">Tool calls</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">Keywords</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">Judgment</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">Escalation</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider">Coverage Illusion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              500 test cases, 90% pass rate — but all clustered in the happy path zone. Test distribution never matches production traffic. Confidence without coverage.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">The Fragmented Stack in Practice</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-blue-500 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Unit tests</p>
                <p className="text-sm text-muted-foreground">Fast but shallow — only anticipated scenarios</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-red-500 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">LLM-as-judge</p>
                <p className="text-sm text-muted-foreground">Unaudited rubric, judge has its own biases</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-orange-500 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Quarterly eval sprints</p>
                <p className="text-sm text-muted-foreground">Slow, expensive, same team, same blind spots</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-green-500 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Production monitoring</p>
                <p className="text-sm text-muted-foreground">Catches failures after users experience them</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
