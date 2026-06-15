import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "480px",
        lg: "1024px",
      },
      tokens: {
        colors: {
          primary: { value: "#0066CC" },
          primaryHover: { value: "#0052A3" },
          surface: { value: "#FFFFFF" },
          background: { value: "#F8F9FA" },
          border: { value: "#E0E0E0" },
          textPrimary: { value: "#1A1A1A" },
          textSecondary: { value: "#5F6368" },
        },
        fonts: {
          sans: { value: "'Helvetica Neue', 'Arial', sans-serif" },
          serif: { value: "'Georgia', 'Times New Roman', serif" },
        },
        spacing: {
          "1": { value: "0.25rem" },
          "2": { value: "0.5rem" },
          "3": { value: "0.75rem" },
          "4": { value: "1rem" },
          "5": { value: "1.25rem" },
          "6": { value: "1.5rem" },
          "8": { value: "2rem" },
          "10": { value: "2.5rem" },
          "12": { value: "3rem" },
        },
        radii: {
          sm: { value: "4px" },
          md: { value: "8px" },
          lg: { value: "12px" },
          xl: { value: "16px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
