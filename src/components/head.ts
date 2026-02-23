import type { CountryData } from '../data/countries'
import { buildStyles } from '../styles'

export function renderHead(c: CountryData): string {
  return `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Firstmark Advertising — ${c.name} | Billboard & Outdoor Advertising</title>
  <meta name="description" content="Firstmark is Africa's premier outdoor billboard advertising agency operating in Malawi, Zambia and Zimbabwe. 500+ premium sites, 15+ years of excellence." />
  <meta name="theme-color" content="${c.color}" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />

  <style>${buildStyles(c)}</style>
</head>`
}
