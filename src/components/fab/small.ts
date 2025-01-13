import type { CustomCSSStyleDeclaration } from "../../types";

export const small: CustomCSSStyleDeclaration = {
  borderRadius: "0.75rem",
  height: "2.5rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  "& .icon": {
    marginLeft: "0",
  },
  "&::before": {
    borderRadius: "0.75rem",
  },
  "&::after": {
    borderRadius: "0.75rem",
  },
};
