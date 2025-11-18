"use client"

import { Link } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

export default function AddTaxForm() {
  const [expandedArticles, setExpandedArticles] = useState<string[]>([])

  const toggleArticle = (id: string) => {
    setExpandedArticles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const helpArticles = [
    { id: "1", title: "How to Add or Edit a member?" },
    { id: "2", title: "How to enable ERI manually?" },
    { id: "3", title: "What are deductions?" },
    { id: "4", title: "How to file taxes online?" },
  ]

  return (
    <div className="min-h-screen bg-background">
      

     
      <div className="border-b border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Link to="/" className="text-primary hover:underline text-sm">
            Home
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <span className="text-foreground text-sm">Add Tax Filer</span>
        </div>
      </div>

  
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Add Tax Filer</h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      PAN <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="XXXXXXXXXX"
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                    <p className="text-xs text-red-500 mt-1">This value is required.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="01/01/1990"
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value="snehagholshal577@gmail.com"
                    readOnly
                    className="w-full px-4 py-2 rounded border border-input bg-muted text-foreground focus:outline-none"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Middle Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-2 rounded border border-input bg-input text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <option>--Select--</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Father Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-4 py-2 rounded border border-input bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">WhatsApp number preferred - for updates to tax filing</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    className="px-6 py-2 rounded border border-border text-foreground hover:bg-muted transition font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
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
