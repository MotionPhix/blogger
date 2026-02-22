# Firstmark Advertising — Website

## Project Overview
- **Brand**: Firstmark Advertising
- **Goal**: Modern, sophisticated outdoor billboard advertising agency website
- **Primary Services**: Outdoor Billboard Advertising, Large Format Commercial Printing
- **Secondary Services**: Digital LED Screens, Street Furniture, Bus Shelters, Vehicle Branding

## Live Preview
- **Development URL**: https://3000-iajzgbdc81gd4pqi8ycs4-2e77fc33.sandbox.novita.ai/

## Country Context Switching
The website dynamically adapts its content, colors, contact info, and messaging based on the selected country:

| Country | URL | Theme Color | Office Location |
|---------|-----|-------------|-----------------|
| 🇲🇼 Malawi (HQ) | `/?country=MW` | `#E63946` (Red) | Area 3, Presidential Way, Lilongwe |
| 🇿🇲 Zambia | `/?country=ZM` | `#2D6A4F` (Green) | Cairo Road CBD, Lusaka |
| 🇿🇼 Zimbabwe | `/?country=ZW` | `#FF6B35` (Orange) | Samora Machel Avenue, Harare |

## Pages & Sections
- **Hero** — Animated, full-screen with floating billboard mockups, dynamic country-specific headline
- **Country Context Banner** — Persistent top banner showing active country + quick switcher
- **Services Grid** — 6 services with billboard advertising as featured card
- **About Firstmark** — Company story, 3-country footprint, key differentiators
- **Impact Numbers** — Animated counters (850+ sites, 1,900+ campaigns, 300+ brands, 15M+ impressions)
- **Locations** — 3 office cards with full address, phone, email, stats
- **Process** — 5-step campaign launch workflow
- **Clients & Testimonials** — 12 brand partners + 3 testimonials
- **Contact / Quote Form** — Pre-populated with active country data
- **Footer** — Full with social links, navigation, all 3 country contact details

## Tech Stack
- **Backend**: Hono (TypeScript) on Cloudflare Workers
- **Frontend**: Inline HTML/CSS/JS, Tailwind CDN, FontAwesome icons
- **Fonts**: Bebas Neue (display), Space Grotesk (body)
- **Deployment**: Cloudflare Pages

## Features
- ✅ Country-context switching (Malawi, Zambia, Zimbabwe)
- ✅ Dynamic color theming per country
- ✅ Animated hero with floating billboard mockups
- ✅ Scroll-triggered fade-up animations
- ✅ Animated number counters
- ✅ Responsive — mobile, tablet, desktop
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ WhatsApp sticky CTA button
- ✅ Marquee ticker bar
- ✅ Contact form with success state
- ✅ API endpoint at `/api/country/:code`

## Deployment
```bash
npm run build
npx wrangler pages deploy dist --project-name firstmark-advertising
```

## Local Development
```bash
npm run build
pm2 start ecosystem.config.cjs
```
