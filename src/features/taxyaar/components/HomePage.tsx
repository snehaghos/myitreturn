"use client"

import { Link } from "@tanstack/react-router"
import { FaBolt, FaLock, FaLightbulb, FaCheckCircle } from "react-icons/fa"

export default function LandingPage() {
  const features = [
    { Icon: FaBolt, title: "Fast", desc: "File your taxes in minutes" },
    { Icon: FaLock, title: "Secure", desc: "Bank-level security for your data" },
    { Icon: FaLightbulb, title: "Easy", desc: "Simple step-by-step process" },
  ]

  return (
    <div className="min-h-screen  text-blue-500">
       <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              India's Most Trusted Tax Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              File Your Income Tax with Confidence
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              India's oldest and most trusted e-Return Intermediary. File in minutes with expert guidance, bank-level
              security, and affordable pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                File Now from ₹49
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition font-semibold">
                Login
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span>10 Lakh+ Happy Customers</span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="text-slate-700 font-medium">Quick Import from ITR</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="text-slate-700 font-medium">Form-16 Upload</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="text-slate-700 font-medium">Q&A Guided Process</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="text-slate-700 font-medium">CA Assisted Filling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-blue-50 border-t border-b border-blue-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-500 mb-1">{title}</h4>
                    <p className="text-blue-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to file your taxes?</h3>
          <p className="text-white/90 mb-8 text-lg">Join thousands of users who trust TaxYaar</p>
          <Link
            to="/auth/login"
            className="px-8 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-95 transition inline-block shadow"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  )
}