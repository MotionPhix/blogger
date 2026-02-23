import type { CountryData } from '../data/countries'

export function renderHero(c: CountryData): string {
  const titleWords = c.heroText.split(' ')
  const titleTop = titleWords.slice(0, -2).join(' ')
  const titleAccent = titleWords.slice(-2).join(' ')

  return `
<!-- ==================== HERO ==================== -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-gradient"></div>
  <div class="hero-noise"></div>

  <!-- Floating billboard decorations -->
  <div class="hero-billboard-1">
    <img src="https://picsum.photos/seed/bb1/600/360" alt="Billboard 1" />
  </div>
  <div class="hero-billboard-2">
    <img src="https://picsum.photos/seed/bb2/400/240" alt="Billboard 2" />
  </div>
  <div class="hero-billboard-3">
    <img src="https://picsum.photos/seed/bb3/320/192" alt="Billboard 3" />
  </div>

  <div class="hero-content">
    <div class="hero-badge">
      <div class="pulse"></div>
      ${c.flag} ${c.name}'s Premier Outdoor Advertising Agency
    </div>

    <div class="hero-subtitle">Billboard Advertising</div>

    <h1 class="hero-title">
      ${titleTop}<br>
      <span class="accent">${titleAccent}</span>
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
</section>`
}
