import type { CustomCSSStyleDeclaration } from "../../types";

export const text: CustomCSSStyleDeclaration = {
  boxShadow: "var(--md-sys-elevation-level-0)",
  backgroundColor: "transparent",
  "&.ripple": {
    transitionDuration: "300ms",
  },
  "&.ripple::after": {
    transitionDuration: "300ms",
  },
  "&:disabled": {
    backgroundColor: "transparent !important",
  },
};
