"use client"

import { SlideContainer } from "../slide-container"

export function SftDataSlide() {
  return (
    <SlideContainer>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Study</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              SFT Data
            </h2>
          </div>

        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-muted-foreground">
            Building SFT data at scale.
          </p>
          <span className="text-muted-foreground">|</span>
          <span className="font-medium text-foreground">Use case: Financial advice</span>
        </div>

        <div className="bg-[#f5f4f0] border border-border rounded-2xl overflow-hidden">
          <iframe
            src="/sft-report-financial.html"
            className="w-full h-[500px] border-0"
            title="SFT Report - Regulated Financial Advice"
          />
        </div>
      </div>
    </SlideContainer>
  )
}
