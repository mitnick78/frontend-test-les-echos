import React, { Suspense } from "react";
import type { Metadata } from "next";
import type { UserProfileKey } from "@/types";
import { fetchNewslettersBySite } from "@/services/newsletterService";
import { resolveUserFromParam } from "@/utils/user";
import NewsletterGroup from "@/components/NewsletterGroup";
import UserSwitcher from "@/components/UserSwitcher";
import { css } from "../../styled-system/css";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ user?: string }>;
}): Promise<Metadata> {
  const { user } = await searchParams;
  const resolvedUser = resolveUserFromParam(user);

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
    ),
    title: `Newsletters — ${resolvedUser.firstName} ${resolvedUser.lastName} | Les Echos`,
    description: "Découvrez et abonnez-vous aux newsletters Les Echos.",
  };
}
interface PageProps {
  searchParams: Promise<{ user?: string }>;
}

export default async function NewslettersPage({ searchParams }: PageProps) {
  // Parallel resolution — fetch and searchParams resolved simultaneously
  const [{ user }, newslettersBySite] = await Promise.all([
    searchParams,
    fetchNewslettersBySite(),
  ]);

  const currentUser = resolveUserFromParam(user as UserProfileKey);
  const sites = Object.entries(newslettersBySite);

  return (
    <>
      {/**
       * Suspense is required here because UserSwitcher uses useSearchParams()
       * which needs a Suspense boundary in App Router.
       */}
      <Suspense fallback={null}>
        <UserSwitcher />
      </Suspense>

      <main
        id="main-content"
        tabIndex={-1}
        className={css({
          maxWidth: "1280px",
          marginX: "auto",
          paddingX: { base: "4", md: "6", lg: "10" },
          paddingY: "10",
        })}
      >
        <header
          className={css({
            textAlign: "center",
            marginBottom: "10",
            padding: "8",
            backgroundColor: "#F5F5F5",
            borderRadius: "md",
            border: "1px solid",
            borderColor: "border",
          })}
        >
          <h1
            className={css({
              margin: 0,
              fontFamily: "sans",
              fontSize: { base: "2xl", md: "3xl" },
              fontWeight: "bold",
              color: "textPrimary",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              lineHeight: "tight",
            })}
          >
            Newsletters
          </h1>

          <p
            className={css({
              margin: 0,
              marginTop: "3",
              fontFamily: "sans",
              fontSize: { base: "sm", md: "md" },
              color: "textSecondary",
              lineHeight: "relaxed",
              maxWidth: "600px",
              marginX: "auto",
            })}
          >
            Dans cette page, vous retrouvez l&apos;ensemble des newsletters des
            Echos et des marques satellites.
          </p>
        </header>

        {sites.length === 0 ? (
          <p
            role="status"
            className={css({
              fontFamily: "sans",
              fontSize: "md",
              color: "textSecondary",
              textAlign: "center",
              paddingY: "16",
            })}
          >
            Aucune newsletter disponible pour le moment.
          </p>
        ) : (
          <div
            role="feed"
            aria-label="Liste des newsletters groupées par site"
            aria-busy="false"
          >
            {sites.map(([site, newsletters]) => (
              <NewsletterGroup
                key={site}
                site={site}
                newsletters={newsletters}
                user={currentUser}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
