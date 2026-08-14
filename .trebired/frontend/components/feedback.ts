import { token, ui } from "#2ya03ugoub24";

export const feedback = {
  flash: {
    container: {
      background: token.color("gray", 900),
      borderColor: token.color("gray", 800),
      color: token.color("gray", 100),
      padding: "15px",
      radius: ui.radiusLg,
    },
    intents: {
      error: { iconColor: token.color("red", 500) },
      info: { iconColor: token.color("gray", 500) },
      success: { iconColor: token.color("green", 500) },
      warn: { iconColor: token.color("yellow", 500) },
    },
    layout: {
      actionsGap: "8px",
      bodyGap: "8px",
      gap: "10px",
    },
    placement: {
      maxWidth: "520px",
      offset: "18px",
    },
    slots: {
      description: {
        color: token.color("gray", 400),
        fontSize: "0.92rem",
      },
      icon: {
        fontWeight: "700",
        size: "15px",
      },
      progress: {
        color: token.color("gray", 600),
        height: "4px",
      },
      title: {
        fontWeight: "400",
      },
    },
  },
};
