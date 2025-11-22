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

  const innerStyle: React.CSSProperties = {
    width: `${Math.min(progress, 100)}%`,
    height: "100%",
    borderRadius: 9999,
    backgroundImage:
      "linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 10px, transparent 10px 20px)",
    backgroundSize: "200% 100%, 40px 40px",
    backgroundBlendMode: "overlay",
    boxShadow: "inset 0 -6px 14px rgba(0,0,0,0.06)",
    transition: "width 400ms cubic-bezier(.2,.9,.2,1)",
    animation: "stripeMove 1.6s linear infinite, gradientShift 3.6s linear infinite",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center px-4">
      <div className="text-center w-[420px]">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome!</h1>
          <p className="text-lg text-muted-foreground mb-2">Please Wait...</p>
          <p className="text-muted-foreground">Creating Secure Connection</p>
        </div>

        <div className="w-full h-4 rounded-full bg-black/7 overflow-hidden relative" style={{ boxShadow: "0 6px 18px rgba(11,20,40,0.04)" }}>
          <div style={innerStyle} />
        </div>
      </div>

      <style>{`
        @keyframes stripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 0, 0 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 0, 0 0; }
          50% { background-position: 50% 0, 0 0; }
          100% { background-position: 100% 0, 0 0; }
        }
      `}</style>
    </div>
  )
}
