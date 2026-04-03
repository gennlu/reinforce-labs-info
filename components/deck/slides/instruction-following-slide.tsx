"use client"

import { SlideContainer } from "../slide-container"

export function InstructionFollowingSlide() {
  return (
    <SlideContainer>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Study</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Instruction Following Examples
            </h2>
          </div>

        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-muted-foreground">
            Evaluating model behavior and alignment to business requirements.
          </p>
          <span className="text-muted-foreground">|</span>
          <span className="font-medium text-foreground">Use case: Frontier model</span>
        </div>

        <div className="bg-[#f5f4f0] border border-border rounded-2xl overflow-hidden">
          <iframe
            src="/instruction-following-viewer.html"
            className="w-full h-[500px] border-0"
            title="Instruction Following Violation Viewer"
          />
        </div>
      </div>
    </SlideContainer>
  )
}
