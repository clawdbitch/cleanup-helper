import Link from "next/link";

function ShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
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

const footerLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "FAQ", href: "/faq" },
  { label: "Glossary", href: "/glossary" },
  { label: "Settings", href: "/settings" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-secondary/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldIcon className="w-6 h-6" />
              <span className="font-bold text-white">
                Cleanup<span className="text-primary-400">Helper</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Free, privacy-first tool to clean up your digital footprint.
              No data collected. No tracking. No sign-up required.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Navigate</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Built on trust</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="text-primary-400">✓</span>
                <span>Zero data collected or stored</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-400">✓</span>
                <span>No tracking or analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-400">✓</span>
                <span>Open-source codebase</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-400">✓</span>
                <span>Works offline — no server needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Cleanup Helper. Free and open-source.
          </p>
          <p className="text-xs text-neutral-600 text-center max-w-xl leading-relaxed">
            Disclaimer: This tool provides general guidance based on publicly available opt-out
            procedures. We are not affiliated with any listed services. Always follow official
            opt-out instructions from each provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
