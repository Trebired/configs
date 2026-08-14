import { semantic, token, ui } from "#2ya03ugoub24";
import { button } from "./button";

export const surfaces = {
  button,
  card: {
    body: {
      divider: { background: semantic.borderSurface1 },
    },
    root: {
      background: semantic.backgroundPage,
      border: token.border(semantic.borderSurface1),
      minHeight: ui.heightXs4,
      padding: "14px 14px 12px 14px",
      radius: ui.radiusLg,
    },
    row: {
      background: "transparent",
      border: token.border(semantic.borderSurface1),
      padding: "9px 12px",
      radius: ui.radiusLg,
      states: {
        hover: { background: token.color("gray", 900) },
        selected: { background: semantic.backgroundSurface1 },
      },
    },
    title: {
      fontSize: "15px",
      fontWeight: "700",
      margin: "0 0 10px 0",
    },
  },
};
