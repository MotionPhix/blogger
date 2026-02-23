import { countryData } from '../data/countries'

export function renderNavbar(country: string): string {
  return `
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
</div>`
}

export function renderCountryBanner(country: string): string {
  const c = countryData[country]
  return `
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
</div>`
}
