/**
 * Canonical site configuration. The portfolio is reachable on more than one
 * domain (bishoyrmansour.com and bishoyrmansour.info); this is the single
 * primary URL that all canonical tags, the sitemap and OG metadata point at,
 * so search engines index one source of truth and avoid duplicate content.
 *
 * Override at deploy time with NEXT_PUBLIC_SITE_URL if the canonical changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bishoyrmansour.com"
).replace(/\/$/, "");

export const SITE_NAME = "Bishoy R Mansour";
