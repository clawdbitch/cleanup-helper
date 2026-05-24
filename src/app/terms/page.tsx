import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cleanup Helper's terms of service. Informational guidance only — not legal advice.",
};

export default function TermsOfServicePage() {
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
              <li className="text-neutral-300 font-medium">Terms of Service</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white mb-2">Terms of Service</h1>
            <p className="text-sm text-neutral-400">Last updated: May 24, 2026</p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-6 glow-hover">
            {/* Introduction */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Introduction</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Welcome to Cleanup Helper. By using this application, you agree to these terms of
                service. Cleanup Helper is a free, open-source digital footprint cleanup tool that
                provides informational guidance to help you manage your online privacy.
              </p>
            </section>

            {/* Nature of the service */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Nature of the Service
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                Cleanup Helper provides step-by-step guidance and links to official opt-out pages
                and settings. It is an informational and educational tool, not a legal service or
                automated removal service. Specifically:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    We provide guidance and links — you perform the actual opt-out actions yourself.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    We do not interact with data brokers, websites, or services on your behalf.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    We do not guarantee that following our guidance will result in the removal of
                    your personal information from any service.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    We are not affiliated with any of the services or websites linked to in our
                    workflows.
                  </span>
                </li>
              </ul>
            </section>

            {/* Not legal advice */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Not Legal Advice
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white">Cleanup Helper does not provide legal advice.</strong>{" "}
                The information provided in this application is for educational and informational
                purposes only. It should not be construed as legal advice or a substitute for
                consulting with a qualified attorney. Privacy laws vary by jurisdiction, and we
                recommend consulting a legal professional for advice specific to your situation.
              </p>
            </section>

            {/* No warranty */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                No Warranty
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                <strong className="text-white">Cleanup Helper is provided &ldquo;as is&rdquo; without warranty of any kind.</strong>{" "}
                We make no representations or warranties, express or implied, including but not
                limited to:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    The accuracy, completeness, or timeliness of the information provided.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    The availability or correctness of external links.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    The effectiveness of the opt-out procedures described.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    That the application will be uninterrupted, secure, or error-free.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    That your personal information will be successfully removed from any service.
                  </span>
                </li>
              </ul>
            </section>

            {/* Use at your own risk */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Use at Your Own Risk
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white">You use Cleanup Helper at your own risk.</strong>{" "}
                We are not responsible for any direct, indirect, incidental, consequential, or
                punitive damages arising from your use of this application, including but not
                limited to: loss of data, failure to remove personal information, any actions taken
                by third parties as a result of following our guidance, or any consequences of
                visiting external websites linked from this application.
              </p>
            </section>

            {/* External links */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">External Links</h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                Cleanup Helper includes links to external websites as part of its workflows. These
                links are provided for convenience and informational purposes only.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    External links are <strong className="text-white">not endorsements</strong> of
                    those websites or their services.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    We are not responsible for the content, privacy practices, or terms of service
                    of external websites.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-500 mt-0.5">⚠</span>
                  <span>
                    External websites may change their opt-out procedures, URLs, or availability at
                    any time. We try to keep links current but cannot guarantee they will always
                    work.
                  </span>
                </li>
              </ul>
            </section>

            {/* User responsibilities */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                User Responsibilities
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                By using Cleanup Helper, you agree to:
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Use the application only for lawful purposes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Follow the official opt-out procedures provided by each service.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Verify the legitimacy of external websites before providing personal
                    information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>
                    Understand that opt-out processes may take time and results may vary.
                  </span>
                </li>
              </ul>
            </section>

            {/* Intellectual property */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Intellectual Property
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The content, design, and code of Cleanup Helper are provided under the project&apos;s
                open-source license. Third-party trademarks, logos, and service names mentioned in
                this application belong to their respective owners and are used for identification
                purposes only.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Changes to These Terms
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We may update these terms of service from time to time. Changes will be reflected
                by updating the &ldquo;Last updated&rdquo; date at the top of this page. Your continued
                use of Cleanup Helper after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-4 border-t border-white/5">
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                If you have questions about these terms of service, please reach out through our
                GitHub repository or contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
