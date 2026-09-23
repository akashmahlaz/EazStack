/**
 * Centralised configuration for Punjab Tech.
 *
 * This file is the single source of truth for:
 *  — Google Calendar booking link
 *  — Google Sheets CRM (Google Apps Script) endpoint
 *  — Verified social / contact links
 *
 * Fill in the values at the bottom of this file before deploying.
 * All links here are used by the Navbar, Footer, Hero, Contact form, and CTAs.
 */

export const SITE_URL = "https://punabtech.online";

/**
 * Google Calendar booking link.
 * Replace with your Calendly, Savvycal, or Google Calendar booking page URL.
 */
export const BOOKING_URL =
  "https://calendly.com/akashdalla406/discovery-call-punjab-tech";

/**
 * WhatsApp link (used as a secondary contact channel).
 */
export const WHATSAPP_URL =
  "https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20a%20project";

/**
 * Primary email contact.
 */
export const EMAIL = "akashdalla406@gmail.com";

export const PHONE = "+91 78140 02784";

/**
 * Google Sheets CRM endpoint.
 *
 * This is the Web App URL you get after deploying the Google Apps Script
 * included in `scripts/google-sheets-crm.gs`.
 *
 * If this is empty, the contact form will fall back to a mailto link so the
 * site still works — but you will lose lead capture. Set this up for real ads.
 */
export const GOOGLE_SHEETS_CRM_URL: string | undefined =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_GOOGLE_SHEETS_CRM_URL
    ? import.meta.env.VITE_GOOGLE_SHEETS_CRM_URL
    : undefined;

/**
 * Verified social-profile links for the company.
 * Remove any that you cannot personally verify.
 */
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/punjabtech",
  github: "https://github.com/akashmahlaz",
  twitter: "https://twitter.com/punjabtech",
  whatsapp: WHATSAPP_URL,
} as const;

/**
 * Verified team member profile links.
 * Replace the "#" placeholders with real profile URLs, or remove the key
 * entirely if the member has no public profile.
 */
export const TEAM_PROFILES: Record<
  string,
  { linkedin?: string; github?: string; twitter?: string }
> = {
  "Akash Mahla": {
    linkedin: "https://linkedin.com/in/akashmahlax",
    github: "https://github.com/akashmahlaz",
  },
  "Sahil Dutt": {
    linkedin: "https://www.linkedin.com/in/sahildutt/?skipRedirect=true",
    github: "https://sahilduttpb06.github.io/sahilportfolio/",
  },
  "Satinder Singh": {
    linkedin: "https://linkedin.com/in/satindersingh",
  },
  "Vickeramjit Singh": {
    linkedin: "https://linkedin.com/in/vickeramjit-singh",
  },
  "Arshdeep Singh": {
    linkedin: "https://linkedin.com/in/arshdeepsingh",
  },
};

/**
 * Public-facing company name used across the Navbar, Footer, and legal copy.
 */
export const COMPANY_NAME = "Punjab Tech";

/**
 * Footer navigation columns.
 * - Services: core service offering links
 * - Company: site navigation links
 */
export const FOOTER_NAV = {
  services: {
    label: "Services",
    links: [
      { label: "Mobile App Development", href: "/app-development" },
      { label: "Web Development", href: "/web-development" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Branding & Design", href: "/branding-design" },
      { label: "Social Media Growth", href: "/social-media-growth" },
      { label: "App Store Publishing", href: "/app-store-publishing" },
      { label: "CRM Integration", href: "/crm-integration" },
      { label: "Payment Integration", href: "/payment-integration" },
      { label: "Business Strategy", href: "/business-strategy" },
      { label: "Funding Guidance", href: "/funding-guidance" },
      { label: "Hiring Support", href: "/hiring-support" },
      { label: "Ongoing Support", href: "/ongoing-support" },
    ],
  },
  company: {
    label: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Team", href: "/team" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

/**
 * Legal document links rendered in the footer.
 */
export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
] as const;
