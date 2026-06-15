"use client";

import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
  height: 100%;
  transition:
    box-shadow ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  background-color: #c8c8c8;
  flex-shrink: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${StyledArticle}:hover & {
    transform: scale(1.03);
  }
`;

/* Titre en overlay sur l'image */
export const StyledImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing["4"]};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.45)
  );
`;

export const StyledImageTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing["3"]};
  padding: ${({ theme }) => theme.spacing["4"]};
  align-items: center;
  text-align: center;
`;

export const StyledDescription = styled.p`
  margin: 0;
  flex: 1;
  font-family: ${({ theme }) => theme.typography.fontFamilySans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing["3"]};
  margin-top: auto;
  width: 100%;
`;
