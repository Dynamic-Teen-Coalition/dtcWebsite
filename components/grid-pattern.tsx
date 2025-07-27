"use client"

export function GridPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.05]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse" className="animate-pulse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
            />
            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-blue-600 dark:text-blue-300" />
          </pattern>
          <pattern id="dots-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle
              cx="20"
              cy="20"
              r="1"
              fill="currentColor"
              className="text-blue-400 dark:text-blue-500"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
    </div>
  )
}
