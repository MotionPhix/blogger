import { countryData } from '../../data/countries'

export function renderLocations(country: string): string {
  return `
<!-- ==================== LOCATIONS ==================== -->
<section id="locations">
  <div class="section-inner">
    <div class="section-header fade-up" style="text-align:center">
      <div class="section-badge" style="margin:0 auto 16px"><i class="fas fa-location-dot"></i> Our Offices</div>
      <h2 class="section-title">Where We <span class="accent">Operate</span></h2>
      <p class="section-desc" style="margin:0 auto;text-align:center">One company, three countries. Local expertise backed by a unified regional strategy.</p>
    </div>

    <div class="locations-grid">
      ${Object.entries(countryData).map(([code, data], i) => `
      <div class="location-card ${code === country ? 'active-country' : ''} fade-up ${i > 0 ? `fade-up-delay-${i}` : ''}">
        <div class="location-header">
          <div class="location-flag-big">${data.flag}</div>
          <div class="location-country">${data.name}</div>
          <div class="location-city">${code === 'MW' ? 'Headquarters' : 'Regional Office'} · ${data.city}</div>
          <div class="location-tag ${code === 'MW' ? 'origin' : 'new'}">${code === 'MW' ? 'Headquarters' : 'Regional Office'}</div>
        </div>
        <div class="location-body">
          <div class="location-info">
            <div class="location-info-row"><i class="fas fa-location-dot"></i><span>${data.address}</span></div>
            <div class="location-info-row"><i class="fas fa-phone"></i><span>${data.phone}</span></div>
            <div class="location-info-row"><i class="fas fa-envelope"></i><span>${data.email}</span></div>
            <div class="location-info-row"><i class="fas fa-clock"></i><span>Mon–Fri: 8:00am – 5:00pm CAT</span></div>
          </div>
          <div class="location-stats">
            ${data.stats.map(s => `
            <div class="loc-stat">
              <div class="n">${s.value}</div>
              <div class="l">${s.label}</div>
            </div>`).join('')}
          </div>
          <a href="/?country=${code}" class="location-btn"><i class="fas fa-arrow-right"></i> View ${data.name} Operations</a>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`
}
