"use client";

import React, { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const styledComponentsStyleSheet = useRef(new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.current.getStyleElement();
    styledComponentsStyleSheet.current.instance.clearTag();
    return <>{styles}</>;
  });

  // Client — StyleSheetManager only, no ServerStyleSheet needed
  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager shouldForwardProp={isPropValid}>
        {children as React.ReactElement}
      </StyleSheetManager>
    );
  }

  // Server — collect styles for SSR injection via useServerInsertedHTML
  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.current.instance}
      shouldForwardProp={isPropValid}
    >
      {children as React.ReactElement}
    </StyleSheetManager>
  );
}
