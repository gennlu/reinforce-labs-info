"use client"

import Image from "next/image"
import { SlideContainer } from "../slide-container"
import { Shield, Zap, Database, BarChart3, Bot, MessageSquare, ArrowRight, Code, AlertTriangle, FileText } from "lucide-react"

export function TractionSimpleSlide() {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Traction</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Working with Leading AI Companies
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          We&apos;re currently working with customers to evaluate world models and applications they&apos;ve built.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Centific - Expanded Partnership */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 space-y-5 min-h-[400px] flex flex-col">
            <div className="space-y-2">
              <div className="h-14 flex items-center bg-white rounded-lg px-3 w-fit">
                <Image 
                  src="/images/centific-logo.png" 
                  alt="Centific" 
                  width={130}
                  height={36}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Co-selling Partner
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground">Testing retail shopping assistance for policy alignment, brand voice, and over-refusal detection.</p>
            
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Red Teaming</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Guardrails</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">SFT & Eval Datasets</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Benchmarks</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3 col-span-2">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">RL Environment</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">Chatbots</span>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">Multi-agent</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 space-y-5 min-h-[400px] flex flex-col">
            <div className="space-y-2">
              <div className="h-14 flex items-center bg-white rounded-lg px-3 w-fit">
                <Image 
                  src="/images/mercor-logo.png" 
                  alt="Mercor" 
                  width={130}
                  height={36}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Customer
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground">Finding failure modes and vulnerabilities at speed to accelerate deals.</p>
            
            {/* Time to Vulnerability Detection */}
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-2">Time to Vulnerability Detection</p>
              <div className="flex items-center gap-2">
                <div className="text-center">
                  <p className="text-[10px] text-muted-foreground">Manual</p>
                  <p className="text-lg font-bold text-foreground">3 Mos</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary" />
                <div className="text-center">
                  <p className="text-[10px] text-primary">Automated</p>
                  <p className="text-lg font-bold text-primary">48 Hrs</p>
                </div>
              </div>
            </div>
            
            {/* Policy Coverage */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="bg-muted/50 rounded-lg p-2">
                <div className="flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">CBRN Threats</span>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-2">
                <div className="flex items-center gap-1">
                  <Code className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">Malicious Code</span>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-2">
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">Safety & Ethics</span>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-2">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">Instruction Following</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 space-y-5 min-h-[400px] flex flex-col">
            <div className="space-y-2">
              <div className="h-14 flex items-center bg-white rounded-lg px-3 w-fit">
                <Image 
                  src="/images/turing-logo.png" 
                  alt="Turing" 
                  width={110}
                  height={32}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Partner
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground">Rapid agent evaluation through simulated interactions and scaling SFT data.</p>
            
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="bg-muted/50 rounded-lg p-3 space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Red Teaming</span>
                </div>
                <p className="text-[10px] text-muted-foreground">Frontier & 2nd tier models</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3 space-y-1">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Chatbot Deploy</span>
                </div>
                <p className="text-[10px] text-muted-foreground">Pre-launch testing</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">SFT & Eval Datasets</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Benchmarks</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3 col-span-2">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">RL Environment</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">Chatbots</span>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">Multi-agent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
