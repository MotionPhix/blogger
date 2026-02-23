import type { CountryData } from './data/countries'

export function buildStyles(c: CountryData): string {
  return `
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

    /* ==================== COUNTRY CONTEXT BANNER ==================== */
    #country-banner {
      position: relative; z-index: 20;
      margin-top: 72px;
      background: var(--brand);
      padding: 14px 5%;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }
    .banner-left {
      display: flex; align-items: center; gap: 12px;
    }
    .banner-flag { font-size: 24px; line-height: 1; }
    .banner-text { font-size: 14px; font-weight: 600; color: var(--white); }
    .banner-text span { opacity: 0.8; font-weight: 400; }
    .banner-switcher { display: flex; gap: 8px; align-items: center; }
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
      animation: float1 6s ease-in-out infinite;
    }
    .hero-billboard-2 {
      right: 12%; top: 55%;
      width: 200px; height: 120px;
      transform: perspective(800px) rotateY(-6deg) rotateX(-2deg);
      border: 1px solid rgba(255,255,255,0.1);
      animation: float2 8s ease-in-out infinite;
    }
    .hero-billboard-3 {
      right: 22%; top: 25%;
      width: 160px; height: 96px;
      transform: perspective(800px) rotateY(-10deg);
      border: 1px solid ${c.color}44;
      animation: float3 7s ease-in-out infinite;
    }
    .hero-billboard-1 img,
    .hero-billboard-2 img,
    .hero-billboard-3 img {
      width: 100%; height: 100%; object-fit: cover;
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
      display: flex; gap: 16px;
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
    .service-card.featured-service {
      grid-column: span 2;
      background: linear-gradient(135deg, ${c.color}14 0%, ${c.color}06 100%);
      border: 1px solid ${c.color}22;
    }
    .service-card.featured-service:hover { background: linear-gradient(135deg, ${c.color}20 0%, ${c.color}10 100%); }
    .service-card.featured-service::before { background: linear-gradient(90deg, var(--brand), var(--brand-dark)); }

    /* ==================== ABOUT ==================== */
    #about { background: var(--black); }
    .about-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: center;
    }
    .about-visual { position: relative; }
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
    .about-big-icon { font-size: 80px; color: var(--brand); opacity: 0.8; }
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

    /* ==================== IMPACT ==================== */
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
    .impact-sub { font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 4px; }

    /* ==================== LOCATIONS ==================== */
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
    .location-header { padding: 32px; position: relative; }
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

    /* ==================== TRUST / CLIENTS ==================== */
    #trust { background: var(--dark); }
    .trust-header { text-align: center; margin-bottom: 56px; }
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
    .testimonial-author { display: flex; align-items: center; gap: 12px; }
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

    /* ==================== CONTACT ==================== */
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
    .contact-detail { display: flex; gap: 16px; align-items: center; }
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
    .form-title { font-size: 20px; font-weight: 700; margin-bottom: 28px; }
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
      .hero-actions { flex-direction: column; }
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
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
    .form-success {
      display: none; padding: 16px;
      background: rgba(46, 213, 115, 0.1);
      border: 1px solid rgba(46, 213, 115, 0.3);
      border-radius: 10px; color: #2ed573;
      font-size: 14px; font-weight: 600;
      text-align: center; gap: 8px;
      align-items: center; justify-content: center;
    }
  `
}
