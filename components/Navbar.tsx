"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-slate-900 tracking-tight">
            Ward <span className="text-blue-600">Consulting</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </a>
            <a href="#package" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              FAQ
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Get a Free Audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          <a href="#how-it-works" className="block text-sm text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#package" className="block text-sm text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#about" className="block text-sm text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#faq" className="block text-sm text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a
            href="#contact"
            className="block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
