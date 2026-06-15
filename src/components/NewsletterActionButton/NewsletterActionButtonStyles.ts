"use client";

import styled, { css } from "styled-components";

type ActionVariant = "subscribe" | "upgrade";

interface StyledButtonProps {
  $variant: ActionVariant;
}

const subscribeStyles = css`
  background-color: #c41e1e;
  color: #ffffff;
  border: 2px solid transparent;

  &:hover:not(:disabled) {
    background-color: #a01818;
  }

  &:active:not(:disabled) {
    background-color: #801212;
  }
`;

const upgradeStyles = css`
  background-color: #e8b800;
  color: #1a1a1a;
  border: 2px solid transparent;

  &:hover:not(:disabled) {
    background-color: #d4a800;
  }

  &:active:not(:disabled) {
    background-color: #c09800;
  }
`;

export const focusVisibleStyles = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusRing};
    outline-offset: 3px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => `${theme.spacing["2"]} ${theme.spacing["5"]}`};
  border-radius: ${({ theme }) => theme.radii.full};

  font-family: ${({ theme }) => theme.typography.fontFamilySans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  ${({ $variant }) =>
    $variant === "subscribe" ? subscribeStyles : upgradeStyles}

  ${focusVisibleStyles}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
