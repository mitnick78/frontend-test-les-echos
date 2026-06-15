import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  ),
  title: "Newsletters — Les Echos",
  description:
    "Découvrez et abonnez-vous aux newsletters Les Echos, Capital, et bien plus encore.",
  keywords: ["newsletter", "presse", "Les Echos", "actualité", "abonnement"],
  authors: [{ name: "Les Echos" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Newsletters — Les Echos",
    description: "Découvrez nos newsletters et restez informé.",
    type: "website",
    locale: "fr_FR",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
