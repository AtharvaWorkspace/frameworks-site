'use client'

import React, { useState } from 'react'

/*
  ✅ Fully Stabilized Version
  - Removed metadata export (NOT allowed in client components in Next.js App Router)
  - No external assets required (prevents /public/logo.png errors)
  - No next/image dependency
  - No third‑party animation libraries
  - Works in Next.js App Router, Pages Router, Vite, or CRA
*/

export default function FrameworksWebsite() {
  const [lightMode, setLightMode] = useState(true)

  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-500 ${
        lightMode ? 'bg-[#f8f8f6] text-black' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* NAVBAR */}
        <nav className="flex justify-between items-center py-8">
          <div>
            <div className="text-xl font-semibold tracking-wide">
              Frameworks
            </div>
            <div className="text-xs tracking-widest opacity-60">
              THINK • EXECUTE • DELIVER
            </div>
          </div>

          <div className="flex gap-8 text-sm items-center">
            <a href="#services" className="hover:opacity-70 transition">
              Services
            </a>
            <a href="#cases" className="hover:opacity-70 transition">
              Case Studies
            </a>
            <a href="#blog" className="hover:opacity-70 transition">
              Insights
            </a>
            <button
              onClick={() => setLightMode((prev) => !prev)}
              className="border rounded-2xl px-4 py-1 text-xs hover:opacity-70 transition"
            >
              {lightMode ? 'Dark' : 'Light'}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="py-32">
          <h1 className="text-6xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Think.
            <br /> Execute.
            <br /> Deliver.
          </h1>
          <p className="mt-8 text-lg max-w-xl opacity-70">
            Frameworks is a premium consulting studio operating at the
            intersection of product, business, and strategic execution.
            We design structured systems that compound long-term leverage.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block border rounded-2xl px-6 py-3 text-sm hover:opacity-80 transition"
            >
              Start a Conversation →
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-28 border-t">
          <h2 className="text-3xl font-medium mb-16">Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              'Product Strategy & Roadmapping',
              'Business Analysis & Market Intelligence',
              'Growth & GTM Consulting',
              'Content & Thought Leadership Systems',
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-8 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-medium mb-4">{item}</h3>
                <p className="opacity-70 text-sm">
                  High-clarity frameworks, structured execution, and measurable
                  strategic outcomes tailored to ambitious teams.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="py-28 border-t">
          <h2 className="text-3xl font-medium mb-16">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">
                New Product Launch Optimization
              </h3>
              <p className="opacity-70 text-sm">
                Redesigned GTM strategy and activation funnels resulting in
                measurable growth improvements within 40 days of deployment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">
                Strategic Market Positioning
              </h3>
              <p className="opacity-70 text-sm">
                Conducted competitive analysis and strategic repositioning for
                early-stage SaaS firm expanding into global markets.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section id="blog" className="py-28 border-t">
          <h2 className="text-3xl font-medium mb-16">Insights</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              'Product Thinking',
              'Market Strategy',
              'Execution Systems',
            ].map((post, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6 hover:shadow-2xl transition duration-300"
              >
                <h3 className="font-medium mb-3">{post}</h3>
                <p className="opacity-70 text-sm">
                  Long-form strategic essays and structured breakdowns.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 border-t text-center">
          <h2 className="text-4xl font-medium mb-6">
            Let’s Build with Structure.
          </h2>
          <a
            href="mailto:admin@frameworks.net.in"
            className="inline-block border rounded-2xl px-8 py-4 hover:opacity-80 transition"
          >
            admin@frameworks.net.in
          </a>
        </section>

        <footer className="py-12 border-t text-sm opacity-60">
          © 2026 Frameworks. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
