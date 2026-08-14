import { token } from "./tokens";

export const semantics = {
  selection: {
    bg: token.colorMix(token.color("gray", 500), "50%"),
    text: token.color("gray", 200),
  },
  status: {
    error: { color: token.color("red", 500) },
    success: { color: token.color("green", 500) },
    warning: { color: token.color("yellow", 500) },
  },
  tone: {
    blue: token.color("blue", 600),
    cyan: token.color("cyan", 600),
    error: token.color("red", 600),
    gray: token.color("gray", 600),
    green: token.color("green", 600),
    info: token.color("blue", 600),
    muted: token.color("gray", 600),
    purple: token.color("ruby", 600),
    red: token.color("red", 600),
    success: token.color("green", 600),
    warning: token.color("yellow", 600),
    yellow: token.color("yellow", 600),
  },
};

export const theme = {
  dark: "dark",
  defaultMode: "dark",
  light: "light",
  modes: {
    dark: { scheme: "dark" },
    light: { scheme: "light" },
  },
};

export const runtime = {
  progress: {
    color: token.color("gray", 600),
  },
  theme,
};
