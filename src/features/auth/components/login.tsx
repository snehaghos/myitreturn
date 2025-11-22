"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { Link, useRouter } from "@tanstack/react-router"
import AskedQuestions from "./askedQuestions"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      router.navigate({ to: "/auth/welcome" })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-md px-4 py-12 sm:px-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Sign up to TaxYaar Income tax efiling</h2>
        <p className="text-muted-foreground mb-8">Login to TaxYaar income tax return filing account</p>

        <form onSubmit={handleContinue} className="space-y-6">
          <button
            type="button"
            className="w-full px-4 py-3 rounded border border-border bg-blue-100 hover:bg-blue-200 transition flex items-center justify-center gap-3 text-blue-400 font-medium"
          >
            <FcGoogle size={20} />
            <span>Log in with Google</span>
          </button>

          <div className="relative text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative bg-background px-2 text-muted-foreground text-sm">OR</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <Link to="/" className="text-blue-600 hover:underline text-sm">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 rounded bg-blue-400 text-primary-foreground hover:opacity-90 transition font-medium disabled:opacity-50"
          >
            {isLoading ? "Continuing..." : "Continue"}
          </button>
        </form>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Don't have an account yet?{" "}
          <Link to="/auth/login" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
      <AskedQuestions/>
    </div>
  )
}
