import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderPage } from './renderer'
import { countryData } from './data/countries'

const app = new Hono()

// Serve static assets
app.use('/static/*', serveStatic({ root: './' }))

// Main landing page
app.get('/', (c) => {
  const country = c.req.query('country') || 'MW'
  return c.html(renderPage(country))
})

// Country redirect
app.get('/country/:code', (c) => {
  const code = c.req.param('code').toUpperCase()
  return c.redirect(`/?country=${code}`)
})

// API: get country info
app.get('/api/country/:code', (c) => {
  const code = c.req.param('code').toUpperCase()
  const data = countryData[code as keyof typeof countryData]
  if (!data) return c.json({ error: 'Not found' }, 404)
  return c.json(data)
})

export default app
