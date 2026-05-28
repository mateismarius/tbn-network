# TBN Network — Website

Presentation website for TBN Network, DevOps & Networking services, UK market.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Google Fonts: Exo 2 + DM Sans

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy
4. Add your domain `tbnnetwork.co.uk` in Project Settings → Domains

## Project Structure

```
tbn-network/
├── app/
│   ├── globals.css
│   ├── layout.js       ← fonts + metadata + SEO
│   └── page.jsx        ← main page
├── components/
│   ├── Navbar.jsx
│   ├── Logo.jsx
│   ├── Hero.jsx        ← terminal animation
│   ├── Stats.jsx
│   ├── Services.jsx
│   ├── Technology.jsx
│   ├── WhyTBN.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Customisation

- **Company number**: update in `Footer.jsx`
- **Email**: update `hello@tbnnetwork.co.uk` in `CTA.jsx` and `Footer.jsx`
- **Colors**: accent is `#A3E635` — change globally with find & replace
- **Stats**: update numbers in `Stats.jsx`
- **SEO metadata**: update in `app/layout.js`
