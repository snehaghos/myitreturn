"use client"

import { Link } from '@tanstack/react-router'

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-background">
    

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Simple Income Tax Filing
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              File your taxes with confidence. Our easy-to-use platform guides you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth/login" className="px-8 py-3 rounded bg-primary text-primary-foreground hover:opacity-90 transition font-medium text-center">
                Get Started
              </Link>
              <Link to="/support/help" className="px-8 py-3 rounded border border-border text-foreground hover:bg-muted transition font-medium text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧮</div>
              <p className="text-muted-foreground">Tax Filing Made Easy</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-muted/50 border-y border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Fast", desc: "File your taxes in minutes" },
              { icon: "🔒", title: "Secure", desc: "Bank-level security for your data" },
              { icon: "💡", title: "Easy", desc: "Simple step-by-step process" },
            ].map((feature) => (
              <div key={feature.title} className="bg-background rounded-lg p-6 border border-border">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to file your taxes?</h3>
          <p className="text-primary-foreground/90 mb-8 text-lg">Join thousands of users who trust myITreturn</p>
          <Link to="/auth/login" className="px-8 py-3 rounded bg-primary-foreground text-primary hover:opacity-90 transition font-medium inline-block">
            Create Account
          </Link>
        </div>
      </section>
    </div>
  )
}
