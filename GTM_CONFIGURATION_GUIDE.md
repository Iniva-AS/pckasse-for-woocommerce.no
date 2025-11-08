# Google Tag Manager Configuration Guide

This guide will help you configure Google Tag Manager (GTM) to track conversion events from your website.

## Overview

The website now sends custom events to both GTM dataLayer and Plausible Analytics. This guide focuses on setting up GTM to receive and process these events for Google Analytics 4 (GA4) and Google Ads conversion tracking.

## Events Being Tracked

### 1. Contact Form Submit
- **Event Name:** `contact_form_submit`
- **Trigger:** When contact form is successfully submitted
- **Data Layer Variables:**
  - `eventCategory`: "conversion"
  - `formType`: "contact"
  - `status`: "success" or "error"
  - `errorMessage`: (if error occurred)

### 2. CTA Click to App
- **Event Name:** `cta_click_app`
- **Trigger:** When user clicks any CTA button to app.pckasse-for-woocommerce.no
- **Data Layer Variables:**
  - `eventCategory`: "conversion"
  - `ctaLocation`: "hero", "call-to-action", "pricing", "header", or "header-mobile"
  - `eventLabel`: Button text (e.g., "Kom i gang", "Start gratis prøveperiode")
  - `plan`: (if from pricing page) Plan name
  - `price`: (if from pricing page) Plan price

### 3. Partner Click
- **Event Name:** `partner_click`
- **Trigger:** When user clicks partner website, email, or phone link
- **Data Layer Variables:**
  - `eventCategory`: "engagement"
  - `partnerName`: Partner name
  - `linkType`: "website", "email", or "phone"
  - `partnerUrl`: (if website link)
  - `eventLabel`: Partner name

## GTM Setup Steps

### Step 1: Create Data Layer Variables

In GTM, create the following User-Defined Variables of type "Data Layer Variable":

1. **eventCategory**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `eventCategory`

2. **ctaLocation**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `ctaLocation`

3. **formType**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `formType`

4. **status**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `status`

5. **partnerName**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `partnerName`

6. **linkType**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `linkType`

7. **plan**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `plan`

8. **price**
   - Variable Type: Data Layer Variable
   - Data Layer Variable Name: `price`

### Step 2: Create Custom Event Triggers

Create the following triggers in GTM:

#### Trigger 1: Contact Form Submit
- **Trigger Type:** Custom Event
- **Event name:** `contact_form_submit`
- **This trigger fires on:** All Custom Events

#### Trigger 2: CTA Click to App
- **Trigger Type:** Custom Event
- **Event name:** `cta_click_app`
- **This trigger fires on:** All Custom Events

#### Trigger 3: Partner Click
- **Trigger Type:** Custom Event
- **Event name:** `partner_click`
- **This trigger fires on:** All Custom Events

### Step 3: Create GA4 Event Tags

Create the following tags in GTM to send events to Google Analytics 4:

#### Tag 1: GA4 - Contact Form Submit
- **Tag Type:** Google Analytics: GA4 Event
- **Configuration Tag:** (Your GA4 Configuration Tag)
- **Event Name:** `contact_form_submit`
- **Event Parameters:**
  - `form_type`: `{{formType}}`
  - `status`: `{{status}}`
  - `event_category`: `{{eventCategory}}`
- **Triggering:** Contact Form Submit trigger

#### Tag 2: GA4 - CTA Click App
- **Tag Type:** Google Analytics: GA4 Event
- **Configuration Tag:** (Your GA4 Configuration Tag)
- **Event Name:** `cta_click_app`
- **Event Parameters:**
  - `cta_location`: `{{ctaLocation}}`
  - `event_label`: `{{eventLabel}}`
  - `event_category`: `{{eventCategory}}`
  - `plan`: `{{plan}}` (optional)
  - `price`: `{{price}}` (optional)
- **Triggering:** CTA Click to App trigger

#### Tag 3: GA4 - Partner Click
- **Tag Type:** Google Analytics: GA4 Event
- **Configuration Tag:** (Your GA4 Configuration Tag)
- **Event Name:** `partner_click`
- **Event Parameters:**
  - `partner_name`: `{{partnerName}}`
  - `link_type`: `{{linkType}}`
  - `event_category`: `{{eventCategory}}`
  - `event_label`: `{{eventLabel}}`
- **Triggering:** Partner Click trigger

### Step 4: Mark Events as Conversions in GA4

1. Go to your Google Analytics 4 property
2. Navigate to **Admin** > **Events**
3. Find the following events (they will appear after data starts flowing):
   - `contact_form_submit`
   - `cta_click_app`
4. Toggle "Mark as conversion" for these events

### Step 5: Set Up Google Ads Conversion Tracking (Optional)

If you want to track these conversions in Google Ads:

#### For Contact Form Submissions:

1. In GTM, create a new tag:
   - **Tag Type:** Google Ads Conversion Tracking
   - **Conversion ID:** (Your Google Ads Conversion ID)
   - **Conversion Label:** (Your Conversion Label for form submissions)
   - **Triggering:** Contact Form Submit trigger (with condition: `status` equals `success`)

#### For CTA Clicks (Sign-ups):

1. In GTM, create a new tag:
   - **Tag Type:** Google Ads Conversion Tracking
   - **Conversion ID:** (Your Google Ads Conversion ID)
   - **Conversion Label:** (Your Conversion Label for sign-ups)
   - **Triggering:** CTA Click to App trigger

### Step 6: Test Your Setup

1. In GTM, click **Preview**
2. Enter your website URL
3. Perform the following actions on your site:
   - Submit contact form
   - Click "Kom i gang" button
   - Click pricing plan buttons
   - Click partner links
4. In GTM Preview mode, verify:
   - Events are firing
   - Data Layer variables are populated correctly
   - Tags are firing as expected

## Verification Checklist

- [ ] All Data Layer Variables created in GTM
- [ ] All Custom Event Triggers created
- [ ] All GA4 Event Tags created and configured
- [ ] Events tested in GTM Preview mode
- [ ] Events appearing in GA4 DebugView
- [ ] Events marked as conversions in GA4
- [ ] Google Ads conversion tags created (if applicable)
- [ ] Conversion tracking tested in Google Ads (if applicable)

## Important Notes

### Consent Management

- The tracking code respects user consent via Klaro consent manager
- GTM events will only fire if user has consented to analytics/marketing cookies
- Plausible events always fire (privacy-friendly, no cookies)

### Event Data Flow

1. User performs action (e.g., clicks button)
2. Tracking function checks for analytics consent
3. If consent granted:
   - Event pushed to GTM dataLayer
   - Event sent to Plausible
4. GTM receives event and fires configured tags
5. Data flows to GA4 and/or Google Ads

### Testing Without Publishing

Use GTM Preview mode to test all tracking before publishing:
1. Make changes in GTM
2. Click Preview
3. Test on your website
4. Verify in GTM Preview pane and GA4 DebugView
5. Only publish when everything works correctly

## Troubleshooting

### Events Not Firing in GTM

1. Check browser console for JavaScript errors
2. Verify consent was granted (check Klaro cookie banner)
3. Check GTM Preview mode to see if dataLayer is receiving events
4. Verify trigger configuration matches event names exactly

### Events Firing But Not in GA4

1. Check GA4 Configuration tag is firing on all pages
2. Verify GA4 Measurement ID is correct
3. Check GA4 DebugView (may take a few seconds to appear)
4. Ensure event parameters don't exceed GA4 limits

### Missing Data Layer Variables

1. Verify variable names match exactly (case-sensitive)
2. Check that events are sending the expected data
3. Use GTM Preview mode's Variables tab to inspect values

## Support

For questions about this implementation:
- Review the tracking code in `src/lib/tracking.ts`
- Check component implementations for event firing
- Consult GTM documentation: https://developers.google.com/tag-manager
- Consult GA4 documentation: https://developers.google.com/analytics/devguides/collection/ga4

---

**Last Updated:** November 2025
