"use client"

import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"
import { Link } from "@tanstack/react-router"

type QA = {
  id: string
  question: string
  answer?: string
  answerNodes?: React.ReactNode
}

const QUESTIONS: QA[] = [
  {
    id: "q1",
    question: "Is TaxYaar authorised eRI by incometax.gov.in?",
    answer:
      "No. TaxYaar is not an e-Return Intermediary (eRI) of the Income-tax Department. We provide a guided filing experience and support.",
  },
  {
    id: "q2",
    question: "Is my data safe with TaxYaar?",
    answer:
      "Yes. Your data is absolutely safe with TaxYaar. We use encryption and follow strict security practices. We do not sell your data.",
  },
  {
    id: "q3",
    question: "What if I forget my username or password?",
    answer:
      "Visit Forgot Password where you can recover your account using PAN, Email or username. Click the Forgot password link on the login page.",
  },
  {
    id: "q4",
    question: "What if Google Sign In does not work?",
    answer:
      "If Google Sign In doesn't work try clearing cookies, try an incognito window or use the email/password login method. Contact support if issue persists.",
  },
  {
    id: "q5",
    question: "Do I have to enter my Income-tax website credentials on this page?",
    answer:
      "No. We never ask for your Income-tax website credentials. Any process that requires official credentials will redirect you to the government site.",
  },
]

export default function AskedQuestions() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({})

  const toggle = (id: string) =>
    setOpenIds((s) => ({ ...s, [id]: !s[id] }))

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Common Questions</h2>

      <div className="bg-white border border-slate-200 rounded-md shadow-sm divide-y divide-slate-100">
        {QUESTIONS.map((qa) => {
          const open = !!openIds[qa.id]
          return (
            <div key={qa.id} className="px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <button
                  type="button"
                  onClick={() => toggle(qa.id)}
                  className="text-left flex-1"
                  aria-expanded={open}
                >
                  <div className="text-sm font-medium text-slate-800">{qa.question}</div>
                  {open && qa.answer && (
                    <div className="mt-3 text-sm text-slate-500">{qa.answer}</div>
                  )}
                </button>

                <button
                  aria-label={open ? "Collapse" : "Expand"}
                  onClick={() => toggle(qa.id)}
                  className="ml-4 p-2 rounded hover:bg-slate-50 text-slate-500"
                >
                  {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
                </button>
              </div>
              {!open && <div className="mt-0" />}
            </div>
          )
        })}
      </div>

      <p className="text-center text-sm text-slate-500 mt-6">
        Still need help? <Link to="/support/help" className="text-sky-600 hover:underline">Contact support</Link>
      </p>
    </section>
  )
}