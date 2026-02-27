# ADL Mobile Mechanic — SEO & Launch Guide

Everything you need to do to get your website ranking on Google. Follow these steps in order after deploying the site.

---

## IMPORTANT: Domain Name

The site is currently configured to use `adlmobilemechanic.co.uk`. If your actual domain is different, do a **find and replace** across the codebase:

Search for: `adlmobilemechanic.co.uk`
Replace with: `your-actual-domain.co.uk`

Files that contain it:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/structured-data.tsx`

---

## Step 1: Google Business Profile (THE MOST IMPORTANT STEP)

This is the single most impactful thing you can do. It gets you on **Google Maps** and in the **local 3-pack** (the top 3 map results that appear when someone searches "mobile mechanic near me").

1. Go to **https://business.google.com**
2. Sign in with a Google account
3. Click **"Add your business"**
4. Enter business name: **ADL Mobile Mechanic**
5. Category: **Mobile mechanic** (primary), also add **Auto repair shop**, **Car repair and maintenance**
6. Since you go to customers, select **"I deliver goods and services to my customers"** and set your service area to:
   - Wem
   - Market Drayton
   - Shrewsbury
   - Whitchurch
   - Oswestry
   - Newport
   - Telford
   - Shropshire (county-wide)
7. Add your phone number: **07426 443009**
8. Add your website URL
9. **Upload photos** — your van, you working on cars, your tools, your logo. Google loves photos. Add at least 5-10.
10. Write a description using keywords naturally:
    > "ADL Mobile Mechanic is an expert mobile vehicle repair service covering Wem, Market Drayton, and a 30-mile radius across Shropshire. We specialise in timing chain replacement (Renault Trafic & Vauxhall Vivaro), advanced diagnostics, full servicing, MOT preparation, clutch & flywheel replacement, suspension & brake repairs, and dealer PDI work. We come to your home or workplace — no garage needed. Call Aaron on 07426 443009."
11. Set your hours of operation
12. Google will verify your business (usually by postcard or phone call)

---

## Step 2: Google Search Console

This lets you monitor how Google sees your site and submit your sitemap.

1. Go to **https://search.google.com/search-console**
2. Click **"Add property"**
3. Choose **"URL prefix"** and enter your full website URL (e.g., `https://adlmobilemechanic.co.uk`)
4. Verify ownership (if on Vercel, DNS verification is easiest)
5. Once verified, go to **Sitemaps** in the left menu
6. Submit: `https://adlmobilemechanic.co.uk/sitemap.xml`
7. Google will now crawl and index your site — this can take a few days to a couple of weeks

---

## Step 3: Bing Webmaster Tools

Don't skip Bing — it also powers Yahoo, DuckDuckGo, and Alexa.

1. Go to **https://www.bing.com/webmasters**
2. You can import directly from Google Search Console (easiest option)
3. Submit your sitemap: `https://adlmobilemechanic.co.uk/sitemap.xml`

---

## Step 4: Free Business Directory Listings

Get listed on every free directory you can. Each listing is a **backlink** that boosts your Google ranking. Use consistent info everywhere (same name, phone, address).

**High priority (do these first):**
- **Yell.com** — https://www.yell.com/free-listing/
- **Google Business** — (done in Step 1)
- **Bing Places** — https://www.bingplaces.com
- **FreeIndex** — https://www.freeindex.co.uk
- **Thomson Local** — https://www.thomsonlocal.com
- **Cylex** — https://www.cylex-uk.co.uk

**Trade-specific directories:**
- **Checkatrade** — https://www.checkatrade.com (paid but very effective, shows reviews)
- **MyBuilder** — https://www.mybuilder.com
- **Bark** — https://www.bark.com
- **Rated People** — https://www.ratedpeople.com
- **TrustATrader** — https://www.trustatrader.com

**Social & other:**
- **Facebook Business Page** — create one with your logo, services, and phone number
- **Nextdoor** — list as a local business (very effective for local trades)
- **Instagram** — post before/after repair photos with local hashtags like #MobileMechanicShropshire #WemMechanic

---

## Step 5: Get Google Reviews

Google Reviews are one of the **biggest ranking factors** for local search. After every job:

1. Ask the customer: "If you're happy with the work, would you mind leaving a quick Google review?"
2. Send them a direct link to your Google review page (you can get this from your Google Business Profile dashboard under "Get more reviews")
3. Aim for **at least 10-15 reviews** to start appearing prominently
4. **Reply to every review** — Google likes active engagement
5. Never offer incentives for reviews (it's against Google's policy)

---

## Step 6: Social Media (Low Effort, High Impact)

You don't need to be a social media expert. Just do these simple things:

**Facebook:**
1. Create a Facebook Business Page
2. Post a photo after each job (with permission): "Timing chain replacement on a Renault Trafic today in Market Drayton. Another happy customer back on the road!"
3. Share your website link
4. Ask customers to recommend you on Facebook

**Instagram:**
1. Post before/after repair photos
2. Use hashtags: #MobileMechanic #ShropshireMechanic #WemMechanic #MarketDrayton #MobileMechanicNearMe #CarRepair #TimingChain #ADLMobileMechanic

---

## Step 7: Local SEO Tips (Ongoing)

Things to keep doing over time:

- **Consistent NAP**: Make sure your **N**ame, **A**ddress, **P**hone are identical everywhere (website, Google, directories, social media). Even small differences hurt rankings.
- **Photos on Google Business**: Upload new photos regularly (monthly). Google ranks active profiles higher.
- **Respond to all reviews**: Both positive and negative. Be professional.
- **Post on Google Business**: Google Business has a "Posts" feature — use it to share offers, news, or tips. E.g., "Winter is coming — book your brake check today!"
- **Ask for referrals**: Word of mouth + online reviews = domination.

---

## What's Already Built Into Your Website (Technical SEO)

You don't need to touch any of this — it's already done:

- **Sitemap** (`/sitemap.xml`) — auto-generated, tells Google about all your pages
- **Robots.txt** (`/robots.txt`) — tells Google it's allowed to crawl everything
- **JSON-LD Structured Data** — tells Google you're a local auto repair business with specific services, phone number, and service areas (Wem, Market Drayton, Shrewsbury, Whitchurch, Oswestry, Newport, Telford, Nantwich, Crewe)
- **FAQ Schema** — common questions and answers appear as rich results in Google
- **Open Graph & Twitter Cards** — your link looks professional when shared on Facebook, WhatsApp, Twitter
- **Geo meta tags** — pinpoints your location for local search
- **Canonical URLs** — prevents duplicate content issues
- **Semantic HTML** — proper heading hierarchy and ARIA labels for accessibility and crawlability
- **Mobile responsive** — Google uses mobile-first indexing, your site works perfectly on all devices
- **Fast loading** — Next.js static generation means your site loads extremely fast (speed is a ranking factor)
- **Keywords targeted**: mobile mechanic Wem, mobile mechanic Market Drayton, mobile mechanic Shropshire, mobile mechanic Shrewsbury, timing chain replacement, and 20+ more

---

## Timeline: What to Expect

| Timeframe | What happens |
|-----------|-------------|
| **Week 1** | Set up Google Business, Search Console, submit sitemap |
| **Week 2-4** | Google starts crawling and indexing your site |
| **Month 1-2** | You start appearing in search results (possibly page 2-3) |
| **Month 2-4** | With reviews and directory listings, you climb to page 1 for local searches |
| **Month 4+** | With consistent reviews and activity, you enter the local 3-pack for "mobile mechanic" + your area |

**The more reviews you get, the faster you rank. Aim for 1-2 new reviews per week.**

---

## Quick Wins Checklist

- [ ] Set up Google Business Profile
- [ ] Verify Google Business (postcard/phone)
- [ ] Set up Google Search Console & submit sitemap
- [ ] Set up Bing Webmaster Tools
- [ ] Create Facebook Business Page
- [ ] List on Yell.com
- [ ] List on FreeIndex
- [ ] List on Thomson Local
- [ ] Get your first 5 Google reviews
- [ ] Post your first job photo on Facebook/Instagram
- [ ] Share your website link on your personal social media

---

*Guide generated for ADL Mobile Mechanic. Website designed by Web-force.info.*
