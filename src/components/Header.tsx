"use client"

import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <img src="/images/taxyaarLogo.png" alt="TaxYaar Logo"  />
          </div>
          <span className="font-semibold text-2xl text-foreground hidden sm:inline">TaxYaar</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/auth/addtaxform" className="text-sm text-foreground hover:text-primary transition-colors">
            File your Tax Return
          </Link>
            <Link to="/support/help" className="text-sm text-foreground hover:text-primary transition-colors">
            Get Help
          </Link>

       

          <Button variant="outline" size="lg" asChild className="bg-blue-400 text-blue-100 flex items-center hover:bg-blue-500">
            <Link to="/auth/login">Log In</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
