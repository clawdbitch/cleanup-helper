import { Workflow } from "./types";

// Step content for data broker opt-out
const dataBrokerSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Identify the people-search sites with your info",
    description: "We'll walk through the most common data broker sites. For each one, you'll search to see if your information is listed, then follow the opt-out instructions.",
    externalLinks: [
      { label: "USBackgroundChecks.com", url: "https://www.usbackgroundchecks.com/opt-out", description: "Opt-out page" },
      { label: "PeopleFinders.com", url: "https://www.peoplefinders.com/opt-out", description: "Opt-out page" },
    ],
    estimatedDuration: "15 minutes",
  },
  {
    id: "step-2",
    title: "Opt out of WhitePages.com",
    description: "WhitePages is one of the largest people-search sites. Visit their opt-out page and enter your name and the pages where your info appears.",
    externalLinks: [
      { label: "WhitePages Opt-Out", url: "https://www.whitepages.com/opt-out" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-3",
    title: "Remove your info from Spokeo",
    description: "Spokeo aggregates public records into people-search profiles. Use their removal form to request removal.",
    externalLinks: [
      { label: "Spokeo Opt-Out", url: "https://www.spokeo.com/opt-out" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-4",
    title: "Opt out of BeenVerified",
    description: "BeenVerified provides background check services. Their opt-out process requires filling out a form with your details.",
    externalLinks: [
      { label: "BeenVerified Opt-Out", url: "https://www.beenverified.com/opt-out" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-5",
    title: "Remove your info from Intelius",
    description: "Intelius compiles background information from public records. Follow their removal process to have your data removed.",
    externalLinks: [
      { label: "Intelius Opt-Out", url: "https://www.intelius.com/opt-out" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-6",
    title: "Opt out of TruePeopleSearch",
    description: "TruePeopleSearch is a free people-search site. Their opt-out is straightforward — enter your full URL from their site.",
    externalLinks: [
      { label: "TruePeopleSearch Opt-Out", url: "https://www.truepeoplesearch.com/optout" },
    ],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-7",
    title: "Remove your info from Vero",
    description: "Vero is a newer people-search platform. Visit their opt-out page and submit a removal request.",
    externalLinks: [
      { label: "Vero Opt-Out", url: "https://www.vero.co/opt-out" },
    ],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-8",
    title: "Monitor for recurring listings",
    description: "Data brokers frequently re-collect information. Set a calendar reminder to check these sites every 3–6 months. Consider using a service like DeleteMe if you want ongoing monitoring (paid).",
    warnings: ["Some sites may reappear after a few months. This is normal.", "Free opt-outs may take 2–4 weeks to process."],
    estimatedDuration: "5 minutes",
  },
];

// Step content for Google search removal
const googleSearchSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Search your name on Google",
    description: "Start by searching your full name (and variations) on Google. Note down the URLs that show up — these are the pages you may want to remove.",
    warnings: ["Be honest with yourself — only flag pages you're uncomfortable with.", "Consider searching from an incognito window for unlogged-in results."],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-2",
    title: "Remove content you control",
    description: "For results on sites you control (old blogs, social media profiles, portfolio sites), log in and delete or make them private.",
    externalLinks: [
      { label: "Google Account Activity Controls", url: "https://myaccount.google.com/activitycontrols" },
    ],
    estimatedDuration: "15 minutes",
  },
  {
    id: "step-3",
    title: "Request removal of personal info from Google results",
    description: "Google offers a tool to request removal of sensitive personal information like email addresses, phone numbers, and mailing addresses from their search results.",
    externalLinks: [
      { label: "Remove Personal Info Tool", url: "https://search.google.com/search-console/remove-personal-info" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-4",
    title: "Request removal of address information",
    description: "If your home address appears in Google results, you can request removal using Google's dedicated form.",
    externalLinks: [
      { label: "Remove Address Info", url: "https://search.google.com/search-console/remove-address-info" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-5",
    title: "Ask the original website to remove the content",
    description: "For pages you don't control (news articles, blog posts, forum comments), contact the site owner or administrator and request removal. Be polite and specific about what content you want removed.",
    estimatedDuration: "20 minutes",
  },
];

// Step content for forgotten accounts
const forgottenAccountsSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Check your email for account registrations",
    description: "Search your email inbox for keywords like 'welcome', 'verify', 'signup', 'confirm your account', and 'subscription'. These often reveal accounts you've created and forgotten about.",
    warnings: ["Be thorough — try different search terms.", "Check multiple email addresses if you use more than one."],
    estimatedDuration: "20 minutes",
  },
  {
    id: "step-2",
    title: "Use a password manager to list accounts",
    description: "If you use a password manager, export or view your saved logins. This gives you a comprehensive list of every site you've registered for.",
    externalLinks: [
      { label: "Bitwarden Export", url: "https://bitwarden.com/help/article/export-data/" },
      { label: "1Password Export Guide", url: "https://support.1password.com/export-guide/" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-3",
    title: "Check Google and Apple account activity",
    description: "Review apps connected to your Google and Apple accounts. Many apps you signed in with 'Continue with Google/Apple' won't show up in your email search.",
    externalLinks: [
      { label: "Google Account Permissions", url: "https://myaccount.google.com/permissions" },
      { label: "Apple Sign-In Management", url: "https://appleid.apple.com/account/manage" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-4",
    title: "Audit social media and streaming accounts",
    description: "Check for old social media profiles, dating app accounts, and streaming service subscriptions you no longer use.",
    estimatedDuration: "20 minutes",
  },
  {
    id: "step-5",
    title: "Close or deactivate unused accounts",
    description: "For each account you've identified that you no longer need: (1) back up any data you might want later, (2) request account closure, and (3) unsubscribe from marketing emails first.",
    warnings: ["Some sites make account closure hard to find — look for 'Delete Account' or 'Close Account' in settings.", "If a site won't let you delete your account, contact their support."],
    estimatedDuration: "30 minutes",
  },
  {
    id: "step-6",
    title: "Review and update your remaining accounts",
    description: "For accounts you're keeping, ensure they have unique passwords, 2FA is enabled, and contact info is current.",
    estimatedDuration: "15 minutes",
  },
];

// Step content for HIBP guide
const hibpSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Check Have I Been Pwned",
    description: "Visit Have I Been Pwned and enter your email address to see if it has appeared in any known data breaches. This is a free, read-only check.",
    externalLinks: [
      { label: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
    ],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-2",
    title: "Check your passwords against known breaches",
    description: "On the same site, use the 'Passwords' tab to see if any of your passwords have been exposed. Never enter your actual password — use the comparison tool they provide.",
    externalLinks: [
      { label: "Password Breach Check", url: "https://haveibeenpwned.com/Passwords" },
    ],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-3",
    title: "Change passwords for affected accounts",
    description: "For any account listed in a breach, change the password immediately. Use a unique password for each account.",
    warnings: ["If you reuse passwords across sites, change ALL of them — attackers will try breached passwords on other sites."],
    estimatedDuration: "20 minutes",
  },
  {
    id: "step-4",
    title: "Enable two-factor authentication",
    description: "For any account that supports it, turn on 2FA (two-factor authentication). This adds an extra layer of protection even if your password is compromised.",
    externalLinks: [
      { label: "How 2FA Works", url: "https://authy.com/how-it-works/" },
    ],
    estimatedDuration: "15 minutes",
  },
];

// Step content for Google tracking opt-out
const googleTrackingSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Review your Google Activity controls",
    description: "Google collects a significant amount of data including search history, location history, YouTube watching history, and app activity. Start by reviewing what's stored.",
    externalLinks: [
      { label: "Google Activity Controls", url: "https://myaccount.google.com/activitycontrols" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-2",
    title: "Delete your Web & App Activity",
    description: "Go to myactivity.google.com and delete your web and app activity. You can filter by date range to keep recent history while removing older data.",
    externalLinks: [
      { label: "Manage My Activity", url: "https://myactivity.google.com/" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-3",
    title: "Turn off Location History",
    description: "If you have Google Location History enabled, turn it off and delete past location data.",
    externalLinks: [
      { label: "Location History Settings", url: "https://maps.google.com/locationhistory" },
    ],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-4",
    title: "Review YouTube watch and search history",
    description: "YouTube tracks what you watch and search for. Review and delete this data to prevent personalized profiling.",
    externalLinks: [
      { label: "YouTube History Controls", url: "https://myaccount.google.com/YouTube-history" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-5",
    title: "Manage ad personalization",
    description: "Turn off ad personalization in your Google Account settings. This won't stop ads — it just means they won't be tailored to your interests.",
    externalLinks: [
      { label: "Ad Settings", url: "https://adssettings.google.com/" },
    ],
    estimatedDuration: "5 minutes",
  },
];

// Step content for social media post cleanup
const socialPostSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Audit your Facebook posts and photos",
    description: "Go to your Activity Log on Facebook and review posts, photos, and comments from the past few years. Delete or hide anything you'd rather not be public.",
    externalLinks: [
      { label: "Facebook Activity Log", url: "https://www.facebook.com/settings?tab=activity_log" },
    ],
    estimatedDuration: "30 minutes",
  },
  {
    id: "step-2",
    title: "Review tag settings",
    description: "Adjust your Facebook tagging settings so you can review tags before they appear on your profile. This prevents others from associating content with you.",
    externalLinks: [
      { label: "Facebook Timeline Settings", url: "https://www.facebook.com/settings?tab=timeline" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-3",
    title: "Clean up your Twitter/X history",
    description: "Scroll through your tweets and delete any that no longer represent you. You can also download your archive for a complete view.",
    externalLinks: [
      { label: "Download Your Twitter Data", url: "https://help.twitter.com/en/managing-your-account/download-a-archive-of-your-twitter-data" },
    ],
    estimatedDuration: "20 minutes",
  },
  {
    id: "step-4",
    title: "Review Instagram content",
    description: "Go through your Instagram photos and stories highlights. Delete or archive content you no longer want visible.",
    externalLinks: [
      { label: "Instagram Archived Stories", url: "https://help.instagram.com/477434575606879" },
    ],
    estimatedDuration: "15 minutes",
  },
  {
    id: "step-5",
    title: "Check LinkedIn recommendations and endorsements",
    description: "Review recommendations you've given and received, and endorsements for your skills. Remove anything that's no longer relevant.",
    externalLinks: [
      { label: "LinkedIn Settings", url: "https://www.linkedin.com/psettings/" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-6",
    title: "Set social media profiles to private",
    description: "For accounts you're keeping, switch to private profiles where possible. This limits who can see your content and activity.",
    estimatedDuration: "15 minutes",
  },
];

// Step content for future leak prevention
const leakPreventionSteps: Workflow["steps"] = [
  {
    id: "step-1",
    title: "Use a password manager",
    description: "A password manager generates and stores unique passwords for every site. This prevents a breach on one site from affecting your others.",
    externalLinks: [
      { label: "Bitwarden (free)", url: "https://bitwarden.com/" },
      { label: "1Password (paid)", url: "https://1password.com/" },
    ],
    estimatedDuration: "15 minutes",
  },
  {
    id: "step-2",
    title: "Enable two-factor authentication everywhere",
    description: "Turn on 2FA for every account that supports it. Prefer an authenticator app over SMS-based verification.",
    externalLinks: [
      { label: "Authy (2FA app)", url: "https://authy.com/" },
      { label: "Google Authenticator", url: "https://www.google.com/authenticator/" },
    ],
    estimatedDuration: "20 minutes",
  },
  {
    id: "step-3",
    title: "Use email aliases for sign-ups",
    description: "Create separate email addresses for different services. If one gets spammed or breached, you can disable just that alias without affecting your main email.",
    externalLinks: [
      { label: "SimpleLogin (email aliases)", url: "https://simplelogin.io/" },
      { label: "Apple Hide My Email", url: "https://www.icloud.com/private-mail/" },
    ],
    estimatedDuration: "10 minutes",
  },
  {
    id: "step-4",
    title: "Opt out of data brokers regularly",
    description: "Set a recurring reminder to check data broker opt-out status every 6 months. Use the steps from the 'Data Broker Opt-Out' workflow as a reference.",
    warnings: ["Data brokers re-collect information periodically, so one-time opt-outs won't last forever."],
    estimatedDuration: "5 minutes",
  },
  {
    id: "step-5",
    title: "Monitor your accounts for breaches",
    description: "Sign up for alerts from Have I Been Pwned so you're notified if your email appears in a new breach. Check your credit reports annually.",
    externalLinks: [
      { label: "HIBP Breach Notifications", url: "https://haveibeenpwned.com/account-verification" },
      { label: "Annual Credit Reports (US)", url: "https://www.annualcreditreport.com/" },
    ],
    estimatedDuration: "5 minutes",
  },
];

export const workflows: Workflow[] = [
  {
    slug: "data-broker-optout",
    title: "Data Broker Opt-Out",
    description: "Remove your personal information from people-search sites and data brokers that sell your data.",
    category: "Identity Protection",
    difficulty: "complex",
    estimatedTime: "4–8 hours",
    icon: "🛡️",
    steps: dataBrokerSteps,
  },
  {
    slug: "google-search-removal",
    title: "Google Search Removal",
    description: "Remove personal information and embarrassing results from Google search.",
    category: "Privacy",
    difficulty: "moderate",
    estimatedTime: "1–2 hours",
    icon: "🔍",
    steps: googleSearchSteps,
  },
  {
    slug: "forgotten-accounts",
    title: "Forgotten Account Cleanup",
    description: "Find and close accounts you no longer use to reduce your digital footprint.",
    category: "Account Hygiene",
    difficulty: "complex",
    estimatedTime: "2–4 hours",
    icon: "🗂️",
    steps: forgottenAccountsSteps,
  },
  {
    slug: "hibp-guide",
    title: "Breach Checker & Security",
    description: "Check if your data has been breached and strengthen your account security.",
    category: "Security",
    difficulty: "easy",
    estimatedTime: "30–45 min",
    icon: "🔐",
    steps: hibpSteps,
  },
  {
    slug: "google-tracking-optout",
    title: "Google Tracking Opt-Out",
    description: "Reduce the amount of data Google collects about your activity.",
    category: "Privacy",
    difficulty: "moderate",
    estimatedTime: "30–60 min",
    icon: "📊",
    steps: googleTrackingSteps,
  },
  {
    slug: "social-post-cleanup",
    title: "Social Media Cleanup",
    description: "Clean up old posts, photos, and profiles across social media platforms.",
    category: "Social",
    difficulty: "moderate",
    estimatedTime: "1–2 hours",
    icon: "📱",
    steps: socialPostSteps,
  },
  {
    slug: "leak-prevention",
    title: "Future Leak Prevention",
    description: "Set up habits and tools to protect your data going forward.",
    category: "Education",
    difficulty: "easy",
    estimatedTime: "30 min",
    icon: "🛡️",
    steps: leakPreventionSteps,
  },
];

export function getWorkflow(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getNextWorkflow(currentSlug: string): Workflow | undefined {
  const idx = workflows.findIndex((w) => w.slug === currentSlug);
  return idx >= 0 && idx < workflows.length - 1 ? workflows[idx + 1] : undefined;
}

export function getPrevWorkflow(currentSlug: string): Workflow | undefined {
  const idx = workflows.findIndex((w) => w.slug === currentSlug);
  return idx > 0 ? workflows[idx - 1] : undefined;
}
