import React from "react";
import type { User, Newsletter } from "@/types";
import {
  getNewsletterActionLabel,
  getNewsletterActionAriaLabel,
} from "@/utils/newsletters";
import { StyledButton } from "./NewsletterActionButtonStyles";

interface NewsletterActionButtonProps {
  user: User;
  newsletter: Newsletter;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Renders a subscribe or upgrade CTA button based on the user's access rights.
 */

export default function NewsletterActionButton({
  user,
  newsletter,
  onClick,
  disabled = false,
}: NewsletterActionButtonProps) {
  const label = getNewsletterActionLabel(user, newsletter);
  const ariaLabel = getNewsletterActionAriaLabel(user, newsletter);
  const variant = label === "S'inscrire" ? "subscribe" : "upgrade";

  return (
    <StyledButton
      type="button"
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}
