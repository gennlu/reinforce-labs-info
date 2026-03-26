"use client"

import Image from "next/image"
import { SlideContainer } from "../slide-container"

export function TractionSlide() {
  return (
    <SlideContainer>
      <div className="space-y-12">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Traction</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Working with Leading AI Companies
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          We&apos;re currently working with customers to evaluate world models and applications they&apos;ve built.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="h-16 flex items-center bg-white rounded-lg px-2">
              <Image 
                src="/images/centific-logo.png" 
                alt="Centific" 
                width={140}
                height={40}
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Customer + Channel Partner
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Testing retail shopping assistance for policy alignment, brand voice, and over-refusal detection.
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="h-16 flex items-center bg-white rounded-lg px-2">
              <Image 
                src="/images/mercor-logo.png" 
                alt="Mercor" 
                width={140}
                height={40}
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Customer
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Finding failure modes and vulnerabilities at speed to accelerate deals.
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="h-16 flex items-center bg-white rounded-lg px-2">
              <Image 
                src="/images/turing-logo.png" 
                alt="Turing" 
                width={120}
                height={32}
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Customer
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rapid agent evaluation through simulated interactions and scaling SFT data.
              </p>
            </div>
          </div>
        </div>

        {/* Active Conversations Section */}
        <div className="space-y-6 pt-8 border-t border-border">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Active Conversations</span>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Frontier Labs */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Frontier Labs</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V43vuJhDXFpyB6fyAXcqJjqCRYGave.png" alt="Anthropic" className="h-9 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2vKWKFRqFx5FmAb6yxwGLjgpI4uPlk.png" alt="Meta" className="h-7 object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
            
            {/* App Builders & Enterprises */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">App Builders & Enterprises</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qzhkxagjgrx8jHnXVpkcVq4rZA5LLH.png" alt="Home Depot" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://companieslogo.com/img/orig/AMZN-e9f942e4.png" alt="Amazon" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SqSYxfd4QN1KMAJIJNkFjrVK3UpEi9.png" alt="Uber" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel" className="h-7 object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GdPGhxqBODzFx9fpK6pF6hviBoyax9.png" alt="Eightfold AI" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nEiBGfaZlxlcaPORlQYtcuH7yIWwu.png" alt="Grab" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YqyDcPgAd5L6m570onCWPYyWLhgqFa.png" alt="Glean" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="h-7 object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
            
            {/* Data Providers */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data Providers</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  <span className="text-xs font-medium text-foreground">Micro1</span>
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z8xSdp7xoozPH4L8iUmXSKTKPPUWC3.png" alt="Snorkel AI" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lpXO7zSCMABv5RhoKQrKWfruQbrYBD.png" alt="Appen" className="h-7 object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
            
            {/* Partnerships */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Partnerships</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQNQbGTdcvlBhaJyEfpKqjcxQubZ0f.png" alt="Dell" className="h-7 object-contain mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center h-12 bg-white rounded-lg px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WYrnIYTGjAhzIwW0pCjO6lVOdvvXc2.png" alt="Box" className="h-7 object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
