"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { UserProfileKey } from "@/types";
import {
  USER_PROFILES,
  getUserProfileLabel,
  getUserProfileShortLabel,
  DEFAULT_PROFILE_KEY,
} from "@/utils/user";

import {
  StyledNav,
  StyledNavHeader,
  StyledNavTitle,
  StyledNavSubtitle,
  StyledButtonList,
  StyledSwitcherButton,
} from "./UserSwitcherStyles";

/**
 * User profile switcher — Client Component.
 * Uses searchParams to trigger a full SSR re-render on profile change.
 */
export default function UserSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentKey = (searchParams.get("user")?.toUpperCase() ??
    DEFAULT_PROFILE_KEY) as UserProfileKey;

  const handleSwitch = useCallback(
    (key: UserProfileKey) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("user", key);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const profileKeys = Object.keys(USER_PROFILES) as UserProfileKey[];
  const currentLabel = getUserProfileShortLabel(currentKey);

  return (
    <StyledNav aria-label="Changer de profil utilisateur">
      <StyledNavHeader>
        <StyledNavTitle>Mode démonstration</StyledNavTitle>
        <StyledNavSubtitle aria-live="polite" aria-atomic="true">
          Profil actif : {currentLabel}
        </StyledNavSubtitle>
      </StyledNavHeader>

      <StyledButtonList role="list">
        {profileKeys.map((key) => {
          const isActive = key === currentKey;
          const shortLabel = getUserProfileShortLabel(key);
          const fullLabel = getUserProfileLabel(key);

          return (
            <li key={key}>
              <StyledSwitcherButton
                type="button"
                $isActive={isActive}
                aria-pressed={isActive}
                aria-label={fullLabel}
                onClick={() => handleSwitch(key)}
              >
                {/* Indicateur visuel actif */}
                {isActive && <span aria-hidden="true">✓</span>}
                {shortLabel}
              </StyledSwitcherButton>
            </li>
          );
        })}
      </StyledButtonList>
    </StyledNav>
  );
}
