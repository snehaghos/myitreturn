"use client"

import { Link } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { FaChartLine, FaBook, FaDatabase, FaQuestionCircle } from "react-icons/fa"

const categories = [
  {
    id: "tax-made-easy",
    title: "Tax Made Easy",
    description: "Understand tax concepts and filing requirements",
    icon: FaChartLine,
  },
  {
    id: "guides",
    title: "How to Guides",
    description: "Step-by-step instructions for common tasks",
    icon: FaBook,
  },
  {
    id: "knowledge",
    title: "Knowledge Base",
    description: "Comprehensive articles and documentation",
    icon: FaDatabase,
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "Frequently asked questions and answers",
    icon: FaQuestionCircle,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
          <p className="mt-2 text-muted-foreground">Find answers and guides to help you succeed</p>
        </div>
      </header>

    
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                to="/categories/$categoryId"
                params={{ categoryId: category.id }}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="text-4xl mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h2 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}