import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";
import type { User, UserProfileKey } from "@/types";

export const USER_PROFILES: Record<UserProfileKey, User> = {
  ONE: USER_WITH_ONE_SUBSCRIPTION,
  MULTIPLE: USER_WITH_MULTIPLE_SUBSCRIPTION,
  NONE: USER_WITHOUT_SUBSCRIPTION,
} as const;

export const DEFAULT_PROFILE_KEY: UserProfileKey = "ONE";

/**
 * Resolves the user profile from a search parameter.
 *
 * - Unknown or missing value → fallback to DEFAULT_PROFILE_KEY
 * - Case insensitive: "one" = "ONE"
 */
export const resolveUserFromParam = (param: string | undefined): User => {
  if (!param) return USER_PROFILES[DEFAULT_PROFILE_KEY];

  const normalized = param.toUpperCase() as UserProfileKey;

  const isValid = Object.keys(USER_PROFILES).includes(normalized);
  if (!isValid) return USER_PROFILES[DEFAULT_PROFILE_KEY];

  return USER_PROFILES[normalized];
};

/**
 * Returns label for each profile.
 */
export const getUserProfileLabel = (key: UserProfileKey): string => {
  const labels: Record<UserProfileKey, string> = {
    ONE: "Profil avec un abonnement actif",
    MULTIPLE: "Profil avec plusieurs abonnements actifs",
    NONE: "Profil sans abonnement",
  };

  return labels[key];
};

/**
 * Returns the short label for the switcher.
 */
export const getUserProfileShortLabel = (key: UserProfileKey): string => {
  const labels: Record<UserProfileKey, string> = {
    ONE: "1 abonnement",
    MULTIPLE: "Multi-abonnements",
    NONE: "Sans abonnement",
  };

  return labels[key];
};
