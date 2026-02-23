import { renderFooter } from './components/footer'
import { renderHead } from './components/head'
import { renderHero } from './components/hero'
import { renderCountryBanner, renderNavbar } from './components/navbar'
import { renderAbout, renderImpact } from './components/sections/about'
import { renderContact } from './components/sections/contact'
import { renderLocations } from './components/sections/locations'
import { renderProcess } from './components/sections/process'
import { renderServices, renderTicker } from './components/sections/services'
import { renderTrust } from './components/sections/trust'
import { countryData } from './data/countries'

export function renderPage(country: string): string {
  const c = countryData[country as keyof typeof countryData] || countryData.MW

  return `<!DOCTYPE html>
<html lang="en">
${renderHead(c)}
<body>
${renderNavbar(country)}
${renderCountryBanner(country)}
${renderHero(c)}
${renderTicker()}
${renderServices(c)}
<div class="divider"></div>
${renderAbout(c)}
${renderImpact()}
${renderLocations(country)}
<div class="divider"></div>
${renderProcess()}
<div class="divider"></div>
${renderTrust()}
${renderContact(c, country)}
${renderFooter(c)}
</body>
</html>`
}
