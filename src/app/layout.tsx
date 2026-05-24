import type { Metadata, Viewport } from "next";
import { ProgressProvider } from "@/lib/storage/progress-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e1a",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://cleanup-helper.app"
  ),
  title: {
    default: "Cleanup Helper — Remove Your Data from the Internet",
    template: "%s | Cleanup Helper",
  },
  description:
    "Free, privacy-first tool to clean up your digital footprint. Remove your personal info from 500+ data brokers, delete old accounts, and lock down your online presence. No sign-up required.",
  keywords: [
    "data broker opt-out",
    "remove personal info",
    "privacy cleanup",
    "delete online accounts",
    "digital footprint removal",
    "identity protection",
    "online privacy",
    "data removal",
    "privacy tools",
    "cleanup digital footprint",
  ],
  authors: [{ name: "Cleanup Helper" }],
  creator: "Cleanup Helper",
  publisher: "Cleanup Helper",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cleanup Helper",
    title: "Cleanup Helper — Remove Your Data from the Internet",
    description:
      "Free, privacy-first tool to clean up your digital footprint. No sign-up required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cleanup Helper - Digital Footprint Removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanup Helper — Remove Your Data from the Internet",
    description:
      "Free, privacy-first tool to clean up your digital footprint. No sign-up required.",
    images: ["/og-image.png"],
    creator: "@cleanuphelper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-neutral-100 antialiased min-h-screen flex flex-col">
        <ProgressProvider>
          <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ProgressProvider>
      </body>
    </html>
  );
}
