import { SlideContainer } from "../slide-container"
import { Check } from "lucide-react"

export function PricingSlide() {
  return (
    <SlideContainer>
      <div className="space-y-8">
        {/* Services Pricing */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 60 Day Pilot */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">60 day pilot</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>6 red-teaming reports + data</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Dashboard access</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Walk-through of findings and next steps</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">$20,000</span>
              </div>
            </div>

            {/* Annual Coverage */}
            <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6 space-y-4 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded-full font-medium">Popular</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Annual coverage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Continuous lifecycle support, 3 reports/mo</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Eval datasets</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Custom APIs & deployments</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">$120,000</span>
                <span className="text-sm text-muted-foreground"> / yr</span>
              </div>
            </div>

            {/* Core Services */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">Core Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Benchmarks and datasets</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>RL environments</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Custom APIs & deployments</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">{'>'}$10,000</span>
                <span className="text-sm text-muted-foreground"> / mo</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground pt-2">
            Multi-modal and multi-lingual testing available as add-ons (priced separately)
          </p>
        </div>

        {/* Guardrail Pricing */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Guardrail pricing is based on volume
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-foreground">Starter</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>500K requests included</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>$4 per 1K overage</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">$2,000</span>
                <span className="text-sm text-muted-foreground"> / month</span>
              </div>
            </div>

            {/* Growth */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-foreground">Growth</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>5M requests included</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>$3 per 1K overage</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">$15,000</span>
                <span className="text-sm text-muted-foreground"> / month</span>
              </div>
            </div>

            {/* Scale */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-foreground">Scale</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>10M requests included</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>$2.5 per 1K overage</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">$25,000</span>
                <span className="text-sm text-muted-foreground"> / month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
