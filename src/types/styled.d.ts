import type { theme } from "@/app/providers";
type AppTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme {
    colors: AppTheme["colors"];
    typography: AppTheme["typography"];
    spacing: AppTheme["spacing"];
    radii: AppTheme["radii"];
    shadows: AppTheme["shadows"];
    breakpoints: AppTheme["breakpoints"];
    transitions: AppTheme["transitions"];
  }
}
