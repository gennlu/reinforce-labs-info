"use client"

import Image from "next/image"

export function TitleSlide() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f6fc] via-[#f5f3fa] to-[#f0edf8]">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layer 1 */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[60%] animate-[wave-slow_25s_linear_infinite]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(127, 86, 217, 0.08)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        
        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[50%] animate-[wave-reverse_20s_linear_infinite]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(219, 180, 242, 0.12)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        
        {/* Wave Layer 3 */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[40%] animate-[wave-slow_15s_linear_infinite]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(244, 200, 220, 0.15)"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        
        {/* Wave Layer 4 - Topmost */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[35%] animate-[wave-reverse_30s_linear_infinite]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 230, 240, 0.2)"
            d="M0,224L48,234.7C96,245,192,267,288,261.3C384,256,480,224,576,213.3C672,203,768,213,864,234.7C960,256,1056,288,1152,277.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-8 md:gap-12">
        <Image
          src="/images/reinforce-logo.png"
          alt="Reinforce Labs"
          width={180}
          height={180}
          className="object-contain"
        />
        
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Reinforce Labs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Building the Future with Responsible AI
          </p>
        </div>
      </div>
    </div>
  )
}
