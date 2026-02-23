export function renderProcess(): string {
  const steps = [
    { n: '01', icon: 'fa-comments', title: 'Brief & Discovery', desc: 'Share your campaign goals, budget, and target audience. Our team conducts a full market briefing.' },
    { n: '02', icon: 'fa-map-pin', title: 'Site Selection', desc: 'We identify the highest-impact locations from our 850+ site inventory aligned with your audience profile.' },
    { n: '03', icon: 'fa-paint-brush', title: 'Creative & Print', desc: 'Our in-house studio designs or adapts your artwork for billboard specifications, then we print with premium-grade materials.' },
    { n: '04', icon: 'fa-tools', title: 'Installation', desc: 'Our certified installation teams deploy your campaign quickly, safely, and with meticulous quality checks on every site.' },
    { n: '05', icon: 'fa-chart-bar', title: 'Proof & Reporting', desc: 'Receive photo verification of every installation plus campaign summary reports throughout the flight period.' },
  ]

  return `
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
      ${steps.map((s, i) => `
      <div class="process-step fade-up ${i > 0 ? `fade-up-delay-${i}` : ''}">
        <div class="step-number">${s.n}</div>
        <div class="step-icon"><i class="fas ${s.icon}"></i></div>
        <div class="step-title">${s.title}</div>
        <div class="step-desc">${s.desc}</div>
      </div>`).join('')}
    </div>
  </div>
</section>`
}
