# Punjab Tech: global pricing, trust, and SEO plan

Audited 17 September 2026. This plan treats prices as **starting investments in USD**, excludes third-party fees and taxes, and requires the scope and payment schedule to be visible before a buyer clicks WhatsApp.

## Non-negotiable trust corrections

1. Remove every statistic, testimonial, award, uptime/SLA statement, client logo, and result claim unless Punjab Tech can prove it and link to the evidence. The current site uses claims such as “Rated #1,” “100% success rate,” “50+ Apps Delivered,” “$5M+ raised,” and anonymous testimonials. Unsupported superlatives make a new agency look less credible, especially to overseas buyers.
2. Keep only real portfolio items. For each, show: product screenshot or 15–30 second demo, short client-approved case study, the exact Punjab Tech contribution, technologies, launch date, and a live App Store, Play Store, or product URL. Never use a mockup to imply a real shipped app.
3. Add a persistent proof strip below every hero: “India-based, remote-first · contracts before work · source-code ownership on final payment · milestone billing.” Only show payment methods, company registration, address, or team LinkedIn/GitHub links if they are real and maintained.
4. Add a visible “What is not included” panel on every price card: third-party subscriptions, ad spend, Apple/Google developer accounts, tax/GST, paid stock/media, and change requests. This is more persuasive than a fake crossed-out “original price.”
5. Use real names, roles, and profile links for the team. Replace empty social links (`#`) with verified LinkedIn/GitHub profiles or remove them.

## Currency and pricing policy

Use one global currency: **USD**. Format as “From $X USD” and label recurring plans “/month”. Keep INR only when a government fee must legally be paid in INR (Indian trademark, incorporation, GST); show it separately as “government fee, paid at cost.”

Do not use fake discounts or “unlimited features.” They make the offer feel unscoped. Quote after discovery for complex work, and use a paid discovery/technical-spec phase where the true scope is unknown.

## Service-by-service recommendations

| Service | Competitive global starting point | Page-specific design / proof | Required price clarity |
|---|---:|---|---|
| App development | Discovery $750; mobile MVP $2,900; scale build $7,500 | Interactive phone prototype, app-store cards, feature/timeline estimator | Platforms, features, backend/admin, revision count, store-account fees excluded |
| Web development | Landing page $650; business site $1,500; commerce/web app $3,500 | Browser-device showcase and Core Web Vitals before/after | Page count, CMS, copy, product/import limits, hosting excluded |
| Digital marketing | SEO foundation $350/mo; growth $750/mo; full-funnel $1,500/mo | Live anonymized dashboard and 90-day roadmap | Ad spend separate; minimum term; deliverables and reporting cadence |
| Branding & design | Logo $450; identity $1,200; brand system $3,000 | Brand-board reveal with real before/after work | Concepts, revisions, files, brand-guide depth, printing excluded |
| Social media growth | $250/mo; $550/mo; $1,100/mo | Content calendar and sample post carousel | Platforms, posts/reels, shoot/editing, community hours, ad spend excluded |
| Legal & compliance | Consultation $79; incorporation support $299; startup legal pack $899 | Checklist + responsible professional credentials | Government fees and lawyer review separately itemized; no outcome guarantees |
| App Store publishing | Play Store $199; both stores $499; launch optimization $899 | Store-listing before/after and checklist | Developer accounts, screenshots/video, fixes, and rejection work clearly scoped |
| CRM integration | CRM audit $350; setup $1,250; custom integration $3,500 | Clickable pipeline demo and integration map | CRM licence excluded; seats, migration records, workflows, training specified |
| Funding guidance | Pitch deck $450; investor-ready pack $1,250; advisory $2,500 | Redacted slide comparisons and process timeline | Never promise funding or investor introductions; define deliverables and success-fee terms |
| Payment integration | Plugin setup $250; API integration $750; subscriptions/marketplace $2,000 | Checkout-flow diagram plus sandbox demo | Gateway transaction fees, KYC, compliance, refunds, webhooks, and currencies stated |
| Business strategy | Strategy sprint $350; GTM plan $1,250; advisory $900/mo | Opportunity scorecard and 90-day roadmap | Workshop count, research depth, deliverable pages, and cadence shown |
| Hiring support | 8% of first-year CTC, $500 minimum per successful hire | Candidate journey / screening rubric | Employer pays only; no candidate fee; 60–90-day replacement terms shown |
| Ongoing support | $199/mo; $499/mo; $1,250/mo | Status/SLA board and maintenance changelog | Included engineering hours, response targets, coverage hours, rollover policy, and overage rate |

The app-development page should **not** retain the current $499 claim for an iOS + Android app, UI/UX, authentication, notifications, admin dashboard, store launch, and support. A 2026 India market benchmark puts a mobile MVP around ₹2.5 lakh+ for a fixed-price build, with broader products materially higher. $499 can instead be a clearly limited “MVP discovery and clickable prototype” offer. [Benchmark source](https://ubikon.in/app-development-cost-india)

For maintenance, a credible baseline is a defined monthly hour bank or about 15–20% of original build cost annually, not an undefined promise of 24/7 monitoring or a 2-hour fix. [Support benchmark](https://varisya.com/guides/dedicated-software-support-cost-india/)

For hiring, list a percentage rather than forcing a fake dollar tier. India recruitment fees commonly fall in the 8.33%–16.67% of annual CTC range; candidates should never pay. [Recruitment benchmark](https://www.ab7solutions.com/pricing/recruitment-cost-in-india)

For legal and payment work, keep government/provider fees independent from Punjab Tech’s service price. Indian trademark fees are published by the government, while payment-gateway delivery ranges greatly with plugin versus custom/webhook/subscription work. [IP India fees](https://ipindia.gov.in/pages/trade-marks/learn/forms-and-official-fees) · [Payment implementation benchmark](https://vedwix.com/pricing/payment-gateway-integration-cost-in-india)

## The first page to rebuild: app development

Keep the real, existing portfolio links only after they are personally verified. Replace the current generic testimonials with three proof cards:

1. **Mindset** — real Play Store button, 3–5 real screens, a client-approved quote, and a one-line “Punjab Tech built…” contribution.
2. **Sailors Platform** — live URL, product screenshot, capabilities delivered, and launch date.
3. **HiringBull** — live URL, screenshot, scope, and measurable result only if the client approves it.

Above pricing, add a “Choose your starting point” estimator (idea/prototype, MVP, growth product) with an explicit quote range and delivery range. Price cards should use milestones such as 40% kickoff / 40% demo / 20% handoff—not discounts. Add a “What you receive at handoff” panel: repository transfer, design files, deployment notes, access transfer, and a 30-day warranty definition.

## SEO: immediate actions and content architecture

The technical baseline has been corrected in this repository: canonical-domain references now use `punjabtech.online`, the sitemap lists all service pages, and `robots.txt` points to that sitemap. Deploy these changes, then submit the sitemap in Google Search Console and Bing Webmaster Tools.

Next, implement page-level canonical URLs and unique title/description tags. Do not place `<title>` and `<meta>` tags inside React page bodies; browsers/search engines may ignore or mishandle them. Use a single head-management component and emit valid Service + FAQ JSON-LD only when the visible content is real.

Make one useful article cluster per high-value service rather than attempting broad global keywords:

- App development: “mobile app MVP cost,” “React Native vs Flutter,” “app launch checklist.”
- Web: “Next.js website cost,” “website redesign checklist,” “Core Web Vitals for service businesses.”
- Marketing: “SEO retainer deliverables,” “Google Ads audit checklist,” “marketing KPI dashboard.”
- Each article must link to its service page, a related case study, and a contact/estimate CTA.

Create pages with a specific audience and market, e.g. “React Native MVP development for SaaS founders” rather than claiming to be the best app developer worldwide. Global organic traffic comes from relevance, proof, useful original content, and reputable mentions—not keyword repetition.

## Rollout order

1. Collect/approve proof: three portfolio case studies, client permission, team profiles, legal/business identity, payment and contract terms.
2. Rebuild app-development page with real evidence and the new price structure.
3. Rebuild web, CRM, and payment pages; these have the strongest direct commercial intent.
4. Rebuild recurring-service pages with monthly deliverables and cancellation/SLA terms.
5. Rebuild advisory/legal/hiring pages with compliance disclaimers and credentials.
6. Publish the article clusters, submit sitemap, inspect indexing, and measure qualified consultation conversion—not only visits.
