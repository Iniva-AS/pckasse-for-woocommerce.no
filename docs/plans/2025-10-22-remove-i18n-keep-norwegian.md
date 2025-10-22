# Remove i18n and Keep Only Norwegian Implementation Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Remove all multi-language (i18n) infrastructure and hardcode Norwegian strings directly into components

**Architecture:** Incrementally refactor components from leaf to root, replace translation references with inline Norwegian strings from `no.json`, move pages out of `[locale]` folders to root, update all URLs to remove locale prefixes, and clean up i18n infrastructure

**Tech Stack:** Astro, TypeScript, Tailwind CSS

---

## Task 1: Refactor StructuredData Component

**Files:**
- Modify: `src/components/StructuredData.astro`

**Step 1: Read the current component**

Read the file to understand current usage of locale parameter

**Step 2: Remove locale parameter and hardcode values**

Remove the `locale` prop from the interface and any locale-dependent logic. Since structured data typically uses the site's primary language, ensure all strings are in Norwegian.

**Step 3: Build to verify no errors**

Run: `npm run build`
Expected: Build succeeds with no TypeScript errors

**Step 4: Commit**

```bash
git add src/components/StructuredData.astro
git commit -m "refactor: remove locale from StructuredData component"
```

---

## Task 2: Refactor Breadcrumb Component

**Files:**
- Modify: `src/components/Breadcrumb.astro`

**Step 1: Read the current component**

Read the file to understand current locale-based path handling

**Step 2: Remove locale parameter and update path logic**

Remove the `locale` prop and update any path generation to not include `/no/` prefix

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Breadcrumb.astro
git commit -m "refactor: remove locale from Breadcrumb component"
```

---

## Task 3: Refactor LatestBlogPosts Component

**Files:**
- Modify: `src/components/LatestBlogPosts.astro`

**Step 4: Read the current component**

Read the file to understand current blog path handling

**Step 2: Hardcode Norwegian blog paths**

Replace locale-based path logic with hardcoded `/blogg` paths (Norwegian)

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/LatestBlogPosts.astro
git commit -m "refactor: hardcode Norwegian paths in LatestBlogPosts"
```

---

## Task 4: Refactor Hero Component

**Files:**
- Modify: `src/components/Hero.astro`

**Step 1: Read no.json for Norwegian strings**

Already have the content from previous reads

**Step 2: Replace translation references with Norwegian strings**

Remove imports:
```typescript
import { useTranslations, type Locale } from '../i18n/utils';
```

Remove interface and props:
```typescript
interface Props {
	locale: Locale;
}

const { locale } = Astro.props;
const t = useTranslations(locale);
```

Replace all `{t.hero.*}` references with inline Norwegian strings:
- `{t.hero.title}` → `"Quick3 og WooCommerce ERP-integrasjon – helt automatisk"`
- `{t.hero.subtitle}` → `"Installer WordPress-pluginen som kobler WooCommerce og Quick3 sammen automatisk. Øk salg og konverteringer med sømløs ERP-integrasjon."`
- `{t.hero.ctaPrimary}` → `"Kom i gang selv"`
- `{t.hero.ctaPrimaryPartner}` → `"Få hjelp fra partner"`
- `{t.hero.ctaSecondary}` → `"Les dokumentasjon"`
- `{t.hero.ctaSecondaryArrow}` → `"→"`

Update href attributes to remove locale:
- `href={`/${locale}/kom-i-gang`}` → `href="/kom-i-gang"`
- `href={`/${locale}/${locale === 'no' ? 'partnere' : 'partners'}`}` → `href="/partnere"`
- `href={`/${locale}/docs`}` → `href="/docs"`

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Hero.astro
git commit -m "refactor: inline Norwegian strings in Hero component"
```

---

## Task 5: Refactor Features Component

**Files:**
- Modify: `src/components/Features.astro`

**Step 1: Read the component**

Read to understand current structure

**Step 2: Replace all t.features.* references**

Replace with Norwegian strings from no.json:
- `t.features.heading` → `"Automatiser alt"`
- `t.features.title` → `"Alt du trenger for sømløs synkronisering"`
- `t.features.description` → (full description from no.json)
- `t.features.productSync.name` → `"Automatisk produktsynkronisering"`
- `t.features.productSync.description` → (full description)
- (Continue for all 6 features: orderSync, multiWarehouse, smartPricing, backgroundProcessing, wordpressNative)

Remove imports and locale prop as in Task 4

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Features.astro
git commit -m "refactor: inline Norwegian strings in Features component"
```

---

## Task 6: Refactor FAQ Component

**Files:**
- Modify: `src/components/FAQ.astro`

**Step 1: Read the component**

**Step 2: Replace FAQ translations**

Replace with Norwegian strings:
- `t.faq.title` → `"Ofte stilte spørsmål"`
- `t.faq.items` → Inline the array of 8 FAQ items from no.json

Remove imports and locale prop

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/FAQ.astro
git commit -m "refactor: inline Norwegian FAQ in FAQ component"
```

---

## Task 7: Refactor Pricing Component

**Files:**
- Modify: `src/components/Pricing.astro`

**Step 1: Read the component**

**Step 2: Replace pricing translations**

Replace all `t.pricing.*` references with Norwegian strings from no.json:
- Pricing heading, title, description
- Frequency options (monthly, annually)
- Per month/year text
- All 3 tiers (free, business, enterprise) with their features

Remove imports and locale prop

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Pricing.astro
git commit -m "refactor: inline Norwegian pricing in Pricing component"
```

---

## Task 8: Refactor ContactForm Component

**Files:**
- Modify: `src/components/ContactForm.astro`

**Step 1: Read the component**

**Step 2: Replace contact form translations**

Replace all `t.contact.*` references with Norwegian strings:
- Form labels (name, company, email, phone, message)
- Button text (submit, sending)
- Privacy text and link
- Success/error messages

Keep the n8n webhook functionality intact - only replace strings

Remove imports and locale prop

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/ContactForm.astro
git commit -m "refactor: inline Norwegian strings in ContactForm component"
```

---

## Task 9: Refactor PartnerCard Component

**Files:**
- Modify: `src/components/PartnerCard.astro`

**Step 1: Read the component**

**Step 2: Remove locale prop**

Remove locale prop from interface and any locale-dependent path generation

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/PartnerCard.astro
git commit -m "refactor: remove locale from PartnerCard component"
```

---

## Task 10: Refactor Header Component

**Files:**
- Modify: `src/components/Header.astro`

**Step 1: Read current implementation**

Already read - has complex navigation and language switcher

**Step 2: Remove language switcher and inline Norwegian strings**

Remove imports:
```typescript
import { useTranslations, type Locale, getAlternateLocale } from '../i18n/utils';
```

Remove props interface and locale logic

Replace navigation strings:
- `t.nav.home` → `"Hjem"`
- `t.nav.getStarted` → `"Kom i gang"`
- `t.nav.docs` → `"Dokumentasjon"`
- `t.nav.partners` → `"Partnere"`
- Keep the `Blogg` item (already hardcoded for Norwegian)
- `t.nav.openMenu` → `"Open main menu"`
- `t.nav.closeMenu` → `"Close menu"`

Update navItems array to remove locale:
```typescript
const navItems = [
	{ href: "/", label: "Hjem" },
	{ href: "/kom-i-gang", label: "Kom i gang" },
	{ href: "/docs", label: "Dokumentasjon" },
	{ href: "/partnere", label: "Partnere" },
	{ href: "/blogg", label: "Blogg" },
];
```

Remove entire language switcher dropdown (both desktop and mobile versions):
- Remove the language menu button
- Remove the dropdown menu with Norwegian/English options
- Remove all related JavaScript for dropdown toggle
- Remove language-related variables (alternateLocale, alternatePath, norwegianPath, englishPath)

Update logo link:
- `href={`/${locale}`}` → `href="/"`

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "refactor: remove language switcher and inline Norwegian in Header"
```

---

## Task 11: Refactor Footer Component

**Files:**
- Modify: `src/components/Footer.astro`

**Step 1: Read the component**

**Step 2: Replace footer translations**

Replace `t.footer.*` references with Norwegian strings:
- `t.footer.copyright` → `"Iniva AS. Quick3 for WooCommerce is a product by Iniva."`
- `t.footer.privacy` → `"Personvernserklæring"`

Update privacy policy link to remove locale:
- Update href to `/personvernserklæring`

Remove imports and locale prop

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Footer.astro
git commit -m "refactor: inline Norwegian strings in Footer component"
```

---

## Task 12: Refactor SEO Component

**Files:**
- Modify: `src/components/SEO.astro`

**Step 1: Read the component**

**Step 2: Remove hreflang tags and locale logic**

Remove alternate language links (hreflang tags) since we're single-language now

Keep Norwegian meta tags, remove locale parameter

Set lang="no" hardcoded in HTML tag if managed here

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/SEO.astro
git commit -m "refactor: remove hreflang and hardcode Norwegian in SEO"
```

---

## Task 13: Move and Refactor Index Page

**Files:**
- Move: `src/pages/[locale]/index.astro` → `src/pages/index.astro`

**Step 1: Copy the file to new location**

```bash
cp src/pages/[locale]/index.astro src/pages/index.astro
```

**Step 2: Edit new index.astro file**

Remove all locale-related code:
- Remove `getStaticPaths()` function
- Remove locale from Props interface
- Remove locale destructuring
- Update component imports to not pass locale prop
- Replace any remaining locale-specific logic

**Step 3: Update all component references**

Change from:
```astro
<Header locale={locale} currentPath={Astro.url.pathname} />
```

To:
```astro
<Header currentPath={Astro.url.pathname} />
```

Do this for all components that previously received locale prop

**Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds and generates index.html at root

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "refactor: move index page to root and remove locale logic"
```

---

## Task 14: Move and Refactor Kom-i-gang Page

**Files:**
- Move: `src/pages/[locale]/kom-i-gang.astro` → `src/pages/kom-i-gang.astro`

**Step 1: Copy the file**

```bash
cp src/pages/[locale]/kom-i-gang.astro src/pages/kom-i-gang.astro
```

**Step 2: Edit kom-i-gang.astro**

Remove `getStaticPaths()`, locale props, and imports

Inline all Norwegian strings from `t.getStarted.*`:
- This is a large page with 7 steps and substeps
- Replace all translation references with inline Norwegian text
- This will be a significant amount of inline content

Update internal links to remove locale prefix:
- `/no/docs` → `/docs`
- `/no/partnere` → `/partnere`
- etc.

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/kom-i-gang.astro
git commit -m "refactor: move kom-i-gang page and inline Norwegian content"
```

---

## Task 15: Move and Refactor Docs Page

**Files:**
- Move: `src/pages/[locale]/docs/index.astro` → `src/pages/docs/index.astro`

**Step 1: Create docs directory and copy file**

```bash
mkdir -p src/pages/docs
cp src/pages/[locale]/docs/index.astro src/pages/docs/index.astro
```

**Step 2: Edit docs/index.astro**

Remove locale logic

Inline all Norwegian documentation strings from `t.docs.*`:
- This is the largest content block (documentation sections)
- Overview, sync explanation, order sync, job system, troubleshooting, support
- Contains extensive Norwegian text

Update all internal links

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/docs/index.astro
git commit -m "refactor: move docs page and inline Norwegian documentation"
```

---

## Task 16: Move and Refactor Partnere Pages

**Files:**
- Move: `src/pages/[locale]/partnere.astro` → `src/pages/partnere.astro`
- Move: `src/pages/[locale]/partnere/[slug].astro` → `src/pages/partnere/[slug].astro`

**Step 1: Copy partnere index page**

```bash
cp src/pages/[locale]/partnere.astro src/pages/partnere.astro
```

**Step 2: Edit partnere.astro**

Remove locale logic

Inline Norwegian strings from `t.partners.*`

Update links

**Step 3: Copy partner detail page**

```bash
mkdir -p src/pages/partnere
cp src/pages/[locale]/partnere/[slug].astro src/pages/partnere/[slug].astro
```

**Step 4: Edit partnere/[slug].astro**

Remove locale logic

Inline Norwegian strings

Update navigation links

**Step 5: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add src/pages/partnere.astro src/pages/partnere/
git commit -m "refactor: move partnere pages and inline Norwegian strings"
```

---

## Task 17: Move and Refactor Privacy Policy Page

**Files:**
- Move: `src/pages/[locale]/personvernserklæring.astro` → `src/pages/personvernserklæring.astro`

**Step 1: Copy file**

```bash
cp src/pages/[locale]/personvernserklæring.astro src/pages/personvernserklæring.astro
```

**Step 2: Edit personvernserklæring.astro**

Remove locale logic

Ensure all content is in Norwegian

Update component props

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/personvernserklæring.astro
git commit -m "refactor: move privacy policy page to root"
```

---

## Task 18: Check for Blog Pages

**Files:**
- Check: `src/pages/[locale]/blogg/*` or similar blog page structure

**Step 1: List blog pages**

```bash
ls -la src/pages/[locale]/blogg/ 2>/dev/null || echo "No blog directory found"
```

**Step 2: If blog pages exist, move them**

Move from `src/pages/[locale]/blogg/` to `src/pages/blogg/`

Update locale logic in each blog page

**Step 3: If no blog pages, skip**

Note in commit that blog functionality is referenced but pages don't exist yet

**Step 4: Build to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/pages/blogg/ 2>/dev/null || echo "No blog changes"
git commit -m "refactor: move blog pages if they exist" --allow-empty
```

---

## Task 19: Remove Old Locale Directory

**Files:**
- Delete: `src/pages/[locale]/` (entire directory)

**Step 1: Verify all pages have been moved**

Check that src/pages/[locale]/ only contains files we've migrated

**Step 2: Delete the locale directory**

```bash
rm -rf src/pages/[locale]
```

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds with no references to [locale] directory

**Step 4: Commit**

```bash
git add src/pages/
git commit -m "refactor: remove old [locale] directory"
```

---

## Task 20: Remove i18n Utility Files

**Files:**
- Delete: `src/i18n/utils.ts`
- Delete: `src/i18n/locales/no.json`
- Delete: `src/i18n/locales/en.json`
- Delete: `src/i18n/` (entire directory after removing files)

**Step 1: Remove i18n directory**

```bash
rm -rf src/i18n/
```

**Step 2: Build to verify no orphaned imports**

Run: `npm run build`
Expected: Build succeeds with no import errors for i18n utils

**Step 3: Commit**

```bash
git add src/i18n/
git commit -m "refactor: remove i18n infrastructure files"
```

---

## Task 21: Update Astro Config

**Files:**
- Modify: `astro.config.mjs`

**Step 1: Read current config**

```bash
cat astro.config.mjs
```

**Step 2: Remove i18n configuration**

Remove the entire `i18n` configuration object:
```javascript
i18n: {
  defaultLocale: 'no',
  locales: ['no', 'en'],
  routing: {
    prefixDefaultLocale: true
  }
}
```

**Step 3: Build to verify**

Run: `npm run build`
Expected: Build succeeds with clean configuration

**Step 4: Commit**

```bash
git add astro.config.mjs
git commit -m "refactor: remove i18n config from Astro"
```

---

## Task 22: Final Build and Manual Testing

**Files:**
- None (testing phase)

**Step 1: Clean build**

```bash
rm -rf dist/
npm run build
```

**Step 2: Preview production build**

```bash
npm run preview
```

**Step 3: Manual testing checklist**

Navigate to and verify rendering:
- [ ] Home page (/)
- [ ] Kom i gang (/kom-i-gang)
- [ ] Documentation (/docs)
- [ ] Partners (/partnere)
- [ ] Privacy policy (/personvernserklæring)
- [ ] Contact form submission (test n8n webhook)
- [ ] All navigation links work
- [ ] No console errors
- [ ] All Norwegian strings display correctly

**Step 4: Create summary commit if fixes needed**

If any issues found, fix them and commit:
```bash
git add .
git commit -m "fix: post-migration issues found during testing"
```

**Step 5: Document completion**

Note: All pages now serve Norwegian content without locale prefixes

---

## Summary

This plan removes all i18n infrastructure through 22 incremental tasks:

**Tasks 1-3:** Simple leaf components (StructuredData, Breadcrumb, LatestBlogPosts)
**Tasks 4-9:** Content-heavy components (Hero, Features, FAQ, Pricing, ContactForm, PartnerCard)
**Tasks 10-12:** Layout components (Header, Footer, SEO)
**Tasks 13-18:** Page migration (index, kom-i-gang, docs, partnere, privacy, blog)
**Task 19:** Cleanup old locale directory
**Task 20:** Remove i18n infrastructure files
**Task 21:** Update Astro configuration
**Task 22:** Final testing and verification

Each task is designed to be completed independently with immediate verification via build, ensuring the site remains functional throughout the migration.
