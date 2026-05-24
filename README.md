# Cleanup Helper

**Take back control of your digital footprint.**

Cleanup Helper is a free, privacy-first tool that guides you step-by-step through cleaning up your online data, removing personal information from data brokers, and reducing your digital footprint.

## Features

- **7 guided workflows** covering every aspect of digital cleanup
- **Progress tracking** saved locally in your browser — no account needed
- **Zero data collection** — everything stays on your device
- **Mobile-friendly** responsive design
- **Open source** — transparent and auditable

## Workflows

| Workflow | Steps | Time |
|----------|-------|------|
| 🛡️ Data Broker Opt-Out | 8 | 4–8 hours |
| 🔍 Google Search Removal | 5 | 1–2 hours |
| 🗂️ Forgotten Account Cleanup | 6 | 2–4 hours |
| 🔐 Breach Checker & Security | 4 | 30–45 min |
| 📊 Google Tracking Opt-Out | 5 | 30–60 min |
| 📱 Social Media Cleanup | 6 | 1–2 hours |
| 🛡️ Future Leak Prevention | 5 | 30 min |

## Privacy

- No data is collected, stored, or transmitted
- All progress is saved in your browser's localStorage
- No analytics, cookies, or tracking
- No sign-up required

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Dashboard with progress
│   ├── workflow/[slug]/      # Individual workflow pages
│   ├── settings/page.tsx     # User settings
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   └── resources/
│       ├── glossary/page.tsx # Privacy glossary
│       └── faq/page.tsx      # Frequently asked questions
├── components/
│   └── layout/
│       ├── Header.tsx        # Navigation header
│       ├── Sidebar.tsx       # Workflow sidebar
│       └── Footer.tsx        # Page footer
└── lib/
    ├── storage/              # LocalStorage progress tracking
    └── workflows/            # Workflow definitions and registry
```

## License

MIT — see [LICENSE](LICENSE) for details.

## Contributing

Contributions welcome! Please open an issue or pull request on GitHub.

Ideas for new workflows, improved steps, or bug fixes are all appreciated.

---

Built with care for your privacy. 🛡️