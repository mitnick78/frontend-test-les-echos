import type { Newsletter, NewslettersBySite, User } from "@/types";

/**
 * Checks if a user has access to a newsletter.
 *
 * Business rules:
 * - Empty subscriptions on the newsletter → universal access
 * - Otherwise, the user must have at least one subscription in common with the newsletter
 */
export const hasAccess = (user: User, newsletter: Newsletter): boolean => {
  if (newsletter.subscriptions.length === 0) return true;

  return newsletter.subscriptions.some((right) =>
    user.subscriptions.includes(right),
  );
};

/**
 * Returns the groups of newsletters by their `site` key and sorted alphabetically.
 */
export const groupBySite = (newsletters: Newsletter[]): NewslettersBySite => {
  const grouped = newsletters.reduce<NewslettersBySite>((acc, newsletter) => {
    const { site } = newsletter;

    if (!acc[site]) {
      acc[site] = [];
    }

    acc[site].push(newsletter);

    return acc;
  }, {});

  return Object.fromEntries(
    Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)),
  );
};

/**
 * Determines the label for the CTA based on the user's access.
 */
export const getNewsletterActionLabel = (
  user: User,
  newsletter: Newsletter,
): "S'inscrire" | "S'abonner" => {
  return hasAccess(user, newsletter) ? "S'inscrire" : "S'abonner";
};

/**
 * Builds a complete aria-label for the CTA.
 */
export const getNewsletterActionAriaLabel = (
  user: User,
  newsletter: Newsletter,
): string => {
  const label = getNewsletterActionLabel(user, newsletter);
  return `${label} à ${newsletter.title}`;
};
