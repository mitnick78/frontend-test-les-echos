"use client";

import React from "react";
import type { Newsletter, User } from "@/types";
import NewsletterActionButton from "@/components/NewsletterActionButton";
import {
  StyledArticle,
  StyledContent,
  StyledDescription,
  StyledFooter,
  StyledImage,
  StyledImageWrapper,
  StyledImageOverlay,
  StyledImageTitle,
} from "./NewsletterCardStyles";

interface NewsletterCardProps {
  newsletter: Newsletter;
  user: User;
}

export default function NewsletterCard({
  newsletter,
  user,
}: NewsletterCardProps) {
  const titleId = `newsletter-title-${newsletter.id}`;

  return (
    <StyledArticle aria-labelledby={titleId}>
      <StyledImageWrapper>
        <StyledImage
          src={newsletter.image}
          alt={`Illustration de la newsletter ${newsletter.title}`}
          width={300}
          height={160}
          loading="lazy"
        />
        <StyledImageOverlay>
          <StyledImageTitle id={titleId}>{newsletter.title}</StyledImageTitle>
        </StyledImageOverlay>
      </StyledImageWrapper>

      <StyledContent>
        <StyledDescription>{newsletter.description}</StyledDescription>

        <StyledFooter>
          <NewsletterActionButton user={user} newsletter={newsletter} />
        </StyledFooter>
      </StyledContent>
    </StyledArticle>
  );
}
