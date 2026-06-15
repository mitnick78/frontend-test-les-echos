import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import type { Newsletter, NewslettersBySite } from "@/types";
import { groupBySite } from "@/utils/newsletters";

/**
 * Simulates a fetch() call.
 */

const simulateNetworkDelay = (ms = 100): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches all newsletters.
 */
export const fetchNewsletters = async (): Promise<Newsletter[]> => {
  await simulateNetworkDelay();

  return NEWSLETTER_ITEMS as Newsletter[];
};

/**
 * Fetches the newsletters already grouped by site.
 */
export const fetchNewslettersBySite = async (): Promise<NewslettersBySite> => {
  const newsletters = await fetchNewsletters();
  return groupBySite(newsletters);
};

/**
 * Fetches the newsletters for a specific site.
 */
export const fetchNewslettersBySiteName = async (
  site: string,
): Promise<Newsletter[]> => {
  const newsletters = await fetchNewsletters();
  return newsletters.filter((n) => n.site === site);
};
