"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function YearlyWrapToast() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check session storage on mount
    const hasSeenWrapUpdate = sessionStorage.getItem('hasSeenWrapUpdate_2025')
    if (!hasSeenWrapUpdate) {
      // Small delay for animation effect
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('hasSeenWrapUpdate_2025', 'true')
  }

  const handleViewReport = () => {
    handleDismiss()
    router.push("/reports")
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="relative rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl border-2 border-blue-500 dark:border-blue-600">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl">🎉</span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">2025 Yearly Wrap is here!</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Check out our latest impact report and achievements.
                </p>
              </div>

              <button
                onClick={handleDismiss}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-1"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <Button 
                onClick={handleViewReport}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-sm"
              >
                View Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

