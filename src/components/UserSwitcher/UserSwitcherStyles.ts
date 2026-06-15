import styled, { css } from "styled-components";

interface StyledSwitcherButtonProps {
  $isActive: boolean;
}

export const StyledNav = styled.nav`
  position: sticky; // ← sticky
  top: 0; // ← collé en haut
  z-index: 100; // ← au dessus du contenu
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3"]};
  padding: ${({ theme }) => `${theme.spacing["3"]} ${theme.spacing["6"]}`};
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledNavHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["1"]};
`;

export const StyledNavTitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilySans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const StyledNavSubtitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilySans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing["2"]};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const activeButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border-color: ${({ theme }) => theme.colors.primary};
`;

const inactiveButtonStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-color: ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSwitcherButton = styled.button<StyledSwitcherButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["2"]};
  padding: ${({ theme }) => `${theme.spacing["2"]} ${theme.spacing["4"]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1.5px solid;

  font-family: ${({ theme }) => theme.typography.fontFamilySans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  cursor: pointer;
  white-space: nowrap;
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $isActive }) => ($isActive ? activeButtonStyles : inactiveButtonStyles)}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusRing};
    outline-offset: 3px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
