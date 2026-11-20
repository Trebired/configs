import { defineContainers } from "@trebired/frontend/config";

import { semantic, token, ui } from "./tokens";

const hairline = token.border(semantic.borderSurface1);
const fast = token.variable("tbf-transition-fast", ".18s");
const easing = token.variable("tbf-transition-easing", "ease");
const lineHoverBackground = token.color("gray", 800);
const focusInset = token.css `calc(-1 * ${token.frontend("focus-ring-width", "2px")})`;

export const containers = defineContainers({
    "card": {
      roles: ["card"],
      style: {
        background: semantic.backgroundPage,
        border: hairline,
        borderRadius: ui.radiusLg,
        boxSizing: "border-box",
        color: token.frontend("text", "#000"),
        minHeight: ui.heightXs4,
        minWidth: 0,
        overflow: "hidden",
        padding: "14px 14px 12px 14px",
        transition: token.css `background-color ${fast} ${easing}, border-color ${fast} ${easing}, color ${fast} ${easing}`,
      },
      on: {
        "&.tbf-scroll": { overflow: "auto" },
        "[data-tbf-interactive=\"true\"]:hover": { borderColor: token.frontend("focus", "#000") },
      },
      variants: {
        accent: {
          style: {
            background: token.frontend("focus", "#000"),
            borderColor: token.frontend("focus", "#000"),
            color: token.frontend("page", "#fff"),
          },
        },
        inverse: {
          style: {
            background: token.frontend("text", "#000"),
            borderColor: token.frontend("text", "#000"),
            color: token.frontend("page", "#fff"),
          },
        },
        muted: {
          style: {
            background: token.frontend("surface-muted", "#eee"),
            borderColor: token.frontend("surface-muted", "#eee"),
            color: token.frontend("text", "#000"),
          },
        },
      },
    },
    "card-02": {
      roles: ["card-row"],
      style: {
        background: "transparent",
        border: hairline,
        borderRadius: ui.radiusLg,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        minWidth: 0,
        overflow: "hidden",
        padding: "9px 12px",
        transition: token.css `all ${token.variable("transition-2")} ease`,
      },
      on: {
        "& > *": { minWidth: 0 },
        "&[role=\"button\"]": { cursor: "pointer" },
        "&[role=\"link\"]": { cursor: "pointer" },
        "&[role=\"button\"]:focus-visible": { outlineOffset: focusInset },
        "&[role=\"link\"]:focus-visible": { outlineOffset: focusInset },
        "&[aria-disabled=\"true\"]": { cursor: "not-allowed" },
        ":hover": { background: token.color("gray", 900) },
        "[data-tbf-card-selected=\"true\"]": { background: semantic.backgroundSurface1 },
      },
    },
    "card-03": {
      roles: ["log-line"],
      style: {
        alignItems: "center",
        columnGap: "20px",
        display: "flex",
        flexWrap: "wrap",
        minHeight: "3.5rem",
        padding: "12px 14px",
        rowGap: "8px",
        transition: token.css `background-color ${fast} ${easing}`,
      },
      on: {
        ":hover": { background: lineHoverBackground },
        "&[role=\"button\"]": { cursor: "pointer" },
      },
      parts: {
        end: {
          style: { flexShrink: "0", justifyContent: "flex-end", minWidth: "5.5rem" },
          at: { sm: { minWidth: "auto", order: "3" } },
        },
        fixed: { style: { flexShrink: "0", whiteSpace: "nowrap" } },
        lead: {
          style: { flex: "0 1 18rem", minWidth: 0 },
          at: { sm: { flex: "1 1 calc(100% - 64px)", order: "0" } },
        },
        main: {
          style: { alignItems: "center", display: "flex", flex: "1 1 18rem", gap: "12px", justifyContent: "flex-end", minWidth: 0 },
          at: { sm: { flex: "1 1 0", justifyContent: "flex-start", order: "2" } },
        },
        text: { style: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
        trail: { style: { flexShrink: "0" }, at: { sm: { order: "1" } } },
      },
    },
});
