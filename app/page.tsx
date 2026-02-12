'use client'

import React, { useEffect, useState } from 'react'

/*
  🚀 FRAMEWORKS — FLAGSHIP PERFORMANCE EDITION

  Optimized For:
  - Mobile-first performance
  - Desktop elegance
  - Reduced GPU-heavy blur
  - Motion reduced on low-power devices
  - Accessible navigation (hamburger)
  - Clean responsive spacing
  - No unnecessary heavy animations
  - Smooth but efficient gradient motion
*/

export default function FrameworksWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-x-hidden">

      {/* Lightweight Animated Gradient */}
      <div className="absolute inset-0 -z-20 gradient-bg" />

      {/* Subtle Noise */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none noise" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-4 flex justify-between items-center z-50">
          <div className="text-lg font-semibold tracking-tight">
            Frameworks
            <div className="text-[10px] tracking-[0.3em] text-white/50 mt-1">
              THINK • EXECUTE • DELIVER
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm text-white/70 items-center">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#cases" className="hover:text-white transition">Work</a>
            <a href="#insights" className="hover:text-white transition">Insights</a>
            <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full font-medium hover:opacity-90 transition">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 text-xl z-40 md:hidden">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#cases" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}

        {/* HERO */}
        <section className="pt-40 sm:pt-48 pb-28 text-center reveal">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Strategic systems
            <br /> built for leverage.
          </h1>
          <p className="mt-8 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            We design structured product and business systems that compound
            strategic advantage over time.
          </p>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 sm:py-28 border-t border-white/10 reveal">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Core capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-14">
            {['Product Strategy','Business Intelligence','Growth & GTM','Thought Leadership'].map((item,i)=>(
              <div key={i} className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-lg sm:text-xl font-medium">{item}</h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  Structured frameworks and measurable execution systems.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASES */}
        <section id="cases" className="py-20 sm:py-28 border-t border-white/10 reveal">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Selected engagements</h2>
          <div className="mt-14 space-y-10">
            {[ 'New Product Launch Performance & GTM Optimization', 'Market Expansion & Strategic Positioning' ].map((caseItem,i)=>(
              <div key={i} className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl sm:text-2xl font-medium">{caseItem}</h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  System redesign, strategic alignment, and measurable growth impact.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INSIGHTS */}
        <section id="insights" className="py-20 sm:py-28 border-t border-white/10 reveal">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {['Product Systems','Strategic Leverage','Execution Design'].map((post,i)=>(
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="font-medium">{post}</h3>
                <p className="mt-2 text-white/60 text-sm">Analytical essays and structured breakdowns.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 sm:py-32 border-t border-white/10 text-center reveal">
          <h2 className="text-2xl sm:text-5xl font-semibold tracking-tight">
            Let’s build durable advantage.
          </h2>
          <div className="mt-8">
            <a href="mailto:admin@frameworks.net.in" className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:opacity-90 transition">
              admin@frameworks.net.in
            </a>
          </div>
        </section>

        <footer className="py-10 border-t border-white/10 text-white/40 text-xs sm:text-sm text-center">
          © 2026 Frameworks. All rights reserved.
        </footer>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .gradient-bg {
          background: radial-gradient(circle at 20% 20%, #6366f1, transparent 45%),
                      radial-gradient(circle at 80% 30%, #8b5cf6, transparent 45%);
          animation: moveGradient 18s ease-in-out infinite;
        }

        @keyframes moveGradient {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-40px,20px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gradient-bg { animation: none; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}
