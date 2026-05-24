"use client";

import Link from "next/link";
import { useProgress } from "@/lib/storage/progress-context";
import { useState } from "react";

function ShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2L4 7V15C4 22.18 9.12 28.86 16 30C22.88 28.86 28 22.18 28 15V7L16 2Z"
        fill="url(#shield-grad)"
        stroke="rgba(79,124,255,0.3)"
        strokeWidth="1"
      />
      <path
        d="M13 16L15 18L19 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="shield-grad"
          x1="4"
          y1="2"
          x2="28"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4f7cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MobileMenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/faq", label: "FAQ" },
  { href: "/glossary", label: "Glossary" },
  { href: "/settings", label: "Settings" },
];

export default function Header() {
  const { overall } = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Cleanup Helper Home"
            >
              <ShieldIcon className="w-8 h-8 transition-transform group-hover:scale-105" />
              <span className="font-bold text-lg text-white tracking-tight hidden sm:inline">
                Cleanup<span className="text-primary-400">Helper</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Progress + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Progress indicator */}
            <div className="hidden sm:flex items-center gap-2.5">
              <span className="text-xs text-neutral-400">Progress</span>
              <div className="w-24 h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${overall.percentage}%`,
                    background:
                      overall.percentage === 100
                        ? "linear-gradient(90deg, #34d399, #22d3ee)"
                        : "linear-gradient(90deg, #4f7cff, #22d3ee)",
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-white tabular-nums">
                {overall.percentage}%
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <MobileMenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2.5 px-3 pt-2 mt-1 border-t border-white/5">
                <span className="text-xs text-neutral-400">Progress</span>
                <div className="flex-1 h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan transition-all"
                    style={{ width: `${overall.percentage}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-white tabular-nums">
                  {overall.percentage}%
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
