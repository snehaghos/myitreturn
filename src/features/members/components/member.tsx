"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MoreVertical } from "lucide-react"
import { Link, useRouter } from "@tanstack/react-router"

interface TaxFillerData {
  firstName: string
  lastName: string
  pan: string
}

export default function MembersPage() {
  const router = useRouter()
  const [member, setMember] = useState<TaxFillerData | null>(null)
  const [expandedArticles, setExpandedArticles] = useState<string[]>([])

  useEffect(() => {
    const data = sessionStorage.getItem("taxFillerData")
    if (data) {
      const parsed = JSON.parse(data)
      setMember({
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        pan: parsed.pan || "EMPG3394H",
      })
    }
  }, [])

  const toggleArticle = (id: string) => {
    setExpandedArticles((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const helpArticles = [
    { id: "1", title: "How to Add or Edit a member?" },
    { id: "2", title: "How to enable ERI manually?" },
  ]

  if (!member) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const memberName = `${member.firstName || "Sneha"} ${member.lastName || "Ghoshal"}`
  const memberInitial = memberName.charAt(0).toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           

            <div className="flex items-center gap-4">
              <Link to="/support/help" className="text-muted-foreground hover:text-foreground transition text-sm">
                Support
              </Link>
              <button className="text-sm text-muted-foreground hover:text-foreground transition">
                Google:user@example.com ▼
              </button>
            </div>
          </div>
        </div>
      </header>

     
      <div className="border-b border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Link to="/auth/addtaxform" className="text-primary hover:underline text-sm">
            Home
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <span className="text-foreground text-sm">Members</span>
        </div>
      </div>

      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
       
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Click on a name to continue</h2>
                <p className="text-sm text-muted-foreground">
                  Click on any of the Tax Filers listed below to start using our services. You may click on "Add" button
                  on the right to add a new Tax Filer.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between hover:bg-muted/80 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{memberInitial}</span>
                  </div>

                  <div>
                    <h3 className="text-foreground font-semibold">{memberName}</h3>
                    <p className="text-sm text-muted-foreground">{member.pan}</p>
                  </div>

                
                  <div className="ml-auto">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded">
                      Continue
                    </span>
                  </div>
                </div>

                <button className="p-2 hover:bg-background rounded transition ml-2">
                  <MoreVertical size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="mt-8">
                <Link
                  to={'/auth/verify'}
                  className="px-6 py-2 rounded bg-blue-500 text-primary-foreground hover:opacity-90 transition font-medium"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-background border border-border rounded-lg p-6 sticky top-24">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <span>ℹ️</span> HELP ARTICLES
              </h3>
              <div className="space-y-2">
                {helpArticles.map((article) => (
                  <div key={article.id} className="border-b border-border">
                    <button
                      onClick={() => toggleArticle(article.id)}
                      className="w-full py-3 flex items-center justify-between text-left hover:text-primary transition"
                    >
                      <span className="text-sm text-foreground hover:text-primary">{article.title}</span>
                      <ChevronDown
                        size={18}
                        className={`text-muted-foreground transition-transform ${
                          expandedArticles.includes(article.id) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedArticles.includes(article.id) && (
                      <div className="pb-3 text-sm text-muted-foreground">
                        <p>This is helpful information about {article.title.toLowerCase()}.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/support/help" className="text-primary hover:underline text-sm mt-4 block">
                View all help articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
