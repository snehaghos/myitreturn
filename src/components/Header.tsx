"use client"

import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">IT</span>
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">myITreturn Help Center</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/auth/addtaxform" className="text-sm text-foreground hover:text-primary transition-colors">
            File your Tax Return
          </Link>
            <Link to="/support/help" className="text-sm text-foreground hover:text-primary transition-colors">
            Get Help
          </Link>

       

          <Button variant="outline" size="sm" asChild>
            <Link to="/auth/login">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
