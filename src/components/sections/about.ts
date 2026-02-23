import type { CountryData } from '../../data/countries'

export function renderAbout(c: CountryData): string {
  return `
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
</section>`
}

export function renderImpact(): string {
  return `
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
</div>`
}
