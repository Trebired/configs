import { semantic, token, ui } from "#2ya03ugoub24";
import { button } from "./button";

export const primitives = {
  button,
  choice: {
    checked: { background: token.color("gray", 900) },
    control: {
      activeIconColor: token.color("gray", 600),
      borderColor: token.color("gray", 600),
      checkedBackground: token.color("gray", 100),
      checkedBorderColor: token.color("gray", 100),
      checkedColor: token.color("gray", 900),
      color: token.color("gray", 800),
      partialBorderColor: token.color("gray", 400),
      partialColor: token.color("gray", 200),
      partialIconColor: token.color("gray", 300),
    },
  },
  dot: { color: token.color("gray", 600) },
  dropdown: {
    arrow: { color: token.color("gray", 500) },
    menu: { background: token.color("gray", 900) },
    option: {
      states: {
        hover: { background: token.color("gray", 800) },
        selected: { background: token.color("gray", 800) },
      },
    },
  },
  input: {
    file: {
      button: {
        background: token.color("gray", 700),
        states: {
          hover: { background: token.color("gray", 700) },
        },
      },
    },
    states: {
      focus: { color: token.color("gray", 600) },
    },
  },
  loader: { color: token.color("gray", 300) },
  pill: { background: token.color("gray", 800) },
  progress: {
    color: token.color("gray", 400),
    track: token.colorMix(token.color("gray", 400), "22%"),
  },
  tabs: {
    list: { gap: ui.gapSm },
    root: {
      background: "transparent",
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      fontFamily: ui.fontSans,
      fontSize: "14px",
      height: "34px",
      paddingInline: "14px",
      radius: ui.radiusSm,
    },
    states: {
      active: {
        background: semantic.backgroundSurface1,
        borderColor: semantic.borderSurface1,
      },
      hover: {
        background: semantic.backgroundSurface1,
        borderColor: semantic.borderSurface1,
      },
    },
  },
  textLink: {
    root: {
      color: semantic.textMuted,
      fontWeight: "inherit",
      textDecorationLine: "underline",
      textDecorationStyle: "dotted",
      textDecorationThickness: "1px",
      textUnderlineOffset: "3px",
      transition: `color ${ui.transitionFast}`,
    },
    states: {
      hover: {
        color: semantic.textColor,
        textDecorationStyle: "solid",
      },
    },
  },
  toggle: {
    active: { color: token.color("gray", 100) },
    thumb: { background: token.color("gray", 400) },
    track: { background: token.color("gray", 100) },
  },
  upload: {
    actions: { gap: ui.gapSm },
    content: { gap: "4px" },
    cropper: {
      actions: { gap: ui.gapSm },
      description: { color: semantic.textMuted },
      header: { gap: "4px" },
      modal: {
        maxHeight: "min(90vh, 920px)",
        width: "min(960px, calc(100vw - 40px))",
      },
      stage: {
        background: semantic.backgroundSurface1,
        border: token.border(semantic.borderSurface1),
        faceColor: token.colorMix(token.color("gray", 0), "14%"),
        height: "min(62vh, 640px)",
        lineColor: token.color("gray", 0),
        minHeight: "320px",
        overlayColor: token.colorMix(token.color("gray", 1000), "72%"),
        pointBackground: token.color("gray", 0),
        pointBorder: token.border(semantic.textColor),
        pointRadius: ui.radiusSm,
        pointSize: "12px",
        radius: ui.radiusLg,
      },
    },
    hint: {
      color: semantic.textMuted,
      fontSize: "0.92rem",
    },
    list: {
      gap: "4px",
      paddingLeft: "18px",
    },
    preview: {
      background: semantic.backgroundSurface2,
      border: token.border(semantic.borderSurface1),
      emptyColor: semantic.textMuted,
      emptyFontSize: "0.82rem",
      emptyLineHeight: "1.1",
      emptyPadding: "4px",
      radius: ui.radiusLg,
      roundRadius: "999px",
      size: "64px",
    },
    responsive: {
      mobile: {
        cropperModalMaxHeight: "calc(100vh - 24px)",
        cropperModalWidth: "calc(100vw - 24px)",
        cropperStageHeight: "min(52vh, 420px)",
        cropperStageMinHeight: "260px",
      },
    },
    root: {
      color: semantic.textColor,
      gap: ui.gapSm,
    },
    surface: {
      background: semantic.backgroundSurface1,
      border: `${ui.borderWidth} dashed ${semantic.borderSurface1}`,
      color: semantic.textColor,
      gap: "12px",
      minHeight: "72px",
      padding: "12px",
      radius: ui.radiusLg,
      states: {
        drag: {
          background: semantic.backgroundSurface2,
          borderColor: semantic.focusColor,
        },
        hasFiles: {
          borderStyle: "solid",
        },
      },
    },
  },
};
