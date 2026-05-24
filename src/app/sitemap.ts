import { MetadataRoute } from "next";

const WORKFLOW_SLUGS = [
  "data-broker-optout",
  "google-search-removal",
  "forgotten-accounts",
  "hibp-guide",
  "google-tracking-optout",
  "social-post-cleanup",
  "leak-prevention",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cleanup-helper.app";

  const routes = [
    { path: "", priority: 1, frequency: "weekly" as const },
    { path: "/dashboard", priority: 0.9, frequency: "weekly" as const },
    { path: "/settings", priority: 0.7, frequency: "monthly" as const },
    { path: "/privacy", priority: 0.5, frequency: "yearly" as const },
    { path: "/terms", priority: 0.5, frequency: "yearly" as const },
    { path: "/resources/glossary", priority: 0.8, frequency: "monthly" as const },
    { path: "/resources/faq", priority: 0.8, frequency: "monthly" as const },
    ...WORKFLOW_SLUGS.map((slug) => ({
      path: `/workflow/${slug}`,
      priority: 0.8,
      frequency: "monthly" as const,
    })),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}