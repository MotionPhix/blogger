import type { CountryData } from '../data/countries'

export function renderFooter(c: CountryData): string {
  return `
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
      <p>© 2025 Firstmark Marketing. All rights reserved. · Malawi · Zambia · Zimbabwe</p>
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
      if (entry.isIntersecting) entry.target.classList.add('visible');
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
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    function update(time) {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(num * eased) + (target.includes('+') ? '+' : '');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.impact-num, .hero-stat .num, .loc-stat .n').forEach(el => {
          if (!el.dataset.animated) { el.dataset.animated = 'true'; animateCounter(el, el.textContent); }
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
</script>`
}
