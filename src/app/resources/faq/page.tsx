"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string[];
}

const faqs: FAQItem[] = [
  {
    question: "What is Cleanup Helper?",
    answer: [
      "Cleanup Helper is a free, privacy-focused digital footprint cleanup tool. It provides step-by-step guided workflows to help you reduce your online presence and protect your personal information.",
      "The app walks you through tasks like removing your data from data brokers, cleaning up Google search results, closing forgotten accounts, checking for data breaches, and more. It's designed as a companion guide — you still need to visit each service yourself, but we make the process organized and straightforward.",
    ],
  },
  {
    question: "Is Cleanup Helper free?",
    answer: [
      "Yes, Cleanup Helper is completely free to use. There are no premium tiers, no subscriptions, and no hidden costs.",
      "Some of the external services we link to may offer paid options (like automated data broker removal services), but Cleanup Helper itself never charges anything. All workflows and guidance are available at no cost.",
    ],
  },
  {
    question: "Does Cleanup Helper collect my data?",
    answer: [
      "No. Cleanup Helper does not collect, store, or transmit any personal data. We have no servers, no databases, and no analytics.",
      "Everything happens entirely in your browser. Your progress is stored in your browser's localStorage — a built-in storage mechanism that keeps data on your device. We cannot see what you do, which steps you complete, or any information about your accounts.",
    ],
  },
  {
    question: "How does progress tracking work?",
    answer: [
      "As you complete steps in each workflow, your progress is saved to your browser's localStorage. This is a small, built-in storage area that websites can use to remember information on your device.",
      "Your progress data includes which steps you've completed, when you started each workflow, and your current position. You can export this data as a JSON file from the Settings page, or import a previously exported file to restore your progress.",
      "If you clear your browser data or use a different device, your progress will be lost unless you've exported it.",
    ],
  },
  {
    question: "Can I use this on multiple devices?",
    answer: [
      "Since progress is stored locally in your browser, it won't sync automatically between devices. However, you can export your progress from one device and import it on another using the Settings page.",
      "To transfer your progress: go to Settings → Export Progress to download a JSON file, then on your other device go to Settings → Import Progress to restore it.",
    ],
  },
  {
    question: "How often should I check data brokers?",
    answer: [
      "Data brokers frequently re-collect personal information, so one-time opt-outs won't last forever. We recommend checking and re-opting out every 3–6 months.",
      "Set a calendar reminder to revisit the Data Broker Opt-Out workflow periodically. If you want automated monitoring, there are paid services like DeleteMe that handle this for you, but the manual approach using Cleanup Helper works just fine.",
    ],
  },
  {
    question: "What's the difference between free and Pro?",
    answer: [
      "There is no Pro version of Cleanup Helper. The app is entirely free with no premium features or paid tiers.",
      "Some workflows mention optional paid services (like automated data broker removal or premium password managers) — these are external tools that some people find helpful, but they're not part of Cleanup Helper and are completely optional.",
    ],
  },
  {
    question: "How do I reset my progress?",
    answer: [
      "You can reset all your progress from the Settings page. Scroll down to the Data Management section and click 'Reset All Progress'. You'll be asked to confirm before anything is deleted.",
      "This will remove all completed steps, workflow progress, and activity history. It cannot be undone unless you have a previously exported backup.",
    ],
  },
  {
    question: "Are the external links safe?",
    answer: [
      "All external links in Cleanup Helper point to official, legitimate websites — opt-out pages for data brokers, official Google account settings, reputable security tools, and well-known services.",
      "We are not affiliated with any of these services. We simply provide links to help you navigate the cleanup process. Always verify the URL in your browser's address bar before entering any personal information.",
      "If you notice a broken or suspicious link, please let us know through our GitHub repository.",
    ],
  },
  {
    question: "Can I contribute new workflows?",
    answer: [
      "Yes! Cleanup Helper is open source and welcomes contributions. If you have a cleanup task or workflow idea that would benefit others, you can contribute through our GitHub repository.",
      "To add a new workflow, you'll need to define the workflow structure (title, description, steps, external links) and add it to the workflow registry. Each step should include clear instructions and relevant links to official opt-out or settings pages.",
      "We also welcome suggestions for improving existing workflows, fixing outdated links, and adding new glossary terms.",
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <li className="text-neutral-300 font-medium">FAQ</li>
          </ol>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Frequently Asked Questions</h1>
          <p className="text-neutral-400">
            Everything you need to know about Cleanup Helper.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden glow-hover"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-700/30 transition-colors"
                >
                  <span className="text-base font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-sm transition-transform text-neutral-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
                      {faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
