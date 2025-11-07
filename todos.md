## V1

- [ ] Reskin the website to use the "Play" template. Different vibe.
- [ ] Start replacing the content to fit PCKasse for WooCommerce

### Update images/assets

- [ ] New screenshot
  - [ ] Dashboard (./public/screenshots/dashboard.png) - Shows the dashboard with the overall overview
  - [ ] Integrasjon (./public/screenshots/integrasjon.png) - Shows a healthy integration
  - [ ] logger-og-innsikt (./public/screenshots/logger-og-innsikt.png) - shows that you can view logs and debug issues quickly yourself
  - [ ] oppsett (./public/screenshots/oppsett.png) - Shows how easy it is to get started with a new integration

### Features

- [ ] Et abonoment for alle dine integrasjoner
- [ ] Stabil integrasjon mellom PCKasse og WooCommerce
- [ ] Varelager
- [ ] Variasjoner
- [ ] Ordresynkronisering
- [ ] Real-time logging
- [ ] Kom i gang på 10 minutter

### Pricing and plans

We have very simple pricing. To make it very easy for the customer.

- [ ] Implement pricing and plans

**Start**
Pris per måned: 750kr eks mva
Pris per år: 7 200kr eks mva

300 ordre per måned. Normal support.

**Vekst**
Pris per måned: 1 950kr eks mva
Pris per år: 18 720kr eks mva

2000 ordre per måned. Normal support.

**Skala**
Pris per måned: 4 950kr eks mva
Pris per år: 47 520kr eks mva

Ubegrenset antall ordre. Topp support.

### Copy

Key Value Propositions & Selling Points

Core Value:

- Sync between PCKasse (Norwegian Pos) and WooCommerce - Products, stock, prices, flows to WooCommerce, orders, refunds flows back to PCKasse
- Self-service dashboard - customers manage their own integrations without technical support
- Real-time updates via WebSocket - see sync operations happen live

Product Capabilities:

1. Complete Product Management
   - Automatic product sync from PCK to WooCommerce
   - Stock count updates in real-time
   - Image sync (product images and color variants)
   - Product attributes (manufacturer, color, size)
   - Product brands/categories

2. Order Management
   - WooCommerce orders automatically flow to PCK
   - Order status updates sync back to WooCommerce
   - Credit/refund handling
   - 15-minute background sync ensures no orders missed

3. Customer Sync
   - Customer information synced between systems
   - Credit application handling

4. Pricing & Discounts
   - Discount sync from PCK to WooCommerce
   - Payment type management

Technical Strengths:

- SOAP API that PCK calls directly (native integration)
- Reliable: Automatic error monitoring with status thresholds
- Audit Trail: Complete sync logs with request/response payloads for debugging
- Secure: AES-256 encryption for credentials
- Automated: Background cron jobs + webhook-driven updates

Dashboard Features (Norwegian UI):

- Magic link authentication (no passwords)
- Organization management for teams
- Integration testing tools (WordPress/WooCommerce credential validation)
- Webhook setup automation
- Real-time activity feed
- Usage statistics and analytics
- Comprehensive error logging with detailed payloads

Business Model:

- 14-day free trial for first integration
- Stripe-powered subscription billing
- Flexible monthly/yearly billing intervals
- Supports multiple integrations per organization

Reliability:
(rewrite this to not give away details about setup, just outcome)

- Automatic health monitoring (>10 errors/24h = error status)
- Daily database backups to cloud storage
- Dead Man's Snitch monitoring for cron jobs
- Sentry error tracking

## Launch

- [ ] Google Search console
- [ ] Plauseable
- [ ] Google Tag Manager
- [ ] Google Analytics
- [ ] Sette opp conversion tracking
- [ ] google Ads

## V2

- [ ] Figure out how to get self-signup working with todays api server.
