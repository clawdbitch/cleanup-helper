"use client";

import Link from "next/link";
import { workflows } from "@/lib/workflows/registry";

/* ─── SVG Icons ─── */

function ShieldCheckIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <path d="M14 10l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function UserXIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" />
      <line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

const featureIcons = [ShieldCheckIcon, EyeOffIcon, UserXIcon, AlertTriangleIcon, GlobeIcon, SmartphoneIcon, LockIcon];

/* ─── Data ─── */

const stats = [
  { value: "500+", label: "Data brokers selling your info", sublabel: "across the US alone" },
  { value: "80%", label: "Of personal data is public", sublabel: "on data broker sites" },
  { value: "$1,400", label: "Avg cost of identity theft", sublabel: "financial + time recovery" },
  { value: "10 min", label: "Per workflow step", sublabel: "guided, step-by-step" },
];

const trustBadges = [
  { icon: LockIcon, text: "Zero data collected" },
  { icon: EyeOffIcon, text: "No tracking or analytics" },
  { icon: ShieldCheckIcon, text: "Open-source codebase" },
  { icon: ZapIcon, text: "Works offline" },
];

const comparisonData = [
  { feature: "Free to use", us: true, them: false },
  { feature: "No account required", us: true, them: false },
  { feature: "Step-by-step guidance", us: true, them: false },
  { feature: "Progress tracking", us: true, them: false },
  { feature: "Privacy-first (no data)", us: true, them: false },
  { feature: "Open source", us: true, them: false },
  { feature: "All 7 cleanup workflows", us: true, them: false },
  { feature: "Works offline", us: true, them: false },
];

/* ─── Component ─── */

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* ════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-400 text-sm font-medium mb-8">
              <ZapIcon />
              Free &amp; Private — Your data never leaves your device
            </div>

            {/* Headline */}
            <h1 className="mb-6 leading-tight">
              Remove your personal data
              <br />
              from <span className="text-gradient">500+ data brokers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Step-by-step guided workflows to clean up your digital footprint, delete old accounts,
              and lock down your online presence. No sign-up. No tracking. No data collection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/dashboard"
                className="btn-primary text-lg px-8 py-4 rounded-xl"
              >
                Start Cleaning Up — It&apos;s Free
                <ArrowRightIcon />
              </Link>
              <Link
                href="#workflows"
                className="btn-secondary text-lg px-8 py-4 rounded-xl"
              >
                See All Workflows
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <badge.icon />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAR
          ════════════════════════════════════════════ */}
      <section className="border-y border-white/5 bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-neutral-200 mb-0.5">{stat.label}</div>
                <div className="text-xs text-neutral-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS
          ════════════════════════════════════════════ */}
      <section className="bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="mt-3 mb-4">Three steps to a cleaner digital life</h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              No complicated setup. No accounts to manage. Just follow the guides and take back control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                icon: SearchIcon,
                title: "Choose a workflow",
                desc: "Pick the cleanup task that matters most — from data broker removal to social media cleanup.",
              },
              {
                step: "02",
                icon: TrashIcon,
                title: "Follow each step",
                desc: "Clear instructions with direct links to every service. Each step takes just a few minutes.",
              },
              {
                step: "03",
                icon: ShieldCheckIcon,
                title: "Track your progress",
                desc: "Your progress is saved locally on your device. Come back anytime and pick up where you left off.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card rounded-2xl p-6 glow-hover group"
              >
                <div className="text-xs font-mono text-primary-400 mb-4">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <item.icon />
                </div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WORKFLOWS
          ════════════════════════════════════════════ */}
      <section id="workflows" className="bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-wider">
              7 Guided Workflows
            </span>
            <h2 className="mt-3 mb-4">Every corner of your digital life, covered</h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              38 actionable steps across 7 categories. Each one designed to remove, reduce, or protect your personal data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {workflows.map((wf, idx) => {
              const IconComp = featureIcons[idx % featureIcons.length];
              return (
                <Link
                  key={wf.slug}
                  href={`/workflow/${wf.slug}`}
                  className="glass-card rounded-2xl p-6 glow-hover group block"
                >
                  {/* Icon + category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <IconComp />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 bg-neutral-700/50 rounded-full px-2.5 py-0.5">
                      {wf.category}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="text-white font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {wf.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {wf.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-white/5">
                    <span>{wf.steps.length} steps</span>
                    <span>{wf.estimatedTime}</span>
                    <span className={`font-medium ${
                      wf.difficulty === "easy" ? "text-success-500" :
                      wf.difficulty === "moderate" ? "text-warning-500" :
                      "text-error-500"
                    }`}>
                      {wf.difficulty}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Open Dashboard — Start Your Cleanup
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          COMPARISON TABLE
          ════════════════════════════════════════════ */}
      <section className="border-y border-white/5 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-emerald uppercase tracking-wider">
              Why Cleanup Helper
            </span>
            <h2 className="mt-3 mb-4">How we compare to paid services</h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Services like Delete.me and Incogni charge $120-200/year to do what we give you for free.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/5 bg-bg-card/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-bg-elevated/50 border-b border-white/5">
              <div className="p-4 text-sm font-medium text-neutral-400">Feature</div>
              <div className="p-4 text-center">
                <span className="text-sm font-bold text-white">Cleanup Helper</span>
                <span className="block text-xs text-primary-400 mt-0.5">Free forever</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-medium text-neutral-400">Paid Services</span>
                <span className="block text-xs text-neutral-600 mt-0.5">$120-200/yr</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 items-center ${
                  i !== comparisonData.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="p-4 text-sm text-neutral-300">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.us ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success-500/20 text-success-500">
                      <CheckCircleIcon />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-error-500/20 text-error-500">
                      <XIcon />
                    </span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {row.them ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success-500/20 text-success-500">
                      <CheckCircleIcon />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-error-500/20 text-error-500">
                      <XIcon />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your data is being sold right now.
              <br />
              <span className="text-gradient">Stop it before dinner.</span>
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              The first workflow takes less than 15 minutes. Your future self will thank you.
            </p>
            <Link
              href="/dashboard"
              className="btn-primary text-lg px-8 py-4 rounded-xl"
            >
              Start Your First Cleanup
              <ArrowRightIcon />
            </Link>
            <p className="text-xs text-neutral-500 mt-4">
              Free forever. No account needed. No data collected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
