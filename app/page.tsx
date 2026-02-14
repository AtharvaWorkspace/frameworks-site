'use client'

import React, { useEffect, useState } from 'react'

export default function FrameworksWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
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
    <div className="relative min-h-screen bg-[#0B0B0F] text-white">

      <div className="absolute inset-0 -z-20 gradient-bg" />
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

          <div className="hidden md:flex gap-8 text-sm text-white/70 items-center">
            <a href="#pillars" className="hover:text-white transition">Pillars</a>
            <a href="#content" className="hover:text-white transition">Content</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 text-xl z-40 md:hidden">
            <a href="#pillars" onClick={() => setMenuOpen(false)}>Pillars</a>
            <a href="#content" onClick={() => setMenuOpen(false)}>Content</a>
          </div>
        )}

        {/* HERO */}
        <section className="pt-44 sm:pt-52 pb-28 text-center reveal">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl mx-auto">
            Decoding how AI reshapes
            <br /> power, economics & business leverage.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            Systems strategist analyzing AI agents, automation, macro tech shifts,
            and the structural redesign of companies in the intelligence era.
          </p>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="py-24 border-t border-white/10 reveal">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Intellectual Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: 'AI as Leverage',
                desc: 'AI agents, automation systems, workforce redesign, machine vs human decision loops.'
              },
              {
                title: 'Systems & Business Architecture',
                desc: 'Operating leverage, bottlenecks, scaling inefficiencies, decision latency.'
              },
              {
                title: 'Macro Power Shifts',
                desc: 'AI arms race, data sovereignty, platform monopolies, capital flows in AI era.'
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT ARCHITECTURE */}
        <section id="content" className="py-24 border-t border-white/10 reveal">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Content Architecture
          </h2>

          <div className="mt-16 space-y-10">
            {[
              'Explainers — Deep authority-building analysis',
              'Strategic Breakdowns — Competitive & power dynamics',
              'Tactical Applications — AI for SMEs & founders',
              'Decision Frameworks — Proprietary intellectual models'
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-12 border-t border-white/10 text-white/40 text-xs text-center">
          © 2026 Frameworks — Systems Strategy in the AI Era.
        </footer>
      </div>

      <style jsx global>{`
        html { scroll-behavior: smooth; }

        .gradient-bg {
          background: radial-gradient(circle at 20% 20%, #6366f1, transparent 45%),
                      radial-gradient(circle at 80% 30%, #8b5cf6, transparent 45%);
          animation: moveGradient 18s ease-in-out infinite;
        }

        @keyframes moveGradient {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-40px,20px); }
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
