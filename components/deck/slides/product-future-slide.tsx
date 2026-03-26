"use client"

import { SlideContainer } from "../slide-container"
import { ExternalLink, Bot, Eye, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductFutureSlide() {
  const demoUrl = "https://preview--rl-v2-demo.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMGx1ZzFIS3VGaWFIWG1UVmRVTkQ3NURlVVhQMiIsInByb2plY3RfaWQiOiJhYjUwZWIwYi0wOTc2LTRmYTktYWI1ZS0wMzZlODU1NjNhZTUiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImFiNTBlYjBiLTA5NzYtNGZhOS1hYjVlLTAzNmU4NTU2M2FlNSIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzQ4MjIwMTEsIm5iZiI6MTc3NDIxNzIxMSwiaWF0IjoxNzc0MjE3MjExfQ.hNszXcmgHfNuoqYazsAhrpBxXfnR7dUBg0liD_hp_nMdr5lB5mF3bFmtFUK68poVPBiJWCrLor02_FAOuJlS7EP5sAR1Bpxi4mnVXg6BZJJWkR11Ox0Xgz4XyPVQYtap2F8nOFIUu_MhZZFrKpOndvcx_ZAo9l0CrMZ8NTG0o93we5ESNHxwWk_D2wk83JAW3vs_wry_nPHCDaoilwx149fudtjw_tmLXvtVWE8lmiRFfeYEx53oTBBLvTNIAuk78SnAFsiNGWv9VHm2krXLYHLX9j-o-76Wvvk9SWVAU3aihBbmFbYwjCgW70hXmHVum5GPjV68HVcwLJ3af52ro-3CDbRRS_MEchI84qJFd_tKYS0AcO3nx5PxXqBGETXeyHVJdmvgeaDY_ec0Cxd4yuKoh9BFIS7jPcvMd4UwQ0qubAVEPpfjcm-lF2KOkSHtIOVksw0w7ajRQGUFaO1NqfD-NhSdGFUOhmOiGQJJqQP1eiQMVTsXqM9d6sJ_pBxJnqKBtcWXf4cnTPnQrKNQXPhseUci-MIlbk2sACMo1uaDmD2zTLd2fCNNMHHMYKRml6JxXvzeOvxKHMfqsGO-4wHUWWAgzc62Rv_BvZJQ6ZX4nCFSEY6qjNwyqC_88Az-3k006mS4crCQbfHMaZkG49oYifJBQbAPS9h562SjusA"

  return (
    <SlideContainer>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Evaluation Platform</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Intuitive Evaluation Agent
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <p className="text-muted-foreground max-w-2xl">
            An intuitive evaluation agent for all your needs in quickly evaluating agent alignment to business requirements.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Agent Evaluation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Trajectory Viewer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Human Feedback</span>
            </div>
          </div>
        </div>
        
        {/* Demo Embed */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                <div className="h-3 w-3 rounded-full bg-chart-2/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">Reinforce Labs v2 Preview</span>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
              <a 
                href={demoUrl}
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
              src={demoUrl}
              className="w-full h-full border-0"
              title="Reinforce Labs v2 Demo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
