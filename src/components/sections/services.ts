import type { CountryData } from '../data/countries'

const TICKER_ITEMS = [
  'Outdoor Billboards', 'Large Format Printing', 'Bus Shelters', 'Digital LED Screens',
  'Street Furniture', 'Vehicle Branding', 'Site Surveys', 'Campaign Analytics',
  'Hoarding Boards', 'Unipoles', 'Gantries', 'Airport Advertising'
]

export function renderTicker(): string {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return `
<!-- ==================== TICKER ==================== -->
<div id="ticker">
  <div class="ticker-track">
    ${doubled.map(item => `<div class="ticker-item"><span class="dot">•</span>${item}</div>`).join('\n    ')}
  </div>
</div>`
}

export function renderServices(c: CountryData): string {
  return `
<!-- ==================== SERVICES ==================== -->
<section id="services">
  <div class="section-inner">
    <div class="section-header fade-up">
      <div class="section-badge"><i class="fas fa-layer-group"></i> Our Services</div>
      <h2 class="section-title">We Make <span class="accent">Brands</span><br>Unmissable</h2>
      <p class="section-desc">From towering highway billboards to precision large-format printing — every touchpoint engineered to demand attention in ${c.name}.</p>
    </div>

    <div class="services-grid">
      <div class="service-card featured-service fade-up">
        <div class="service-number">01</div>
        <div class="service-icon"><i class="fas fa-rectangle-ad"></i></div>
        <div class="service-name">Outdoor Billboard Advertising</div>
        <div class="service-desc">Our flagship offering — strategic placement of your brand on premium billboard locations across ${c.name}'s busiest corridors. From compact 8-sheet displays to towering 48-sheet unipoles and gantries, we place your message where it can't be ignored.</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="service-tag featured"><i class="fas fa-star"></i> Core Service</span>
          <span class="service-tag">Unipoles</span>
          <span class="service-tag">Gantries</span>
          <span class="service-tag">Hoarding Boards</span>
          <span class="service-tag">Bulletins</span>
        </div>
      </div>

      <div class="service-card fade-up fade-up-delay-1">
        <div class="service-number">02</div>
        <div class="service-icon"><i class="fas fa-print"></i></div>
        <div class="service-name">Large Format Commercial Printing</div>
        <div class="service-desc">World-class printing for banners, billboards, backlit displays, vehicle wraps, and more. UV-resistant inks and premium substrates ensure your graphics look stunning and last longer outdoors.</div>
        <span class="service-tag featured"><i class="fas fa-palette"></i> Production House</span>
      </div>

      <div class="service-card fade-up fade-up-delay-1">
        <div class="service-number">03</div>
        <div class="service-icon"><i class="fas fa-bus-simple"></i></div>
        <div class="service-name">Street Furniture & Bus Shelters</div>
        <div class="service-desc">Hyper-local advertising at bus stops, shelter panels, and street furniture. Engage pedestrians and commuters at eye level where purchasing decisions are made.</div>
        <span class="service-tag">Point-of-Sale Proximity</span>
      </div>

      <div class="service-card fade-up fade-up-delay-2">
        <div class="service-number">04</div>
        <div class="service-icon"><i class="fas fa-tv"></i></div>
        <div class="service-name">Digital LED Screens</div>
        <div class="service-desc">Dynamic digital out-of-home (DOOH) advertising on high-brightness LED screens. Rotate multiple creatives, schedule by time-of-day, and command attention day and night.</div>
        <span class="service-tag featured"><i class="fas fa-bolt"></i> Dynamic Media</span>
      </div>

      <div class="service-card fade-up fade-up-delay-2">
        <div class="service-number">05</div>
        <div class="service-icon"><i class="fas fa-map-location-dot"></i></div>
        <div class="service-name">Site Survey & Planning</div>
        <div class="service-desc">Data-driven site selection backed by audience footfall data, traffic counts, and competitive landscape analysis. We ensure your message reaches the right eyes at the right location.</div>
        <span class="service-tag">Strategic Placement</span>
      </div>

      <div class="service-card fade-up fade-up-delay-3">
        <div class="service-number">06</div>
        <div class="service-icon"><i class="fas fa-car"></i></div>
        <div class="service-name">Vehicle & Office Branding</div>
        <div class="service-desc">Turn your fleet into moving billboards. Full and partial vehicle wraps, window tinting, and corporate office signage — brand consistency inside and out.</div>
        <span class="service-tag">360° Branding</span>
      </div>
    </div>
  </div>
</section>`
}
