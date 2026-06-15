export type SubscriptionRight = "RIGHT_1" | "RIGHT_2";
export type UserProfileKey = "ONE" | "MULTIPLE" | "NONE";

export interface Newsletter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: SubscriptionRight[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: SubscriptionRight[];
}

export type NewslettersBySite = Record<string, Newsletter[]>;
