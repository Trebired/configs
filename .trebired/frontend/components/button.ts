import { semantic, token, ui } from "#2ya03ugoub24";

export const button = {
  root: {
    background: token.color("gray", 900),
    border: token.border(semantic.borderSurface2),
    color: semantic.textColor,
    fontSize: "12px",
    fontWeight: "600",
    gap: "8px",
    height: "28px",
    padding: "0 12px",
    paddingBlock: "0",
    radius: ui.radiusMd,
  },
  sizes: {
    sm: { fontSize: "11px", height: "24px", paddingInline: "9px" },
    md: { fontSize: "12px", height: "28px", paddingInline: "12px" },
    lg: { fontSize: "13px", height: "34px", paddingInline: "14px" },
  },
  slots: {
    icon: {
      color: token.color("gray", 300),
      fontSize: "15px",
      size: "28px",
      sizes: {
        xs2: { fontSize: "10px", size: "18px" },
        xs: { fontSize: "12px", size: "22px" },
        sm: { fontSize: "14px", size: "26px" },
        md: { fontSize: "16px", size: "30px" },
        lg: { fontSize: "18px", size: "34px" },
      },
    },
  },
  states: {
    disabled: { opacity: "0.55" },
    hover: {
      background: token.color("gray", 800),
      borderColor: token.color("gray", 700),
      color: token.color("gray", 200),
      iconColor: "currentColor",
    },
  },
  tones: {
    green: {
      borderInlineColor: token.color("green", 700),
      states: {
        hover: {
          background: token.color("green", 800),
          borderColor: token.color("green", 700),
          color: token.modeColor("gray", 0, "dark"),
          iconColor: "currentColor",
        },
      },
    },
    highlight: {
      background: token.color("gray", 100),
      borderColor: token.color("gray", 100),
      color: token.color("gray", 950),
      iconColor: token.color("gray", 800),
      states: {
        hover: {
          background: token.color("gray", 200),
          borderColor: token.color("gray", 100),
          color: token.color("gray", 900),
          iconColor: "currentColor",
        },
      },
    },
    red: {
      borderInlineColor: token.color("red", 700),
      states: {
        hover: {
          background: token.color("red", 800),
          borderColor: token.color("red", 700),
          color: token.modeColor("gray", 50, "dark"),
          iconColor: "currentColor",
        },
      },
    },
    yellow: {
      borderInlineColor: token.color("yellow", 700),
      states: {
        hover: {
          background: token.color("yellow", 700),
          borderColor: token.color("yellow", 600),
          color: token.modeColor("gray", 50, "dark"),
          iconColor: "currentColor",
        },
      },
    },
  },
};
