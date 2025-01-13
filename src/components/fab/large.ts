import type { CustomCSSStyleDeclaration } from "../../types";

export const large: CustomCSSStyleDeclaration = {
  borderRadius: "1.75rem",
  height: "6rem",
  paddingLeft: "1.875rem",
  paddingRight: "1.875rem",
  "& .icon": {
    marginLeft: "0",
    width: "2.25rem",
    height: "2.25rem",
  },
  "&::before": {
    borderRadius: "1.75rem",
  },
  "&::after": {
    borderRadius: "1.75rem",
  },
};
