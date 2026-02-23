const TRUST_BRANDS = [
  'TNM Telecom', 'Airtel Africa', 'Standard Bank', 'FDH Bank', 'National Bank',
  'Castel Malawi', 'Carlsberg', 'Illovo Sugar', 'Press Trust', 'Total Energies',
  'Zambeef', 'Econet Wireless'
]

const TESTIMONIALS = [
  {
    initials: 'TN',
    text: 'Firstmark transformed how we approach OOH in Malawi. Their site recommendations were spot-on for our target demographic, and the campaign execution was flawless. We saw a 40% uplift in brand recall.',
    name: 'Thoko Nkosi',
    role: 'Marketing Director, TNM Telecom'
  },
  {
    initials: 'CM',
    text: 'When we expanded to Zambia, Firstmark already had the relationships and infrastructure in place. One agency, seamless execution across two countries. That kind of regional continuity is invaluable.',
    name: 'Charles Mwansa',
    role: 'Brand Manager, Zambeef Products'
  },
  {
    initials: 'RN',
    text: 'The large-format printing quality is exceptional. Our billboard skins came out vibrant and sharp even after 3 months in the Harare sun. Firstmark is our go-to partner in Zimbabwe, full stop.',
    name: 'Rudo Ncube',
    role: 'CMO, Econet Wireless Zimbabwe'
  }
]

export function renderTrust(): string {
  const stars = `<i class="fas fa-star"></i>`.repeat(5)

  return `
<!-- ==================== TRUST / CLIENTS ==================== -->
<section id="trust">
  <div class="section-inner">
    <div class="trust-header fade-up">
      <div class="section-badge" style="margin:0 auto 16px"><i class="fas fa-medal"></i> Trusted By</div>
      <h2 class="section-title">Brands That <span class="accent">Choose</span> Firstmark</h2>
      <p class="section-desc" style="margin:0 auto;text-align:center;max-width:480px">From fast-moving consumer goods to financial services — the region's most ambitious brands trust us to make them visible.</p>
    </div>

    <div class="trust-logos fade-up">
      ${TRUST_BRANDS.map(name => `
      <div class="trust-logo">
        <div class="trust-logo-inner">${name}</div>
      </div>`).join('')}
    </div>

    <div class="trust-testimonials">
      ${TESTIMONIALS.map((t, i) => `
      <div class="testimonial fade-up ${i > 0 ? `fade-up-delay-${i}` : ''}">
        <div class="testimonial-stars">${stars}</div>
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">${t.text}</div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.initials}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`
}
