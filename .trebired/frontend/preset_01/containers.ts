import { logLineHoverBackground } from "./data";
import { semantic, token } from "./tokens";

const hairline = token.border(semantic.borderSurface1);

export const containers = {
  "line-card": {
    style: {
      alignItems: "center",
      columnGap: "20px",
      display: "flex",
      flexWrap: "wrap",
      minHeight: "3.5rem",
      padding: "12px 14px",
      rowGap: "8px",
      transition: token.css `background-color ${token.variable("tbf-transition-fast", ".18s")} ${token.variable("tbf-transition-easing", "ease")}`,
    },
    on: {
      ":hover": { background: logLineHoverBackground },
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
  "line-list": {
    style: { display: "flex", flexDirection: "column", gap: "0", minWidth: 0 },
    on: {
      "& > .tbfm-line-card:not([hidden]) ~ .tbfm-line-card:not([hidden])": { borderTop: hairline },
      "& > :not([hidden]):not(.tbfm-line-card) ~ :not([hidden]):not(.tbfm-line-card) > .tbfm-line-card": { borderTop: hairline },
    },
  },
};
