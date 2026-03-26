"use client"

import { cn } from "@/lib/utils"

interface SlideContainerProps {
  children: React.ReactNode
  className?: string
}

export function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <div className={cn(
      "min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12",
      className
    )}>
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </div>
  )
}
