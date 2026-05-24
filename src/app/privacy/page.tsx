import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cleanup Helper's privacy policy. We don't collect, store, or transmit any personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/dashboard" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li className="text-neutral-500">/</li>
              <li className="text-neutral-300 font-medium">Privacy Policy</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white mb-2">Privacy Policy</h1>
            <p className="text-sm text-neutral-400">Last updated: May 24, 2026</p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-6 glow-hover">
            {/* Core principle */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Our Core Principle</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white">We don&apos;t collect, store, or transmit any personal data.</strong>{" "}
                Cleanup Helper is designed with privacy as its foundational principle. Unlike most
                web applications, we have no servers, no databases, no analytics, and no tracking.
                Everything happens entirely on your device.
              </p>
            </section>

            {/* What we don't do */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                What We Don&apos;t Do
              </h2>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-success-500 mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No data collection.</strong> We never
                    collect your name, email, IP address, browsing behavior, or any other
                    personally identifiable information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-500 mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No analytics.</strong> We don&apos;t use
                    Google Analytics, Mixpanel, Hotjar, or any other analytics or tracking tools.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-500 mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No cookies.</strong> We don&apos;t set
                    tracking cookies, advertising cookies, or analytics cookies. The only data
                    stored is your progress, saved locally in your browser.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-500 mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No third-party tracking.</strong> We don&apos;t
                    embed any third-party scripts, pixels, or beacons that could track your
                    activity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-500 mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No data sharing or selling.</strong> Since
                    we don&apos;t collect data, we have nothing to share or sell.
                  </span>
                </li>
              </ul>
            </section>

            {/* What we store */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                What We Store
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                The only data stored by Cleanup Helper is your workflow progress, and it is stored
                exclusively in your browser&apos;s <code className="bg-neutral-700/30 px-1.5 py-0.5 rounded text-xs text-neutral-300">localStorage</code>. This means:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Data stays on your device — it is never sent to any server or third party.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Progress data includes which steps you&apos;ve completed, workflow start times,
                    and your current position.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    You can export, import, or delete this data at any time from the Settings page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Clearing your browser data will remove your progress.
                  </span>
                </li>
              </ul>
            </section>

            {/* External links */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">External Links</h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                Cleanup Helper provides links to external websites as part of its guided workflows.
                These include official opt-out pages, account settings pages, and reputable security
                tools. When you click an external link:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    You will leave Cleanup Helper and enter a third-party website with its own
                    privacy policy and terms of service.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    We are not responsible for the privacy practices of these external sites.
                    Always review their privacy policies before providing personal information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    We do our best to link only to official, legitimate websites, but we recommend
                    verifying URLs in your browser&apos;s address bar.
                  </span>
                </li>
              </ul>
            </section>

            {/* Your rights */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                Since we don&apos;t collect personal data, the traditional data rights (access,
                deletion, portability) are not applicable. However, you always have the right to:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Export your progress data from the Settings page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Delete all your progress data from the Settings page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Clear your browser&apos;s localStorage to remove all stored data.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Use Cleanup Helper without creating an account or providing any personal
                    information.
                  </span>
                </li>
              </ul>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Changes to This Policy
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                If we ever change this privacy policy, we will update the &ldquo;Last updated&rdquo; date at
                the top of this page. Any changes to our data practices will be clearly communicated.
                Given our commitment to not collecting data, we do not anticipate changes that would
                affect your privacy.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-4 border-t border-white/5">
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                If you have questions about this privacy policy or our data practices, please reach
                out through our GitHub repository or contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
