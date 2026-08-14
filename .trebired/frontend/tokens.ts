import { palette } from "./palette";

void palette;

function variable(name: string, fallback?: string) {
  return fallback === undefined ? `var(--${name})` : `var(--${name}, ${fallback})`;
}

function color(family: string, step: string | number) {
  return variable(`${family}-${String(step)}`);
}

function modeColor(family: string, step: string | number, mode: string) {
  return variable(`${family}-${String(step)}-${mode}`);
}

function semanticToken(name: string) {
  return variable(name);
}

function border(borderColor: string, width = variable("border-width")) {
  return `${width} solid ${borderColor}`;
}

function colorMix(inputColor: string, amount: string, target = "transparent") {
  return `color-mix(in srgb, ${inputColor} ${amount}, ${target})`;
}

const token = {
  border,
  color,
  colorMix,
  modeColor,
  semantic: semanticToken,
  variable,
};

const semantic = {
  backgroundPage: token.semantic("background-page"),
  backgroundSurface1: token.semantic("background-surface-1"),
  backgroundSurface2: token.semantic("background-surface-2"),
  borderSurface1: token.semantic("border-surface-1"),
  borderSurface2: token.semantic("border-surface-2"),
  focusColor: token.semantic("focus-color"),
  scrollThumb: token.semantic("scroll-thumb"),
  scrollThumbHover: token.semantic("scroll-thumb-hover"),
  scrollTrack: token.semantic("scroll-track"),
  surface1: token.semantic("surface-1"),
  surface2: token.semantic("surface-2"),
  textColor: token.semantic("text-color"),
  textMuted: token.semantic("text-color-muted"),
};

const ui = {
  borderWidth: token.variable("border-width"),
  fontSans: token.variable("tbf-font-sans", "\"Inter\", sans-serif"),
  gapSm: token.variable("tbf-gap-sm"),
  heightXs4: token.variable("height-xs4", "35px"),
  radiusSm: token.variable("radius-sm"),
  radiusMd: token.variable("radius-md", token.variable("tbf-radius", "0")),
  radiusLg: token.variable("radius-lg", token.variable("tbf-radius", "0")),
  transitionFast: token.variable(
    "transition-fast",
    token.variable("tbf-transition-fast", "120ms ease"),
  ),
};

export { semantic, token, ui };
