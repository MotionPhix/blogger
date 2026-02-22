import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static assets
app.use('/static/*', serveStatic({ root: './' }))

// Main landing page
app.get('/', (c) => {
  const country = c.req.query('country') || 'MW'
  return c.html(renderPage(country))
})

// Country redirect
app.get('/country/:code', (c) => {
  const code = c.req.param('code').toUpperCase()
  return c.redirect(`/?country=${code}`)
})

// API: get country info
app.get('/api/country/:code', (c) => {
  const code = c.req.param('code').toUpperCase()
  const data = countryData[code as keyof typeof countryData]
  if (!data) return c.json({ error: 'Not found' }, 404)
  return c.json(data)
})

const countryData = {
  MW: {
    name: 'Malawi',
    flag: '🇲🇼',
    city: 'Lilongwe',
    tagline: 'Where It All Began',
    heroText: 'Commanding Attention Across Malawi',
    subText: 'From the shores of Lake Malawi to the heart of Lilongwe — Firstmark dominates the billboard landscape with 500+ premium outdoor sites nationwide.',
    color: '#E63946',
    accent: '#C1121F',
    phone: '+265 999 123 456',
    email: 'mw@firstmark.africa',
    address: 'Area 3, Presidential Way, Lilongwe, Malawi',
    mapLink: 'https://maps.google.com/?q=Lilongwe,Malawi',
    stats: [
      { value: '500+', label: 'Billboard Sites' },
      { value: '15+', label: 'Years Experience' },
      { value: '1,200+', label: 'Campaigns Delivered' },
      { value: '98%', label: 'Client Retention' }
    ]
  },
  ZM: {
    name: 'Zambia',
    flag: '🇿🇲',
    city: 'Lusaka',
    tagline: 'Expanding Horizons',
    heroText: 'Owning the Streets of Zambia',
    subText: 'From Cairo Road to the Copperbelt — Firstmark brings world-class outdoor advertising to Zambia\'s fastest growing markets with unrivalled reach.',
    color: '#2D6A4F',
    accent: '#1B4332',
    phone: '+260 977 123 456',
    email: 'zm@firstmark.africa',
    address: 'Cairo Road, Central Business District, Lusaka, Zambia',
    mapLink: 'https://maps.google.com/?q=Lusaka,Zambia',
    stats: [
      { value: '200+', label: 'Billboard Sites' },
      { value: '5+', label: 'Years in Zambia' },
      { value: '400+', label: 'Campaigns Delivered' },
      { value: '96%', label: 'Client Retention' }
    ]
  },
  ZW: {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    city: 'Harare',
    tagline: 'Making Bold Moves',
    heroText: 'Amplifying Brands Across Zimbabwe',
    subText: 'From Samora Machel Avenue to Bulawayo — Firstmark is Zimbabwe\'s trusted outdoor advertising partner, transforming urban spaces into powerful brand platforms.',
    color: '#FF6B35',
    accent: '#D4490A',
    phone: '+263 77 123 4567',
    email: 'zw@firstmark.africa',
    address: 'Samora Machel Avenue, Harare CBD, Zimbabwe',
    mapLink: 'https://maps.google.com/?q=Harare,Zimbabwe',
    stats: [
      { value: '150+', label: 'Billboard Sites' },
      { value: '3+', label: 'Years in Zimbabwe' },
      { value: '300+', label: 'Campaigns Delivered' },
      { value: '97%', label: 'Client Retention' }
    ]
  }
}

function renderPage(country: string): string {
  const c = countryData[country as keyof typeof countryData] || countryData.MW
  const otherCountries = Object.entries(countryData).filter(([k]) => k !== country)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Firstmark Advertising — ${c.name} | Billboard & Outdoor Advertising</title>
  <meta name="description" content="Firstmark is Africa's premier outdoor billboard advertising agency operating in Malawi, Zambia and Zimbabwe. 500+ premium sites, 15+ years of excellence." />
  <meta name="theme-color" content="${c.color}" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  
  <!-- Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />

  <style>
    /* ==================== CSS RESET & BASE ==================== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --brand: ${c.color};
      --brand-dark: ${c.accent};
      --brand-light: ${c.color}22;
      --black: #0A0A0A;
      --dark: #111111;
      --dark2: #1a1a1a;
      --dark3: #222222;
      --gray: #888888;
      --light-gray: #f5f5f5;
      --white: #FFFFFF;
      --radius: 12px;
      --radius-lg: 24px;
      --shadow: 0 4px 24px rgba(0,0,0,0.12);
      --shadow-lg: 0 12px 48px rgba(0,0,0,0.2);
      --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    html { scroll-behavior: smooth; font-size: 16px; }
    body {
      font-family: 'Space Grotesk', 'Inter', sans-serif;
      background: var(--dark);
      color: var(--white);
      overflow-x: hidden;
      line-height: 1.6;
    }
    img { max-width: 100%; display: block; }
    a { color: inherit; text-decoration: none; }
    ul { list-style: none; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }

    /* ==================== SCROLLBAR ==================== */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--dark); }
    ::-webkit-scrollbar-thumb { background: var(--brand); border-radius: 3px; }

    /* ==================== NAVBAR ==================== */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 0 5%;
      display: flex; align-items: center; justify-content: space-between;
      height: 72px;
      transition: all var(--transition);
      background: transparent;
    }
    #navbar.scrolled {
      background: rgba(10,10,10,0.96);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      box-shadow: 0 4px 32px rgba(0,0,0,0.4);
      height: 64px;
    }
    .nav-logo {
      display: flex; align-items: center; gap: 12px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      letter-spacing: 2px;
      color: var(--white);
    }
    .nav-logo .logo-mark {
      width: 40px; height: 40px;
      background: var(--brand);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; font-weight: 900;
      color: var(--white);
      font-family: 'Bebas Neue', sans-serif;
    }
    .nav-links {
      display: flex; align-items: center; gap: 36px;
    }
    .nav-links a {
      font-size: 13px; font-weight: 500;
      letter-spacing: 1px; text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      transition: color var(--transition);
      position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
      height: 2px; background: var(--brand);
      transform: scaleX(0); transition: transform var(--transition);
      transform-origin: right;
    }
    .nav-links a:hover { color: var(--white); }
    .nav-links a:hover::after { transform: scaleX(1); transform-origin: left; }
    
    /* Country Selector in Nav */
    .nav-country {
      display: flex; align-items: center; gap: 8px;
    }
    .country-pill {
      display: flex; align-items: center; gap: 6px;
      padding: 6px 14px;
      border-radius: 100px;
      font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
      transition: all var(--transition);
      cursor: pointer;
      text-transform: uppercase;
    }
    .country-pill.active {
      background: var(--brand);
      color: var(--white);
    }
    .country-pill:not(.active) {
      background: rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.6);
      border: 1px solid rgba(255,255,255,0.1);
    }
    .country-pill:not(.active):hover {
      background: rgba(255,255,255,0.14);
      color: var(--white);
    }
    .nav-cta {
      padding: 10px 22px;
      background: var(--brand);
      color: var(--white) !important;
      border-radius: 8px;
      font-size: 13px !important;
      font-weight: 600 !important;
      letter-spacing: 0.5px !important;
      transition: all var(--transition) !important;
    }
    .nav-cta:hover {
      background: var(--brand-dark) !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 16px ${c.color}55 !important;
    }
    .nav-cta::after { display: none !important; }
    
    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      padding: 8px; cursor: pointer;
    }
    .hamburger span {
      display: block; width: 24px; height: 2px;
      background: var(--white); border-radius: 2px;
      transition: all var(--transition);
    }
    
    /* ==================== MOBILE MENU ==================== */
    #mobile-menu {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: var(--black); z-index: 999;
      display: flex; flex-direction: column;
      padding: 100px 5% 40px;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    #mobile-menu.open { transform: translateX(0); }
    #mobile-menu a {
      font-size: 28px; font-weight: 700;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      color: var(--white);
      transition: color var(--transition);
    }
    #mobile-menu a:hover { color: var(--brand); }
    .mobile-countries {
      display: flex; gap: 10px; margin-top: 32px; flex-wrap: wrap;
    }

    /* ==================== HERO ==================== */
    #hero {
      min-height: 100vh;
      position: relative;
      display: flex; align-items: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%);
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image: 
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .hero-gradient {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 60% at 60% 50%, ${c.color}18 0%, transparent 70%);
    }
    .hero-noise {
      position: absolute; inset: 0; opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    }
    
    /* Floating billboard mockups */
    .hero-billboard-1, .hero-billboard-2, .hero-billboard-3 {
      position: absolute;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    .hero-billboard-1 {
      right: 5%; top: 15%;
      width: 300px; height: 180px;
      transform: perspective(800px) rotateY(-8deg) rotateX(3deg);
      background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
      animation: float1 6s ease-in-out infinite;
    }
    .hero-billboard-2 {
      right: 12%; top: 55%;
      width: 200px; height: 120px;
      transform: perspective(800px) rotateY(-6deg) rotateX(-2deg);
      background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
      border: 1px solid rgba(255,255,255,0.1);
      animation: float2 8s ease-in-out infinite;
    }
    .hero-billboard-3 {
      right: 22%; top: 25%;
      width: 160px; height: 96px;
      transform: perspective(800px) rotateY(-10deg);
      background: linear-gradient(135deg, #222 0%, #1a1a1a 100%);
      border: 1px solid ${c.color}44;
      animation: float3 7s ease-in-out infinite;
    }
    .billboard-inner {
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 16px; gap: 8px;
    }
    .billboard-text {
      font-family: 'Bebas Neue', sans-serif;
      color: var(--white); text-align: center;
    }
    
    @keyframes float1 {
      0%, 100% { transform: perspective(800px) rotateY(-8deg) rotateX(3deg) translateY(0); }
      50% { transform: perspective(800px) rotateY(-8deg) rotateX(3deg) translateY(-12px); }
    }
    @keyframes float2 {
      0%, 100% { transform: perspective(800px) rotateY(-6deg) rotateX(-2deg) translateY(0); }
      50% { transform: perspective(800px) rotateY(-6deg) rotateX(-2deg) translateY(-8px); }
    }
    @keyframes float3 {
      0%, 100% { transform: perspective(800px) rotateY(-10deg) translateY(0); }
      50% { transform: perspective(800px) rotateY(-10deg) translateY(-16px); }
    }
    
    .hero-content {
      position: relative; z-index: 2;
      width: 100%; max-width: 1400px;
      margin: 0 auto; padding: 0 5%;
      padding-top: 72px;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 16px;
      background: var(--brand-light);
      border: 1px solid ${c.color}44;
      border-radius: 100px;
      font-size: 12px; font-weight: 600;
      color: var(--brand);
      text-transform: uppercase; letter-spacing: 1px;
      margin-bottom: 24px;
      animation: fadeInUp 0.8s ease both;
    }
    .hero-badge .pulse {
      width: 8px; height: 8px;
      background: var(--brand); border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }
    
    .hero-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(52px, 8vw, 120px);
      line-height: 0.95;
      letter-spacing: 1px;
      margin-bottom: 8px;
      animation: fadeInUp 0.8s ease 0.1s both;
      max-width: 700px;
    }
    .hero-title .accent { color: var(--brand); }
    .hero-subtitle {
      font-size: clamp(18px, 2.5vw, 26px);
      color: rgba(255,255,255,0.5);
      font-weight: 300;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 24px;
      animation: fadeInUp 0.8s ease 0.2s both;
    }
    .hero-desc {
      max-width: 540px;
      font-size: 17px; line-height: 1.75;
      color: rgba(255,255,255,0.65);
      margin-bottom: 40px;
      animation: fadeInUp 0.8s ease 0.3s both;
    }
    .hero-actions {
      display: flex; gap: 16px; flex-wrap: wrap;
      margin-bottom: 64px;
      animation: fadeInUp 0.8s ease 0.4s both;
    }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 32px;
      background: var(--brand);
      color: var(--white);
      border-radius: 10px;
      font-size: 15px; font-weight: 600;
      letter-spacing: 0.5px;
      transition: all var(--transition);
      box-shadow: 0 4px 20px ${c.color}44;
    }
    .btn-primary:hover {
      background: var(--brand-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 32px ${c.color}55;
    }
    .btn-secondary {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 32px;
      background: rgba(255,255,255,0.07);
      color: var(--white);
      border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);
      font-size: 15px; font-weight: 600;
      letter-spacing: 0.5px;
      transition: all var(--transition);
    }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.12);
      border-color: rgba(255,255,255,0.2);
      transform: translateY(-2px);
    }
    
    /* Hero Stats Bar */
    .hero-stats {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: rgba(255,255,255,0.06);
      border-radius: 16px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.06);
      max-width: 700px;
      animation: fadeInUp 0.8s ease 0.5s both;
    }
    .hero-stat {
      padding: 20px 24px;
      background: rgba(255,255,255,0.03);
      transition: background var(--transition);
      text-align: center;
    }
    .hero-stat:hover { background: rgba(255,255,255,0.06); }
    .hero-stat .num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 36px; color: var(--brand);
      letter-spacing: 1px; line-height: 1;
    }
    .hero-stat .lbl {
      font-size: 11px; color: rgba(255,255,255,0.45);
      text-transform: uppercase; letter-spacing: 1px;
      margin-top: 4px; font-weight: 500;
    }

    /* ==================== COUNTRY CONTEXT BANNER ==================== */
    #country-banner {
      position: relative; z-index: 10;
      background: var(--brand);
      padding: 14px 5%;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }
    .banner-left {
      display: flex; align-items: center; gap: 12px;
    }
    .banner-flag {
      font-size: 24px; line-height: 1;
    }
    .banner-text {
      font-size: 14px; font-weight: 600;
      color: var(--white);
    }
    .banner-text span { opacity: 0.8; font-weight: 400; }
    .banner-switcher {
      display: flex; gap: 8px; align-items: center;
    }
    .banner-country-btn {
      display: flex; align-items: center; gap: 6px;
      padding: 6px 14px;
      border-radius: 100px;
      font-size: 12px; font-weight: 600;
      cursor: pointer; transition: all var(--transition);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--white);
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .banner-country-btn:hover { background: rgba(255,255,255,0.2); }
    .banner-country-btn.current { background: rgba(255,255,255,0.25); border-color: transparent; }

    /* ==================== SECTION BASE ==================== */
    section { padding: 100px 5%; }
    .section-inner { max-width: 1400px; margin: 0 auto; }
    .section-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 14px;
      background: var(--brand-light);
      border: 1px solid ${c.color}33;
      border-radius: 100px;
      font-size: 11px; font-weight: 700;
      color: var(--brand);
      text-transform: uppercase; letter-spacing: 1.5px;
      margin-bottom: 16px;
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(36px, 5vw, 64px);
      line-height: 1; letter-spacing: 1px;
      margin-bottom: 16px;
    }
    .section-title .accent { color: var(--brand); }
    .section-desc {
      font-size: 16px; line-height: 1.75;
      color: rgba(255,255,255,0.55);
      max-width: 560px;
    }
    .section-header { margin-bottom: 64px; }

    /* ==================== TICKER / MARQUEE ==================== */
    #ticker {
      background: var(--dark2);
      border-top: 1px solid rgba(255,255,255,0.04);
      border-bottom: 1px solid rgba(255,255,255,0.04);
      padding: 16px 0; overflow: hidden;
    }
    .ticker-track {
      display: flex; gap: 48px;
      animation: marquee 25s linear infinite;
      white-space: nowrap;
      width: max-content;
    }
    .ticker-item {
      display: flex; align-items: center; gap: 12px;
      font-size: 12px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 2px;
      color: rgba(255,255,255,0.4);
    }
    .ticker-item .dot { color: var(--brand); font-size: 18px; }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ==================== SERVICES ==================== */
    #services { background: var(--dark); }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
      background: rgba(255,255,255,0.04);
      border-radius: 20px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.04);
    }
    .service-card {
      background: var(--dark2);
      padding: 44px 36px;
      position: relative; overflow: hidden;
      transition: all var(--transition);
      cursor: default;
    }
    .service-card::before {
      content: ''; position: absolute;
      top: 0; left: 0; right: 0; height: 3px;
      background: var(--brand);
      transform: scaleX(0); transition: transform var(--transition);
      transform-origin: left;
    }
    .service-card:hover { background: #1e1e1e; }
    .service-card:hover::before { transform: scaleX(1); }
    .service-icon {
      width: 56px; height: 56px;
      background: var(--brand-light);
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; color: var(--brand);
      margin-bottom: 24px;
      transition: all var(--transition);
    }
    .service-card:hover .service-icon {
      background: var(--brand);
      color: var(--white);
      transform: scale(1.05);
    }
    .service-name {
      font-size: 20px; font-weight: 700;
      margin-bottom: 12px;
      letter-spacing: -0.3px;
    }
    .service-desc {
      font-size: 14px; line-height: 1.7;
      color: rgba(255,255,255,0.5);
      margin-bottom: 24px;
    }
    .service-tag {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px;
      background: rgba(255,255,255,0.05);
      border-radius: 100px;
      font-size: 11px; font-weight: 600;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .service-tag.featured {
      background: var(--brand-light);
      color: var(--brand);
    }
    .service-number {
      position: absolute; top: 24px; right: 24px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 64px; color: rgba(255,255,255,0.03);
      line-height: 1; transition: color var(--transition);
    }
    .service-card:hover .service-number { color: ${c.color}10; }
    
    /* Feature service card */
    .service-card.featured-service {
      grid-column: span 2;
      background: linear-gradient(135deg, ${c.color}14 0%, ${c.color}06 100%);
      border: 1px solid ${c.color}22;
    }
    .service-card.featured-service:hover { background: linear-gradient(135deg, ${c.color}20 0%, ${c.color}10 100%); }
    .service-card.featured-service::before { background: linear-gradient(90deg, var(--brand), var(--brand-dark)); }

    /* ==================== ABOUT / WHY US ==================== */
    #about { background: var(--black); }
    .about-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: center;
    }
    .about-visual {
      position: relative;
    }
    .about-img-main {
      width: 100%; aspect-ratio: 4/3;
      background: var(--dark2);
      border-radius: var(--radius-lg);
      overflow: hidden;
      position: relative;
    }
    .about-img-bg {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, ${c.color}22 0%, ${c.color}06 100%);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 16px;
    }
    .about-big-icon {
      font-size: 80px; color: var(--brand); opacity: 0.8;
    }
    .about-img-label {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px; letter-spacing: 2px;
      color: rgba(255,255,255,0.3);
    }
    .about-badge-float {
      position: absolute;
      bottom: -20px; right: -20px;
      background: var(--brand);
      border-radius: 16px; padding: 20px 24px;
      text-align: center;
      box-shadow: 0 8px 32px ${c.color}44;
    }
    .about-badge-float .num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 42px; line-height: 1; color: var(--white);
    }
    .about-badge-float .lbl {
      font-size: 12px; color: rgba(255,255,255,0.8);
      text-transform: uppercase; letter-spacing: 1px; font-weight: 600;
    }
    .about-badge-float2 {
      position: absolute;
      top: -20px; left: -20px;
      background: var(--dark3);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px; padding: 16px 20px;
      display: flex; align-items: center; gap: 12px;
      box-shadow: var(--shadow);
    }
    .about-badge-float2 .ico { font-size: 28px; color: var(--brand); }
    .about-badge-float2 .txt .top { font-size: 13px; font-weight: 700; }
    .about-badge-float2 .txt .btm { font-size: 11px; color: rgba(255,255,255,0.4); }
    
    .about-features { display: flex; flex-direction: column; gap: 24px; margin-top: 32px; }
    .about-feature {
      display: flex; gap: 16px; align-items: flex-start;
      padding: 20px;
      background: var(--dark2);
      border-radius: var(--radius);
      border: 1px solid rgba(255,255,255,0.04);
      transition: all var(--transition);
    }
    .about-feature:hover {
      border-color: ${c.color}33;
      background: ${c.color}08;
    }
    .about-feature-icon {
      width: 40px; height: 40px; flex-shrink: 0;
      background: var(--brand-light);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; color: var(--brand);
    }
    .about-feature h4 { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
    .about-feature p { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.6; }

    /* ==================== COUNTRIES / LOCATIONS ==================== */
    #locations { background: var(--dark); }
    .locations-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    }
    .location-card {
      background: var(--dark2);
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.04);
      transition: all var(--transition);
      position: relative;
    }
    .location-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 64px rgba(0,0,0,0.3);
      border-color: rgba(255,255,255,0.1);
    }
    .location-card.active-country {
      border-color: var(--brand);
      box-shadow: 0 0 0 1px var(--brand), 0 12px 40px ${c.color}22;
    }
    .location-header {
      padding: 32px; position: relative;
    }
    .location-flag-big { font-size: 48px; margin-bottom: 16px; line-height: 1; }
    .location-country {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px; letter-spacing: 1px;
    }
    .location-city { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 500; margin-top: 4px; }
    .location-tag {
      position: absolute; top: 24px; right: 24px;
      padding: 4px 12px;
      border-radius: 100px;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .location-tag.origin { background: var(--brand-light); color: var(--brand); }
    .location-tag.new { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1); }
    .location-body { padding: 0 32px 32px; }
    .location-info { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .location-info-row {
      display: flex; gap: 12px; align-items: flex-start;
      font-size: 13px; color: rgba(255,255,255,0.55);
    }
    .location-info-row i { color: var(--brand); width: 16px; flex-shrink: 0; margin-top: 2px; }
    .location-stats {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
      margin-top: 24px; padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .loc-stat .n {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: var(--brand);
    }
    .loc-stat .l { font-size: 11px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.5px; }
    .location-btn {
      display: flex; align-items: center; gap: 8px;
      width: 100%; padding: 12px 20px;
      background: rgba(255,255,255,0.04);
      border-radius: 8px; margin-top: 16px;
      font-size: 13px; font-weight: 600;
      color: rgba(255,255,255,0.6);
      transition: all var(--transition);
      border: 1px solid rgba(255,255,255,0.06);
    }
    .location-btn:hover { background: var(--brand); color: var(--white); border-color: transparent; }

    /* ==================== PROCESS ==================== */
    #process {
      background: var(--black);
      position: relative; overflow: hidden;
    }
    .process-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 60% at 80% 50%, ${c.color}0A 0%, transparent 70%);
    }
    .process-steps {
      display: grid; grid-template-columns: repeat(5, 1fr); gap: 0;
      position: relative;
    }
    .process-steps::before {
      content: ''; position: absolute;
      top: 36px; left: 10%; right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, ${c.color}44, transparent);
    }
    .process-step {
      display: flex; flex-direction: column; align-items: center;
      text-align: center; padding: 0 16px;
    }
    .step-number {
      width: 72px; height: 72px;
      background: var(--dark2);
      border: 2px solid rgba(255,255,255,0.08);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: rgba(255,255,255,0.3);
      margin-bottom: 20px;
      transition: all var(--transition);
      position: relative; z-index: 1;
    }
    .process-step:hover .step-number {
      background: var(--brand);
      border-color: var(--brand);
      color: var(--white);
    }
    .step-title { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
    .step-desc { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; }
    .step-icon { font-size: 18px; color: var(--brand); margin-bottom: 8px; }

    /* ==================== IMPACT / NUMBERS ==================== */
    #impact {
      background: var(--brand);
      padding: 80px 5%;
      position: relative; overflow: hidden;
    }
    .impact-bg {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%);
    }
    .impact-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
      max-width: 1400px; margin: 0 auto;
      background: rgba(0,0,0,0.1);
      border-radius: var(--radius-lg); overflow: hidden;
    }
    .impact-item {
      padding: 48px 32px; text-align: center;
      background: rgba(0,0,0,0.05);
      transition: background var(--transition);
    }
    .impact-item:hover { background: rgba(0,0,0,0.12); }
    .impact-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 72px; line-height: 1;
      color: var(--white);
      letter-spacing: 2px;
    }
    .impact-label {
      font-size: 13px; font-weight: 600;
      color: rgba(255,255,255,0.7);
      text-transform: uppercase; letter-spacing: 1.5px;
      margin-top: 8px;
    }
    .impact-sub {
      font-size: 12px; color: rgba(255,255,255,0.45);
      margin-top: 4px;
    }

    /* ==================== CLIENTS / TRUST ==================== */
    #trust { background: var(--dark); }
    .trust-header {
      text-align: center; margin-bottom: 56px;
    }
    .trust-logos {
      display: grid; grid-template-columns: repeat(6, 1fr); gap: 2px;
      background: rgba(255,255,255,0.04);
      border-radius: var(--radius-lg); overflow: hidden;
      border: 1px solid rgba(255,255,255,0.04);
    }
    .trust-logo {
      background: var(--dark2); padding: 28px 20px;
      display: flex; align-items: center; justify-content: center;
      transition: background var(--transition);
    }
    .trust-logo:hover { background: #1e1e1e; }
    .trust-logo-inner {
      font-size: 13px; font-weight: 700;
      color: rgba(255,255,255,0.2);
      text-transform: uppercase; letter-spacing: 2px;
      text-align: center; transition: color var(--transition);
      font-family: 'Bebas Neue', sans-serif;
      font-size: 16px;
    }
    .trust-logo:hover .trust-logo-inner { color: rgba(255,255,255,0.5); }
    
    .trust-testimonials {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
      margin-top: 64px;
    }
    .testimonial {
      background: var(--dark2);
      border-radius: var(--radius-lg);
      padding: 32px;
      border: 1px solid rgba(255,255,255,0.04);
      transition: all var(--transition);
      position: relative;
    }
    .testimonial:hover {
      border-color: ${c.color}33;
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0,0,0,0.2);
    }
    .testimonial-quote {
      font-size: 32px; color: var(--brand); line-height: 1;
      margin-bottom: 16px; font-family: Georgia, serif;
    }
    .testimonial-text {
      font-size: 14px; line-height: 1.75;
      color: rgba(255,255,255,0.6);
      margin-bottom: 24px;
      font-style: italic;
    }
    .testimonial-author {
      display: flex; align-items: center; gap: 12px;
    }
    .testimonial-avatar {
      width: 40px; height: 40px;
      background: var(--brand);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 700; color: var(--white);
      font-family: 'Bebas Neue', sans-serif;
    }
    .testimonial-name { font-size: 13px; font-weight: 700; }
    .testimonial-role { font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 2px; }
    .testimonial-stars {
      position: absolute; top: 24px; right: 24px;
      color: #FFB800; font-size: 12px;
    }

    /* ==================== CONTACT CTA ==================== */
    #contact {
      background: var(--black);
      position: relative; overflow: hidden;
    }
    .contact-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 80% at 50% 50%, ${c.color}0D 0%, transparent 70%);
    }
    .contact-inner {
      max-width: 1400px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: start; position: relative; z-index: 1;
    }
    .contact-left h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 5vw, 72px);
      line-height: 1; letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .contact-left h2 .accent { color: var(--brand); }
    .contact-left p {
      font-size: 16px; color: rgba(255,255,255,0.55);
      line-height: 1.75; margin-bottom: 40px;
    }
    .contact-details { display: flex; flex-direction: column; gap: 20px; }
    .contact-detail {
      display: flex; gap: 16px; align-items: center;
    }
    .contact-detail-icon {
      width: 48px; height: 48px; flex-shrink: 0;
      background: var(--brand-light);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; color: var(--brand);
    }
    .contact-detail h4 { font-size: 12px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .contact-detail p { font-size: 14px; font-weight: 600; }
    
    .contact-form {
      background: var(--dark2);
      border-radius: var(--radius-lg); padding: 40px;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .form-title {
      font-size: 20px; font-weight: 700;
      margin-bottom: 28px;
    }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-group { margin-bottom: 16px; }
    .form-group label {
      display: block; font-size: 12px; font-weight: 600;
      color: rgba(255,255,255,0.4); text-transform: uppercase;
      letter-spacing: 0.5px; margin-bottom: 8px;
    }
    .form-group input, .form-group select, .form-group textarea {
      width: 100%; padding: 14px 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px; color: var(--white);
      font-family: inherit; font-size: 14px;
      transition: all var(--transition);
      outline: none;
      appearance: none;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
      border-color: var(--brand);
      background: rgba(255,255,255,0.07);
      box-shadow: 0 0 0 3px ${c.color}22;
    }
    .form-group textarea { resize: vertical; min-height: 100px; }
    .form-group select option { background: var(--dark2); }
    .form-submit {
      width: 100%; padding: 16px;
      background: var(--brand); color: var(--white);
      border-radius: 10px; font-size: 15px; font-weight: 700;
      letter-spacing: 0.5px;
      transition: all var(--transition);
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .form-submit:hover {
      background: var(--brand-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${c.color}44;
    }

    /* ==================== FOOTER ==================== */
    footer {
      background: var(--black);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 64px 5% 40px;
    }
    .footer-inner { max-width: 1400px; margin: 0 auto; }
    .footer-top {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
      margin-bottom: 48px;
    }
    .footer-brand .logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px; letter-spacing: 2px;
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 16px;
    }
    .footer-brand .logo .mark {
      width: 36px; height: 36px;
      background: var(--brand); border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; color: var(--white);
    }
    .footer-brand p {
      font-size: 13px; color: rgba(255,255,255,0.4);
      line-height: 1.7; max-width: 280px; margin-bottom: 24px;
    }
    .footer-socials { display: flex; gap: 10px; }
    .footer-social {
      width: 36px; height: 36px;
      background: rgba(255,255,255,0.05);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; color: rgba(255,255,255,0.4);
      transition: all var(--transition);
      border: 1px solid rgba(255,255,255,0.07);
    }
    .footer-social:hover { background: var(--brand); color: var(--white); border-color: transparent; }
    .footer-col h4 {
      font-size: 12px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 1.5px;
      color: rgba(255,255,255,0.35); margin-bottom: 20px;
    }
    .footer-col ul { display: flex; flex-direction: column; gap: 12px; }
    .footer-col ul li a {
      font-size: 13px; color: rgba(255,255,255,0.55);
      transition: color var(--transition);
    }
    .footer-col ul li a:hover { color: var(--white); }
    .footer-bottom {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.04);
      flex-wrap: wrap; gap: 16px;
    }
    .footer-bottom p { font-size: 12px; color: rgba(255,255,255,0.25); }
    .footer-countries { display: flex; gap: 16px; }
    .footer-country {
      font-size: 12px; color: rgba(255,255,255,0.3);
      transition: color var(--transition);
    }
    .footer-country:hover { color: var(--brand); }

    /* ==================== ANIMATIONS ==================== */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .fade-up {
      opacity: 0; transform: translateY(40px);
      transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-up.visible { opacity: 1; transform: translateY(0); }
    .fade-up-delay-1 { transition-delay: 0.1s; }
    .fade-up-delay-2 { transition-delay: 0.2s; }
    .fade-up-delay-3 { transition-delay: 0.3s; }
    .fade-up-delay-4 { transition-delay: 0.4s; }

    /* ==================== RESPONSIVE ==================== */
    @media (max-width: 1100px) {
      .services-grid { grid-template-columns: 1fr 1fr; }
      .service-card.featured-service { grid-column: span 2; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
      .process-steps { grid-template-columns: repeat(3, 1fr); gap: 32px; }
      .process-steps::before { display: none; }
    }
    @media (max-width: 900px) {
      section { padding: 72px 5%; }
      .about-grid { grid-template-columns: 1fr; gap: 48px; }
      .locations-grid { grid-template-columns: 1fr; gap: 20px; }
      .contact-inner { grid-template-columns: 1fr; gap: 40px; }
      .trust-logos { grid-template-columns: repeat(3, 1fr); }
      .trust-testimonials { grid-template-columns: 1fr; }
      .impact-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-country { display: none; }
      .hamburger { display: flex; }
      .hero-billboard-1, .hero-billboard-2, .hero-billboard-3 { display: none; }
      .services-grid { grid-template-columns: 1fr; }
      .service-card.featured-service { grid-column: span 1; }
      .hero-stats { grid-template-columns: repeat(2, 1fr); }
      .process-steps { grid-template-columns: repeat(2, 1fr); }
      .form-row { grid-template-columns: 1fr; }
      .trust-logos { grid-template-columns: repeat(2, 1fr); }
      .footer-top { grid-template-columns: 1fr; gap: 32px; }
    }
    @media (max-width: 480px) {
      .hero-stats { grid-template-columns: 1fr 1fr; }
      .impact-grid { grid-template-columns: 1fr 1fr; }
      .banner-switcher { flex-wrap: wrap; }
    }

    /* ==================== MISC UTILITIES ==================== */
    .text-brand { color: var(--brand); }
    .divider {
      height: 1px; background: rgba(255,255,255,0.06);
      margin: 0 5%;
    }
    .sticky-cta {
      position: fixed; bottom: 24px; right: 24px; z-index: 500;
      display: flex; flex-direction: column; gap: 10px;
    }
    .sticky-btn {
      width: 52px; height: 52px;
      background: var(--brand); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; color: var(--white);
      box-shadow: 0 4px 20px ${c.color}55;
      transition: all var(--transition);
    }
    .sticky-btn:hover { transform: scale(1.1); background: var(--brand-dark); }
    .sticky-btn.secondary {
      background: var(--dark3);
      border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6);
      font-size: 14px;
      box-shadow: var(--shadow);
    }
    .sticky-btn.secondary:hover { background: var(--dark2); color: var(--white); }
    .back-to-top { display: none; }
    .back-to-top.show { display: flex; }

    /* Success message */
    .form-success {
      display: none; padding: 16px;
      background: rgba(46, 213, 115, 0.1);
      border: 1px solid rgba(46, 213, 115, 0.3);
      border-radius: 10px; color: #2ed573;
      font-size: 14px; font-weight: 600;
      text-align: center; gap: 8px;
      align-items: center; justify-content: center;
    }
  </style>
</head>
<body>

<!-- ==================== NAVBAR ==================== -->
<nav id="navbar">
  <a href="/?country=${country}" class="nav-logo">
    <div class="logo-mark">F</div>
    FIRSTMARK
  </a>
  <div class="nav-links">
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#locations">Locations</a>
    <a href="#process">Process</a>
    <a href="#trust">Clients</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="nav-country">
    <a href="/?country=MW" class="country-pill ${country === 'MW' ? 'active' : ''}">🇲🇼 MW</a>
    <a href="/?country=ZM" class="country-pill ${country === 'ZM' ? 'active' : ''}">🇿🇲 ZM</a>
    <a href="/?country=ZW" class="country-pill ${country === 'ZW' ? 'active' : ''}">🇿🇼 ZW</a>
    <a href="#contact" class="nav-links nav-cta"><i class="fas fa-arrow-right"></i> Get a Quote</a>
  </div>
  <button class="hamburger" id="hamburger-btn" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Menu -->
<div id="mobile-menu">
  <a href="#services" onclick="closeMobileMenu()">Services</a>
  <a href="#about" onclick="closeMobileMenu()">About</a>
  <a href="#locations" onclick="closeMobileMenu()">Locations</a>
  <a href="#process" onclick="closeMobileMenu()">How It Works</a>
  <a href="#trust" onclick="closeMobileMenu()">Our Clients</a>
  <a href="#contact" onclick="closeMobileMenu()">Contact Us</a>
  <div class="mobile-countries">
    <a href="/?country=MW" class="country-pill ${country === 'MW' ? 'active' : ''}">🇲🇼 Malawi</a>
    <a href="/?country=ZM" class="country-pill ${country === 'ZM' ? 'active' : ''}">🇿🇲 Zambia</a>
    <a href="/?country=ZW" class="country-pill ${country === 'ZW' ? 'active' : ''}">🇿🇼 Zimbabwe</a>
  </div>
</div>

<!-- ==================== COUNTRY CONTEXT BANNER ==================== -->
<div id="country-banner">
  <div class="banner-left">
    <div class="banner-flag">${c.flag}</div>
    <div class="banner-text">
      Currently viewing: <strong>${c.name}</strong> &nbsp;—&nbsp;
      <span>${c.tagline} · ${c.address}</span>
    </div>
  </div>
  <div class="banner-switcher">
    ${Object.entries(countryData).map(([code, data]) => `
      <a href="/?country=${code}" class="banner-country-btn ${code === country ? 'current' : ''}">
        ${data.flag} ${data.name}
      </a>
    `).join('')}
  </div>
</div>

<!-- ==================== HERO ==================== -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-gradient"></div>
  <div class="hero-noise"></div>
  
  <!-- Floating billboard decorations -->
  <div class="hero-billboard-1">
    <div class="billboard-inner">
      <div class="billboard-text" style="font-size:18px">YOUR BRAND</div>
      <div class="billboard-text" style="font-size:28px">HERE</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);font-family:Inter;letter-spacing:2px;text-transform:uppercase">Premium Billboard · ${c.name}</div>
    </div>
  </div>
  <div class="hero-billboard-2">
    <div class="billboard-inner">
      <i class="fas fa-rectangle-ad" style="font-size:24px;color:rgba(255,255,255,0.2)"></i>
      <div style="font-size:11px;color:rgba(255,255,255,0.4);font-family:Inter;text-align:center">LARGE FORMAT<br>PRINTING</div>
    </div>
  </div>
  <div class="hero-billboard-3">
    <div class="billboard-inner">
      <div style="font-size:9px;color:rgba(255,255,255,0.3);font-family:Inter;letter-spacing:1px">FIRSTMARK</div>
      <i class="fas fa-location-dot" style="color:${c.color};font-size:16px"></i>
    </div>
  </div>
  
  <div class="hero-content">
    <div class="hero-badge">
      <div class="pulse"></div>
      ${c.flag} ${c.name}'s Premier Outdoor Advertising Agency
    </div>
    <div class="hero-subtitle">Billboard Advertising</div>
    <h1 class="hero-title">
      ${c.heroText.split(' ').slice(0, -2).join(' ')}<br>
      <span class="accent">${c.heroText.split(' ').slice(-2).join(' ')}</span>
    </h1>
    <p class="hero-desc">${c.subText}</p>
    <div class="hero-actions">
      <a href="#contact" class="btn-primary">
        <i class="fas fa-rocket"></i> Start Your Campaign
      </a>
      <a href="#services" class="btn-secondary">
        <i class="fas fa-play-circle"></i> Explore Services
      </a>
    </div>
    <div class="hero-stats">
      ${c.stats.map(s => `
        <div class="hero-stat">
          <div class="num">${s.value}</div>
          <div class="lbl">${s.label}</div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ==================== TICKER ==================== -->
<div id="ticker">
  <div class="ticker-track">
    ${['Outdoor Billboards', 'Large Format Printing', 'Bus Shelters', 'Digital LED Screens', 'Street Furniture', 'Vehicle Branding', 'Site Surveys', 'Campaign Analytics', 'Hoarding Boards', 'Unipoles', 'Gantries', 'Airport Advertising'].concat(['Outdoor Billboards', 'Large Format Printing', 'Bus Shelters', 'Digital LED Screens', 'Street Furniture', 'Vehicle Branding', 'Site Surveys', 'Campaign Analytics', 'Hoarding Boards', 'Unipoles', 'Gantries', 'Airport Advertising']).map(item => `
      <div class="ticker-item"><span class="dot">•</span>${item}</div>
    `).join('')}
  </div>
</div>

<!-- ==================== SERVICES ==================== -->
<section id="services">
  <div class="section-inner">
    <div class="section-header fade-up">
      <div class="section-badge"><i class="fas fa-layer-group"></i> Our Services</div>
      <h2 class="section-title">We Make <span class="accent">Brands</span><br>Unmissable</h2>
      <p class="section-desc">From towering highway billboards to precision large-format printing — every touchpoint engineered to demand attention in ${c.name}.</p>
    </div>
    
    <div class="services-grid">
      <!-- FEATURED: Outdoor Billboards -->
      <div class="service-card featured-service fade-up">
        <div class="service-number">01</div>
        <div class="service-icon"><i class="fas fa-rectangle-ad"></i></div>
        <div class="service-name">Outdoor Billboard Advertising</div>
        <div class="service-desc">Our flagship offering — strategic placement of your brand on premium billboard locations across ${c.name}'s busiest corridors. From compact 8-sheet displays to towering 48-sheet unipoles and gantries, we place your message where it can't be ignored. Every site is handpicked for maximum visibility and demographic alignment.</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="service-tag featured"><i class="fas fa-star"></i> Core Service</span>
          <span class="service-tag">Unipoles</span>
          <span class="service-tag">Gantries</span>
          <span class="service-tag">Hoarding Boards</span>
          <span class="service-tag">Bulletins</span>
        </div>
      </div>

      <!-- Large Format Printing -->
      <div class="service-card fade-up fade-up-delay-1">
        <div class="service-number">02</div>
        <div class="service-icon"><i class="fas fa-print"></i></div>
        <div class="service-name">Large Format Commercial Printing</div>
        <div class="service-desc">World-class printing for banners, billboards, backlit displays, vehicle wraps, and more. UV-resistant inks and premium substrates ensure your graphics look stunning and last longer outdoors.</div>
        <span class="service-tag featured"><i class="fas fa-palette"></i> Production House</span>
      </div>

      <!-- Street Furniture -->
      <div class="service-card fade-up fade-up-delay-1">
        <div class="service-number">03</div>
        <div class="service-icon"><i class="fas fa-bus-simple"></i></div>
        <div class="service-name">Street Furniture & Bus Shelters</div>
        <div class="service-desc">Hyper-local advertising at bus stops, shelter panels, and street furniture. Engage pedestrians and commuters at eye level where purchasing decisions are made.</div>
        <span class="service-tag">Point-of-Sale Proximity</span>
      </div>

      <!-- Digital LED Screens -->
      <div class="service-card fade-up fade-up-delay-2">
        <div class="service-number">04</div>
        <div class="service-icon"><i class="fas fa-tv"></i></div>
        <div class="service-name">Digital LED Screens</div>
        <div class="service-desc">Dynamic digital out-of-home (DOOH) advertising on high-brightness LED screens. Rotate multiple creatives, schedule by time-of-day, and command attention day and night.</div>
        <span class="service-tag featured"><i class="fas fa-bolt"></i> Dynamic Media</span>
      </div>

      <!-- Site Survey -->
      <div class="service-card fade-up fade-up-delay-2">
        <div class="service-number">05</div>
        <div class="service-icon"><i class="fas fa-map-location-dot"></i></div>
        <div class="service-name">Site Survey & Planning</div>
        <div class="service-desc">Data-driven site selection backed by audience footfall data, traffic counts, and competitive landscape analysis. We ensure your message reaches the right eyes at the right location.</div>
        <span class="service-tag">Strategic Placement</span>
      </div>

      <!-- Vehicle & Office Branding -->
      <div class="service-card fade-up fade-up-delay-3">
        <div class="service-number">06</div>
        <div class="service-icon"><i class="fas fa-car"></i></div>
        <div class="service-name">Vehicle & Office Branding</div>
        <div class="service-desc">Turn your fleet into moving billboards. Full and partial vehicle wraps, window tinting, and corporate office signage — brand consistency inside and out.</div>
        <span class="service-tag">360° Branding</span>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ==================== ABOUT ==================== -->
<section id="about">
  <div class="section-inner">
    <div class="about-grid">
      <div class="about-visual fade-up">
        <div class="about-img-main">
          <div class="about-img-bg">
            <div class="about-big-icon"><i class="fas fa-rectangle-ad"></i></div>
            <div class="about-img-label">FIRSTMARK AFRICA</div>
          </div>
        </div>
        <div class="about-badge-float">
          <div class="num">15+</div>
          <div class="lbl">Years of<br>Excellence</div>
        </div>
        <div class="about-badge-float2">
          <div class="ico"><i class="fas fa-trophy"></i></div>
          <div class="txt">
            <div class="top">Award Winning</div>
            <div class="btm">#1 in Outdoor Advertising</div>
          </div>
        </div>
      </div>
      
      <div class="about-text fade-up fade-up-delay-1">
        <div class="section-badge"><i class="fas fa-building"></i> About Firstmark</div>
        <h2 class="section-title">Africa's Most <span class="accent">Trusted</span><br>Outdoor Agency</h2>
        <p class="section-desc">
          Firstmark is a fully integrated outdoor advertising and large-format printing company with deep roots in Malawi and a rapidly expanding footprint across Zambia and Zimbabwe. We don't just put up billboards — we engineer brand presence that moves people.
        </p>
        
        <div class="about-features">
          <div class="about-feature">
            <div class="about-feature-icon"><i class="fas fa-globe-africa"></i></div>
            <div>
              <h4>3-Country Network</h4>
              <p>Operating across Malawi, Zambia and Zimbabwe with local teams who understand each market's unique dynamics, culture and consumer behaviour.</p>
            </div>
          </div>
          <div class="about-feature">
            <div class="about-feature-icon"><i class="fas fa-chart-line"></i></div>
            <div>
              <h4>Results-Driven Approach</h4>
              <p>Every campaign starts with audience insights and ends with verified delivery reporting. We measure what matters — reach, frequency, and recall.</p>
            </div>
          </div>
          <div class="about-feature">
            <div class="about-feature-icon"><i class="fas fa-industry"></i></div>
            <div>
              <h4>In-House Production</h4>
              <p>From concept to installation, everything is done in-house. Our full-service print facility and installation teams ensure consistent quality and faster turnaround.</p>
            </div>
          </div>
          <div class="about-feature">
            <div class="about-feature-icon"><i class="fas fa-handshake"></i></div>
            <div>
              <h4>Long-Term Partnerships</h4>
              <p>98% client retention rate. We become an extension of your marketing team, proactively suggesting opportunities that align with your brand strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ==================== IMPACT ==================== -->
<div id="impact">
  <div class="impact-bg"></div>
  <div class="impact-grid fade-up">
    <div class="impact-item">
      <div class="impact-num">850+</div>
      <div class="impact-label">Billboard Sites</div>
      <div class="impact-sub">Across 3 countries</div>
    </div>
    <div class="impact-item">
      <div class="impact-num">1,900+</div>
      <div class="impact-label">Campaigns Delivered</div>
      <div class="impact-sub">Since inception</div>
    </div>
    <div class="impact-item">
      <div class="impact-num">300+</div>
      <div class="impact-label">Brand Partners</div>
      <div class="impact-sub">From SMEs to multinationals</div>
    </div>
    <div class="impact-item">
      <div class="impact-num">15M+</div>
      <div class="impact-label">Daily Impressions</div>
      <div class="impact-sub">Combined network reach</div>
    </div>
  </div>
</div>

<!-- ==================== LOCATIONS ==================== -->
<section id="locations">
  <div class="section-inner">
    <div class="section-header fade-up" style="text-align:center">
      <div class="section-badge" style="margin:0 auto 16px"><i class="fas fa-location-dot"></i> Our Offices</div>
      <h2 class="section-title">Where We <span class="accent">Operate</span></h2>
      <p class="section-desc" style="margin:0 auto;text-align:center">One company, three countries. Local expertise backed by a unified regional strategy.</p>
    </div>
    
    <div class="locations-grid">
      <!-- Malawi -->
      <div class="location-card ${country === 'MW' ? 'active-country' : ''} fade-up">
        <div class="location-header">
          <div class="location-flag-big">🇲🇼</div>
          <div class="location-country">Malawi</div>
          <div class="location-city">Headquarters · Lilongwe</div>
          <div class="location-tag origin">Headquarters</div>
        </div>
        <div class="location-body">
          <div class="location-info">
            <div class="location-info-row"><i class="fas fa-location-dot"></i><span>Area 3, Presidential Way, Lilongwe, Malawi</span></div>
            <div class="location-info-row"><i class="fas fa-phone"></i><span>+265 999 123 456</span></div>
            <div class="location-info-row"><i class="fas fa-envelope"></i><span>mw@firstmark.africa</span></div>
            <div class="location-info-row"><i class="fas fa-clock"></i><span>Mon–Fri: 8:00am – 5:00pm CAT</span></div>
          </div>
          <div class="location-stats">
            <div class="loc-stat"><div class="n">500+</div><div class="l">Billboard Sites</div></div>
            <div class="loc-stat"><div class="n">15+</div><div class="l">Years Active</div></div>
            <div class="loc-stat"><div class="n">5</div><div class="l">Regions Covered</div></div>
            <div class="loc-stat"><div class="n">98%</div><div class="l">Client Retention</div></div>
          </div>
          <a href="/?country=MW" class="location-btn"><i class="fas fa-arrow-right"></i> View Malawi Operations</a>
        </div>
      </div>
      
      <!-- Zambia -->
      <div class="location-card ${country === 'ZM' ? 'active-country' : ''} fade-up fade-up-delay-1">
        <div class="location-header">
          <div class="location-flag-big">🇿🇲</div>
          <div class="location-country">Zambia</div>
          <div class="location-city">Regional Office · Lusaka</div>
          <div class="location-tag new">Regional Office</div>
        </div>
        <div class="location-body">
          <div class="location-info">
            <div class="location-info-row"><i class="fas fa-location-dot"></i><span>Cairo Road, Central Business District, Lusaka, Zambia</span></div>
            <div class="location-info-row"><i class="fas fa-phone"></i><span>+260 977 123 456</span></div>
            <div class="location-info-row"><i class="fas fa-envelope"></i><span>zm@firstmark.africa</span></div>
            <div class="location-info-row"><i class="fas fa-clock"></i><span>Mon–Fri: 8:00am – 5:00pm CAT</span></div>
          </div>
          <div class="location-stats">
            <div class="loc-stat"><div class="n">200+</div><div class="l">Billboard Sites</div></div>
            <div class="loc-stat"><div class="n">5+</div><div class="l">Years Active</div></div>
            <div class="loc-stat"><div class="n">3</div><div class="l">Provinces Covered</div></div>
            <div class="loc-stat"><div class="n">96%</div><div class="l">Client Retention</div></div>
          </div>
          <a href="/?country=ZM" class="location-btn"><i class="fas fa-arrow-right"></i> View Zambia Operations</a>
        </div>
      </div>
      
      <!-- Zimbabwe -->
      <div class="location-card ${country === 'ZW' ? 'active-country' : ''} fade-up fade-up-delay-2">
        <div class="location-header">
          <div class="location-flag-big">🇿🇼</div>
          <div class="location-country">Zimbabwe</div>
          <div class="location-city">Regional Office · Harare</div>
          <div class="location-tag new">Regional Office</div>
        </div>
        <div class="location-body">
          <div class="location-info">
            <div class="location-info-row"><i class="fas fa-location-dot"></i><span>Samora Machel Avenue, Harare CBD, Zimbabwe</span></div>
            <div class="location-info-row"><i class="fas fa-phone"></i><span>+263 77 123 4567</span></div>
            <div class="location-info-row"><i class="fas fa-envelope"></i><span>zw@firstmark.africa</span></div>
            <div class="location-info-row"><i class="fas fa-clock"></i><span>Mon–Fri: 8:00am – 5:00pm CAT</span></div>
          </div>
          <div class="location-stats">
            <div class="loc-stat"><div class="n">150+</div><div class="l">Billboard Sites</div></div>
            <div class="loc-stat"><div class="n">3+</div><div class="l">Years Active</div></div>
            <div class="loc-stat"><div class="n">2</div><div class="l">Cities Covered</div></div>
            <div class="loc-stat"><div class="n">97%</div><div class="l">Client Retention</div></div>
          </div>
          <a href="/?country=ZW" class="location-btn"><i class="fas fa-arrow-right"></i> View Zimbabwe Operations</a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ==================== PROCESS ==================== -->
<section id="process">
  <div class="process-bg"></div>
  <div class="section-inner" style="position:relative;z-index:1">
    <div class="section-header fade-up" style="text-align:center;max-width:600px;margin:0 auto 64px">
      <div class="section-badge" style="margin:0 auto 16px"><i class="fas fa-route"></i> How It Works</div>
      <h2 class="section-title">Campaign Launch<br>in <span class="accent">5 Steps</span></h2>
      <p class="section-desc" style="text-align:center;max-width:100%">From brief to billboard in record time. Our streamlined process keeps campaigns on track and on brand.</p>
    </div>
    
    <div class="process-steps">
      <div class="process-step fade-up">
        <div class="step-number">01</div>
        <div class="step-icon"><i class="fas fa-comments"></i></div>
        <div class="step-title">Brief & Discovery</div>
        <div class="step-desc">Share your campaign goals, budget, and target audience. Our team conducts a full market briefing.</div>
      </div>
      <div class="process-step fade-up fade-up-delay-1">
        <div class="step-number">02</div>
        <div class="step-icon"><i class="fas fa-map-pin"></i></div>
        <div class="step-title">Site Selection</div>
        <div class="step-desc">We identify the highest-impact locations from our 850+ site inventory aligned with your audience profile.</div>
      </div>
      <div class="process-step fade-up fade-up-delay-2">
        <div class="step-number">03</div>
        <div class="step-icon"><i class="fas fa-paint-brush"></i></div>
        <div class="step-title">Creative & Print</div>
        <div class="step-desc">Our in-house studio designs or adapts your artwork for billboard specifications, then we print with premium-grade materials.</div>
      </div>
      <div class="process-step fade-up fade-up-delay-3">
        <div class="step-number">04</div>
        <div class="step-icon"><i class="fas fa-tools"></i></div>
        <div class="step-title">Installation</div>
        <div class="step-desc">Our certified installation teams deploy your campaign quickly, safely, and with meticulous quality checks on every site.</div>
      </div>
      <div class="process-step fade-up fade-up-delay-4">
        <div class="step-number">05</div>
        <div class="step-icon"><i class="fas fa-chart-bar"></i></div>
        <div class="step-title">Proof & Reporting</div>
        <div class="step-desc">Receive photo verification of every installation plus campaign summary reports throughout the flight period.</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ==================== TRUST / CLIENTS ==================== -->
<section id="trust">
  <div class="section-inner">
    <div class="trust-header fade-up">
      <div class="section-badge" style="margin:0 auto 16px"><i class="fas fa-medal"></i> Trusted By</div>
      <h2 class="section-title">Brands That <span class="accent">Choose</span> Firstmark</h2>
      <p class="section-desc" style="margin:0 auto;text-align:center;max-width:480px">From fast-moving consumer goods to financial services — the region's most ambitious brands trust us to make them visible.</p>
    </div>
    
    <div class="trust-logos fade-up">
      ${['TNM Telecom','Airtel Africa','Standard Bank','FDH Bank','National Bank','Castel Malawi','Carlsberg','Illovo Sugar','Press Trust','Total Energies','Zambeef','Econet Wireless'].map(name => `
        <div class="trust-logo">
          <div class="trust-logo-inner">${name}</div>
        </div>
      `).join('')}
    </div>
    
    <div class="trust-testimonials">
      <div class="testimonial fade-up">
        <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">Firstmark transformed how we approach OOH in Malawi. Their site recommendations were spot-on for our target demographic, and the campaign execution was flawless. We saw a 40% uplift in brand recall.</div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">TN</div>
          <div>
            <div class="testimonial-name">Thoko Nkosi</div>
            <div class="testimonial-role">Marketing Director, TNM Telecom</div>
          </div>
        </div>
      </div>
      <div class="testimonial fade-up fade-up-delay-1">
        <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">When we expanded to Zambia, Firstmark already had the relationships and infrastructure in place. One agency, seamless execution across two countries. That kind of regional continuity is invaluable.</div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">CM</div>
          <div>
            <div class="testimonial-name">Charles Mwansa</div>
            <div class="testimonial-role">Brand Manager, Zambeef Products</div>
          </div>
        </div>
      </div>
      <div class="testimonial fade-up fade-up-delay-2">
        <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">The large-format printing quality is exceptional. Our billboard skins came out vibrant and sharp even after 3 months in the Harare sun. Firstmark is our go-to partner in Zimbabwe, full stop.</div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">RN</div>
          <div>
            <div class="testimonial-name">Rudo Ncube</div>
            <div class="testimonial-role">CMO, Econet Wireless Zimbabwe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ==================== CONTACT ==================== -->
<section id="contact">
  <div class="contact-bg"></div>
  <div class="contact-inner">
    <div class="contact-left fade-up">
      <div class="section-badge"><i class="fas fa-paper-plane"></i> Get In Touch</div>
      <h2>Ready to<br><span class="accent">Own</span><br>the Street?</h2>
      <p>Tell us about your brand and campaign goals. Our team in ${c.name} will come back to you within 24 hours with a tailored outdoor advertising proposal.</p>
      
      <div class="contact-details">
        <div class="contact-detail">
          <div class="contact-detail-icon"><i class="fas fa-location-dot"></i></div>
          <div>
            <h4>Office — ${c.name}</h4>
            <p>${c.address}</p>
          </div>
        </div>
        <div class="contact-detail">
          <div class="contact-detail-icon"><i class="fas fa-phone"></i></div>
          <div>
            <h4>Phone</h4>
            <p>${c.phone}</p>
          </div>
        </div>
        <div class="contact-detail">
          <div class="contact-detail-icon"><i class="fas fa-envelope"></i></div>
          <div>
            <h4>Email</h4>
            <p>${c.email}</p>
          </div>
        </div>
        <div class="contact-detail">
          <div class="contact-detail-icon"><i class="fas fa-clock"></i></div>
          <div>
            <h4>Business Hours</h4>
            <p>Monday – Friday, 8:00am – 5:00pm CAT</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="contact-form fade-up fade-up-delay-1">
      <div class="form-title">Request a Billboard Quote</div>
      <form id="contact-form" onsubmit="submitForm(event)">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="John" required />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Banda" required />
          </div>
        </div>
        <div class="form-group">
          <label>Company / Brand</label>
          <input type="text" placeholder="Your Company Ltd" required />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="you@company.com" required />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="${c.phone}" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Country</label>
            <select>
              <option value="MW" ${country === 'MW' ? 'selected' : ''}>🇲🇼 Malawi</option>
              <option value="ZM" ${country === 'ZM' ? 'selected' : ''}>🇿🇲 Zambia</option>
              <option value="ZW" ${country === 'ZW' ? 'selected' : ''}>🇿🇼 Zimbabwe</option>
            </select>
          </div>
          <div class="form-group">
            <label>Service Needed</label>
            <select>
              <option value="">Select a service</option>
              <option>Outdoor Billboard Advertising</option>
              <option>Large Format Printing</option>
              <option>Digital LED Screen</option>
              <option>Street Furniture / Bus Shelter</option>
              <option>Vehicle Branding</option>
              <option>Full Campaign Package</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Campaign Brief</label>
          <textarea placeholder="Tell us about your campaign goals, target audience, duration, and any specific locations you have in mind..."></textarea>
        </div>
        <button type="submit" class="form-submit">
          <i class="fas fa-paper-plane"></i> Send Campaign Brief
        </button>
        <div class="form-success" id="form-success">
          <i class="fas fa-check-circle"></i> Your brief has been sent! We'll contact you within 24 hours.
        </div>
      </form>
    </div>
  </div>
</section>

<!-- ==================== FOOTER ==================== -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">
          <div class="mark">F</div>
          FIRSTMARK
        </div>
        <p>Africa's premier outdoor billboard advertising and large-format printing company. Operating across Malawi, Zambia, and Zimbabwe with 850+ premium outdoor sites.</p>
        <div class="footer-socials">
          <a href="#" class="footer-social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="footer-social"><i class="fab fa-instagram"></i></a>
          <a href="#" class="footer-social"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="footer-social"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="footer-social"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Outdoor Billboards</a></li>
          <li><a href="#services">Large Format Printing</a></li>
          <li><a href="#services">Digital LED Screens</a></li>
          <li><a href="#services">Street Furniture</a></li>
          <li><a href="#services">Vehicle Branding</a></li>
          <li><a href="#services">Site Surveys</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Operations</h4>
        <ul>
          <li><a href="/?country=MW">🇲🇼 Malawi — Lilongwe</a></li>
          <li><a href="/?country=ZM">🇿🇲 Zambia — Lusaka</a></li>
          <li><a href="/?country=ZW">🇿🇼 Zimbabwe — Harare</a></li>
        </ul>
        <h4 style="margin-top:24px">Company</h4>
        <ul>
          <li><a href="#about">About Firstmark</a></li>
          <li><a href="#trust">Our Clients</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Now</h4>
        <ul>
          <li style="color:rgba(255,255,255,0.4);font-size:12px;padding:4px 0">🇲🇼 +265 999 123 456</li>
          <li style="color:rgba(255,255,255,0.4);font-size:12px;padding:4px 0">🇿🇲 +260 977 123 456</li>
          <li style="color:rgba(255,255,255,0.4);font-size:12px;padding:4px 0">🇿🇼 +263 77 123 4567</li>
          <li style="color:rgba(255,255,255,0.4);font-size:12px;padding:4px 0;margin-top:8px">info@firstmark.africa</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Firstmark Advertising. All rights reserved. · Malawi · Zambia · Zimbabwe</p>
      <div class="footer-countries">
        <a href="/?country=MW" class="footer-country">🇲🇼 Malawi</a>
        <a href="/?country=ZM" class="footer-country">🇿🇲 Zambia</a>
        <a href="/?country=ZW" class="footer-country">🇿🇼 Zimbabwe</a>
      </div>
    </div>
  </div>
</footer>

<!-- Sticky Buttons -->
<div class="sticky-cta">
  <a href="https://wa.me/265999123456" class="sticky-btn" title="WhatsApp Us" target="_blank">
    <i class="fab fa-whatsapp"></i>
  </a>
  <button class="sticky-btn secondary back-to-top" id="back-to-top" title="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
    <i class="fas fa-arrow-up"></i>
  </button>
</div>

<script>
  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    
    const backBtn = document.getElementById('back-to-top');
    if (window.scrollY > 400) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ===== SMOOTH ANCHOR SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        closeMobileMenu();
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, target, suffix = '') {
    const duration = 2000;
    const start = performance.now();
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const prefix = target.replace(/[0-9.+]/g, '').trim();
    
    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(num * eased);
      el.textContent = current + (target.includes('+') ? '+' : '') + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.impact-num, .hero-stat .num, .loc-stat .n');
        nums.forEach(el => {
          if (!el.dataset.animated) {
            el.dataset.animated = 'true';
            animateCounter(el, el.textContent);
          }
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('#impact, #hero, .location-card').forEach(el => counterObserver.observe(el));

  // ===== FORM SUBMISSION =====
  function submitForm(e) {
    e.preventDefault();
    const btn = document.querySelector('.form-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
      btn.style.display = 'none';
      document.getElementById('form-success').style.display = 'flex';
    }, 1500);
  }

  // ===== CURSOR EFFECT ON HERO =====
  const hero = document.getElementById('hero');
  const gradient = hero.querySelector('.hero-gradient');
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    gradient.style.background = \`radial-gradient(ellipse 70% 60% at \${x}% \${y}%, ${c.color}20 0%, transparent 70%)\`;
  });
</script>
</body>
</html>`
}

export default app
