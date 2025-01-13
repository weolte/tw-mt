import type { CustomCSSStyleDeclaration } from "../../types";

export const outline: CustomCSSStyleDeclaration = {
  boxShadow: "var(--md-sys-elevation-level-0)",
  backgroundColor: "transparent",
  border: "0.063rem solid var(--md-sys-color-outline)",
  "&:hover": { boxShadow: "var(--md-sys-elevation-level-1)" },
  "&:focus": {
    borderColor: "var(--md-sys-color-on-surface)",
  },
  "&:focus-visible": {
    borderColor: "var(--md-sys-color-on-surface)",
  },
  "&:disabled": {
    backgroundColor: "transparent !important",
    borderColor:
      "color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)",
  },
};
