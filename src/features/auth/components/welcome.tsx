"use client"

import { useRouter } from "@tanstack/react-router"
import { useEffect, useState } from "react"


export default function WelcomePage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          router.navigate({ to: "/auth/addtaxform" })
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 600)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome!</h1>
          <p className="text-lg text-muted-foreground mb-2">Please Wait...</p>
          <p className="text-muted-foreground">Creating Secure Connection</p>
        </div>

       
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
