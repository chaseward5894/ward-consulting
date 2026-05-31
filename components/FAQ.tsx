"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to replace my current website?",
    answer:
      "No. The lead intake form can be added to your existing website, or we can set it up as a standalone page. Either way, you don't need to rebuild anything.",
  },
  {
    question: "Can this work with my current Google account?",
    answer:
      "Yes. The system is built using Google Sheets and Gmail, so as long as you have a Google account, you're set. No new accounts or subscriptions required.",
  },
  {
    question: "Do I need to learn complicated software?",
    answer:
      "No. The only thing you interact with day-to-day is a Google Sheet where you update lead statuses. Everything else runs automatically in the background.",
  },
  {
    question: "Can this work with my current contact form?",
    answer:
      "In many cases, yes. If your current form can send data to a webhook or Zapier, we can likely connect to it. If not, we'll build you a clean new one that works better anyway.",
  },
  {
    question: "How long does setup usually take?",
    answer:
      "Most setups are completed within 3–5 business days after our initial call. There's no long onboarding process — we just need a bit of info about your business and we handle the rest.",
  },
  {
    question: "What if I want SMS alerts later?",
    answer:
      "That's a common add-on. SMS alerts can be layered in after the initial setup. We'll talk through options depending on what tools make sense for your situation.",
  },
  {
    question: "Can this connect to Zapier or Make?",
    answer:
      "Yes. The system is built with standard integrations in mind. If you're already using Zapier or Make for something, we can connect it. If you're not, you likely won't need to — the base setup doesn't require them.",
  },
  {
    question: "Do you build websites too?",
    answer:
      "Yes. If you don't have a website or your current one isn't doing you any favors, we can build a clean, professional landing page for your business. It can be bundled with the automation package or set up as a standalone project. Either way, the lead form is built right into the site and connected to the automation system from day one.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Common questions
          </h2>
          <p className="text-lg text-slate-600">
            If you don't see your question here, just reach out — we'll give you a straight answer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
