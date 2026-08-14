import { semantic, token, ui } from "#2ya03ugoub24";

export const overlays = {
  modal: {
    backdrop: {
      background: token.colorMix(token.color("gray", 1000), "48%"),
      opacity: "1",
      padding: "24px",
    },
    content: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      maxHeight: "min(80vh, 720px)",
      padding: "20px",
      radius: ui.radiusLg,
      shadow: token.variable("shadow-overlay-lg"),
      width: "min(720px, calc(100vw - 48px))",
    },
    motion: {
      duration: ui.transitionFast,
      easing: "ease",
      initialScale: "0.96",
      openScale: "1",
    },
  },
  popover: {
    item: {
      root: {
        height: "35px",
        padding: "5px 10px",
        radius: ui.radiusSm,
      },
      states: {
        hover: {
          background: token.color("gray", 800),
        },
        selected: {
          background: token.color("gray", 800),
        },
      },
    },
    panel: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      gap: "2px",
      padding: "8px",
      radius: ui.radiusLg,
    },
  },
  tooltip: {
    arrow: {
      borderWidth: ui.borderWidth,
      size: "8px",
    },
    motion: {
      duration: "170ms",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    panel: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      fontFamily: ui.fontSans,
      fontSize: "12px",
      lineHeight: "1.3",
      padding: "7px 9px",
      radius: ui.radiusMd,
    },
  },
};
