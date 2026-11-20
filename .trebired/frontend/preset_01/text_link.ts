import { semantic } from "./tokens";

export const primitiveTextLink = {
  motion: {
    duration: ".3s",
    easing: "ease",
  },
  root: {
    color: semantic.textMuted,
    decorationUnderlineOffset: ".1875rem",
    fontWeight: "inherit",
    letterSpacing: "normal",
    textDecorationColor: "currentColor",
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: "1px",
    textTransform: "none",
    textUnderlineOffset: "3px",
    underlineColor: "transparent",
    underlineHeight: "0",
  },
  states: {
    active: {
      color: "var(--tbf-ui-link-state-hover-color, var(--tbf-text, currentColor))",
    },
    hover: {
      color: semantic.textColor,
      textDecorationColor: "currentColor",
      textDecorationStyle: "solid",
    },
  },
};
