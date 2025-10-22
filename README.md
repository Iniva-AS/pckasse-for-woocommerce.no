# PCKasse for WooCommerce

> Staring of as a copy of quick3-for-woocommerce.no. Then gradually changed to
> be it's own thing. For now this is good enough, since it's in the early days
> and we just want to get v1 out the door.

The official website for [PCKasse for WooCommerce](https://pckasse-for-woocommerce.no).

To be even more transparent we have decided to make the source code of our
website public. This gives the curious reader the possibility to look into how
it's made. Life is just a bit more fun when you are open and transparent 🕺

## About

PCKasse for WooCommerce is a sync that stands between WooCommerce and PCKasse.
This makes it possible for you to have your own WooCommerce store (not the multisite
solution from PCKasse) and have it synchronized with your PCKasse.

We already have three clients using this system, and it's working really well!

Built by [Iniva AS](https://iniva.no), a small Norwegian company working on
building products with and for clients.

## Copyright

© 2025 Iniva AS. All Rights Reserved.

This code is publicly visible for transparency and portfolio purposes.
You may view the code, but you may NOT:

- Copy, modify, or distribute this code
- Use this code in your own projects
- Create derivative works

For licensing inquiries, contact: hello@iniva.no

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator with excellent performance
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Project Structure

```text
/
├── public/              # Static assets (images, logos)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Features.astro
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── DocsLayout.astro
│   └── pages/           # Routes and pages
│       ├── index.astro  # Landing page
│       └── docs/        # Documentation pages
│           ├── index.astro
│           ├── kom-i-gang.astro
│           ├── synkronisering.astro
│           └── feilsoking.astro
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/iniva/pckasse-for-woocommerce.no.git
cd pckasse-for-woocommerce.no

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:4321`

## Content

All pages are written in Norwegian for our Norwegian customers. The site includes:

### Landing Page (`/`)

- Hero section with call-to-action
- Feature overview (4 main features)
- Technical requirements
- Footer with contact information

### Documentation (`/docs`)

**Overview** (`/docs`)

- Introduction to the plugin
- Quick navigation to guides
- Technical requirements

**Getting Started** (`/docs/kom-i-gang`)

- Installation guide
- Quick3 API setup
- First synchronization
- Verification

**Synchronization** (`/docs/synkronisering`)

- How synchronization works
- What gets synchronized
- Job system explained
- Product matching
- Frequency and scheduling

**Troubleshooting** (`/docs/feilsoking`)

- Common issues and solutions
- Debug tips
- CLI tools
- Contact information for support

## Contributing

This is primarily our company website, but if you spot issues or have suggestions, feel free to open an issue.

Please note that due to the copyright restrictions above, we cannot accept pull requests for this repository.

## Contact

- Website: [pckasse-for-woocommerce.no](https://pckasse-for-woocommerce.no)
- Repository: [github.com/iniva/pckasse-for-woocommerce.no](https://github.com/iniva/pckasse-for-woocommerce.no)
- Company: [iniva.no](https://iniva.no)
- Email: hello@iniva.no

---

Built with care by Iniva AS
