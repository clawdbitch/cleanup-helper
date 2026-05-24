"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface GlossaryTerm {
  term: string;
  definition: string;
}

const glossary: GlossaryTerm[] = [
  {
    term: "2FA/MFA",
    definition:
      "Two-Factor Authentication (2FA) or Multi-Factor Authentication (MFA) is a security process that requires users to provide two or more verification factors to gain access to an account. This typically combines something you know (password) with something you have (phone, authenticator app) or something you are (fingerprint).",
  },
  {
    term: "Ad Personalization",
    definition:
      "The practice of using collected data about your browsing habits, interests, demographics, and behavior to show you targeted advertisements. Companies build detailed profiles to serve ads more likely to result in clicks or purchases.",
  },
  {
    term: "CCPA",
    definition:
      "California Consumer Privacy Act, a state statute intended to enhance privacy rights and consumer protection for residents of California. It gives consumers the right to know what personal data is collected, request deletion, and opt out of the sale of their personal information.",
  },
  {
    term: "Cookie",
    definition:
      "A small piece of data stored on your browser by websites you visit. Cookies are used to remember your preferences, keep you logged in, and track your browsing behavior across sites. Third-party cookies are especially used for advertising and tracking.",
  },
  {
    term: "Credit Freeze",
    definition:
      "A security measure that prevents new credit accounts from being opened in your name without your permission. By freezing your credit report with the three major credit bureaus (Equifax, Experian, TransUnion), you block lenders from accessing your credit report, making it much harder for identity thieves to open accounts in your name.",
  },
  {
    term: "Data Broker",
    definition:
      "Companies that collect, aggregate, and sell personal information about consumers. They gather data from public records, online behavior, purchases, and other sources, then sell it to marketers, advertisers, and other businesses. Examples include WhitePages, Spokeo, and BeenVerified.",
  },
  {
    term: "Data Breach",
    definition:
      "A security incident where unauthorized individuals gain access to confidential or sensitive data. Breaches can expose personal information like names, email addresses, passwords, and financial data. Major breaches often affect millions of users and are tracked by services like Have I Been Pwned.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of data you leave behind while using the internet. This includes everything from websites visited and emails sent to social media posts and online purchases. Your digital footprint can be active (data you intentionally share) or passive (data collected without your explicit knowledge).",
  },
  {
    term: "Email Alias",
    definition:
      "An alternate email address that forwards to your primary inbox. Services like SimpleLogin, AnonAddy, and Apple's Hide My Email let you create unique aliases for each website you sign up for. If an alias starts receiving spam, you can disable it without affecting your main email.",
  },
  {
    term: "GDPR",
    definition:
      "General Data Protection Regulation, a comprehensive data privacy law in the European Union that gives individuals control over their personal data. It requires organizations to obtain explicit consent for data collection, allows users to request deletion, and imposes heavy fines for non-compliance.",
  },
  {
    term: "Incognito Mode",
    definition:
      "A private browsing mode available in most browsers that doesn't save your browsing history, cookies, or form data after you close the window. However, it does not make you anonymous — your ISP, employer, or websites you visit can still track your activity.",
  },
  {
    term: "Location History",
    definition:
      "A record of places you've visited, typically collected by smartphones and services like Google Maps. This data can reveal detailed patterns about your daily routine, home and work addresses, and places of interest. Most services allow you to review and delete this history.",
  },
  {
    term: "Opt-Out",
    definition:
      "The process of requesting that a company stop collecting, using, or sharing your personal information. Unlike opt-in (where you actively agree to data collection), opt-out requires you to take action to stop data collection. Many data brokers require manual opt-out requests.",
  },
  {
    term: "Password Manager",
    definition:
      "A software application that generates, stores, and manages unique passwords for all your online accounts. Popular options include Bitwarden (free), 1Password (paid), and KeePass (open source). Using a password manager eliminates the need to reuse passwords and protects against credential-based attacks.",
  },
  {
    term: "Phishing",
    definition:
      "A cyberattack where attackers impersonate legitimate organizations through emails, text messages, or fake websites to trick you into revealing sensitive information like passwords, credit card numbers, or Social Security numbers. Always verify the sender's email address and never click suspicious links.",
  },
  {
    term: "PII (Personally Identifiable Information)",
    definition:
      "Any data that can be used to identify a specific individual. This includes names, addresses, Social Security numbers, email addresses, phone numbers, and biometric data. PII is the primary target of data brokers and identity thieves.",
  },
  {
    term: "Privacy Policy",
    definition:
      "A legal document that describes how a company collects, uses, stores, and shares your personal data. While often lengthy and written in legal language, it outlines your rights regarding your data and the company's data handling practices.",
  },
  {
    term: "Terms of Service",
    definition:
      "A legal agreement between you and a website or service that outlines the rules and guidelines for using their platform. It covers acceptable use, intellectual property rights, liability limitations, and what the company can do with your data and content.",
  },
  {
    term: "Tracking Pixel",
    definition:
      "A tiny, invisible image embedded in web pages or emails used to track user behavior. When loaded, it sends information back to the server about when you viewed the content, your IP address, browser type, and other details. Commonly used in email marketing to track open rates.",
  },
  {
    term: "Web & App Activity",
    definition:
      "A Google service that saves your searches, sites you visit, and videos you watch across Google services. This data is used to personalize your experience, including search results, ads, and recommendations. You can review and delete this data at myactivity.google.com.",
  },
  {
    term: "Dark Web",
    definition:
      "A part of the internet that requires specific software (like Tor) to access and is not indexed by standard search engines. While it has legitimate uses for privacy and anonymity, it's also known for hosting marketplaces where stolen personal data, including leaked credentials from data breaches, is bought and sold.",
  },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let result = glossary;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      );
    }

    if (selectedLetter) {
      result = result.filter((t) => t.term[0].toUpperCase() === selectedLetter.toUpperCase());
    }

    return result;
  }, [search, selectedLetter]);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    filteredTerms.forEach((t) => letters.add(t.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, [filteredTerms]);

  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/dashboard" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Dashboard
              </Link>
            </li>
            <li className="text-neutral-500">/</li>
            <li className="text-neutral-300 font-medium">Glossary</li>
          </ol>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Privacy & Security Glossary</h1>
          <p className="text-neutral-400">
            Common terms you&apos;ll encounter while cleaning up your digital footprint.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedLetter(null);
              }}
              className="w-full px-4 py-3 bg-bg-elevated border border-white/5 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedLetter(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 text-sm"
              >
                ✕ Clear
              </button>
            )}
          </div>
          <p className="mt-2 text-sm text-neutral-400">
            {filteredTerms.length} of {glossary.length} terms
            {search && ` matching &ldquo;${search}&rdquo;`}
          </p>
        </div>

        {/* Letter filter */}
        <div className="mb-6 flex flex-wrap gap-1">
          {allLetters.split("").map((letter) => {
            const hasTerms = availableLetters.includes(letter);
            const isActive = selectedLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => setSelectedLetter(isActive ? null : letter)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  !hasTerms
                    ? "text-neutral-600 cursor-not-allowed"
                    : isActive
                    ? "bg-primary-500/20 text-primary-400"
                    : "bg-bg-elevated text-neutral-400 border border-white/5 hover:bg-neutral-700/30"
                }`}
                disabled={!hasTerms}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Terms grid */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((item) => (
              <div
                key={item.term}
                className="glass-card rounded-xl p-5 glow-hover"
              >
                <h3 className="text-base font-semibold text-white mb-2">{item.term}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-400">No terms found matching your search.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedLetter(null);
              }}
              className="mt-2 text-primary-400 hover:text-primary-500 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
