import type { CustomCSSStyleDeclaration } from "../../types";

export const filled: CustomCSSStyleDeclaration = {
  boxShadow: "var(--md-sys-elevation-level-0)",
  backgroundColor: "var(--md-sys-color-primary)",
  "& .icon": {
    fill: "var(--md-sys-color-on-primary)",
  },
  "& .label": {
    color: "var(--md-sys-color-on-primary)",
  },
  "&:hover": { boxShadow: "var(--md-sys-elevation-level-1)" },
  "&::before": {
    backgroundColor: "var(--md-sys-color-on-primary)",
  },
  "&::after": {
    backgroundColor: "var(--md-sys-color-on-primary)",
  },
  "&.secondary": {
    backgroundColor: "var(--md-sys-color-secondary-container)",
    "& .icon": {
      fill: "var(--md-sys-color-on-secondary-container)",
    },
    "& .label": {
      color: "var(--md-sys-color-on-secondary-container)",
    },
    "&::before": {
      backgroundColor: "var(--md-sys-color-on-secondary-container)",
    },
    "&::after": {
      backgroundColor: "var(--md-sys-color-on-secondary-container)",
    },
  },
  "&.error": {
    backgroundColor: "var(--md-sys-color-error)",
    "& .icon": {
      fill: "var(--md-sys-color-on-error)",
    },
    "& .label": {
      color: "var(--md-sys-color-on-error)",
    },
    "&::before": {
      backgroundColor: "var(--md-sys-color-on-error)",
    },
    "&::after": {
      backgroundColor: "var(--md-sys-color-on-error)",
    },
  },
};
