import type { CountryData } from '../../data/countries'

export function renderContact(c: CountryData, country: string): string {
  return `
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
</section>`
}
