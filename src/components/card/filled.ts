import type { CustomCSSStyleDeclaration } from "../../types";

export const filled: CustomCSSStyleDeclaration = {
  boxShadow: "var(--md-sys-elevation-level-0)",
  backgroundColor: "var(--md-sys-color-surface-container-highest)",
  "&:hover": { boxShadow: "var(--md-sys-elevation-level-1)" },
};
