"use client"

export function WavePattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.06] overflow-hidden">
      <svg
        width="200%"
        height="100%"
        className="absolute -left-1/2 top-0 animate-wave-slow"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Multiple wave layers for depth */}
        <path
          d="M0,400 C300,300 600,500 900,400 C1200,300 1500,500 1800,400 L1800,800 L0,800 Z"
          fill="url(#wave-gradient)"
          className="animate-wave-1"
        />
        <path
          d="M0,450 C300,350 600,550 900,450 C1200,350 1500,550 1800,450 L1800,800 L0,800 Z"
          fill="url(#wave-gradient)"
          className="animate-wave-2"
          opacity="0.7"
        />
        <path
          d="M0,500 C300,400 600,600 900,500 C1200,400 1500,600 1800,500 L1800,800 L0,800 Z"
          fill="url(#wave-gradient)"
          className="animate-wave-3"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
