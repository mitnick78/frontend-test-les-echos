import React from "react";
import { css } from "../../../styled-system/css";
import type { Newsletter, User } from "@/types";
import NewsletterCard from "@/components/NewsletterCard";

interface NewsletterGroupProps {
  site: string;
  newsletters: Newsletter[];
  user: User;
}

export default function NewsletterGroup({
  site,
  newsletters,
  user,
}: NewsletterGroupProps) {
  const headingId = `site-heading-${site.toLowerCase()}`;

  return (
    <section
      aria-labelledby={headingId}
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "6",
        paddingY: "10",
        borderBottom: "1px solid",
        borderColor: "border",
        _last: {
          borderBottom: "none",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "4",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "2",
          })}
        >
          <h2
            id={headingId}
            className={css({
              margin: 0,
              fontFamily: "sans",
              fontSize: "lg",
              fontWeight: "bold",
              color: "textPrimary",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: "tight",
            })}
          >
            {site}
          </h2>

          <div
            aria-hidden="true"
            className={css({
              width: "32px",
              height: "3px",
              backgroundColor: "#C41E1E",
              borderRadius: "full",
            })}
          />
        </div>

        <span
          className={css({
            marginLeft: "auto",
            fontFamily: "sans",
            fontSize: "sm",
            color: "textSecondary",
          })}
          aria-label={`${newsletters.length} newsletter${
            newsletters.length > 1 ? "s" : ""
          } disponible${newsletters.length > 1 ? "s" : ""}`}
        >
          {newsletters.length} newsletter{newsletters.length > 1 ? "s" : ""}
        </span>
      </div>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: "6",
        })}
        aria-label={`Newsletters du site ${site}`}
      >
        {newsletters.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            newsletter={newsletter}
            user={user}
          />
        ))}
      </div>
    </section>
  );
}
