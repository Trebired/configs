# Changelog

All notable changes to `@trebired/configs` will be documented here.

This project follows semantic versioning once published.

## 0.10.0

- Breaking: the frontend `preset_01` targets `@trebired/frontend` 31.0.0 and the peer range is `^31.0.0`.

## 0.9.1

- The frontend `preset_01` text link has one underline. It drew tbf's hover underline under the dotted text decoration, so a hovered link showed two lines. The dotted decoration is now its only underline, solid colour on hover.

## 0.9.0

- Breaking: the frontend `preset_01` targets `@trebired/frontend` 30.2.0 and the peer range is `^30.2.0`.

## 0.8.0

- Breaking: the frontend `preset_01` targets `@trebired/frontend` 30.1.0 and the peer range is `^30.1.0`.
- The frontend `preset_01` paints a hovered log line gray 800, the colour of a hovered dropdown option. The faint gray 700 at 28% barely showed on the dark log canvas.

## 0.7.0

- Breaking: the frontend `preset_01` targets `@trebired/frontend` 30.0.0 and the peer range is `^30.0.0`.
- The frontend `preset_01` sets the `ink` tone to gray 0, white on the dark theme and near black on the light one.
- The frontend `preset_01` focus colour is gray 400 instead of blue 500. Nothing else in the preset's interface is blue, so focus rings, checked boxes and drop zones no longer stand out in a colour the theme does not use.
- The frontend `preset_01` is the one definition of buttons for its apps. `primary`, the default in `@trebired/frontend` 30.0.0, is the standard button: gray 900 with a `border-surface-2` hairline. `secondary` is the quiet one: transparent with a `border-surface-1` hairline. The `red`, `yellow` and `green` tones colour the side borders of either, and icon buttons are square in sizes `xs2` to `lg`. The `danger` and `ghost` variants are gone; a destructive action is a button with the `red` tone.
- The frontend `preset_01` draws a ticked choice row's border in `border-surface-2`, the hairline tone buttons use, instead of `currentColor`. A ticked row no longer gets a full-contrast white or black outline.

## 0.6.0

- Breaking: every preset has a name under its tool. The Code Discipline baseline moved to `.trebired/code-discipline/preset_01/config.ts`, named `@trebired/configs/code-discipline/preset_01`, and the frontend preset to `.trebired/frontend/preset_01/config.ts`, named `@trebired/configs/frontend/preset_01`. The bare `@trebired/configs` and the package's root export are gone; tools resolve the names through `@trebired/utils`.
- Retargeted the Code Discipline preset at `@trebired/code-discipline` 8.0, the first line that reads named presets. 8.0.1 is its first published release.
- Set the touch-target floor in the frontend `preset_01` to the dense 1.5rem, so text inputs, dropdowns and buttons keep the preset's control heights.
- Retargeted the frontend `preset_01` at `@trebired/frontend` 29.11.0 and raised the peer range to `^29.11.0`.

## 0.5.0

- Added the `@trebired/frontend` preset at `.trebired/frontend/config.ts`. An application loads it with `presets: { use: ["@trebired/configs"] }`, the same shape as the Code Discipline preset. It sets fonts, icon packs, palette, semantic tokens, theme, runtime options, systems and every component token, motion included.
- Added `@trebired/frontend` `^29.10.0` as an optional peer dependency.

## 0.4.0

- Retargeted the preset at `@trebired/code-discipline` 7.2.0. It named 7.1.2, so every project loading this preset failed its gate once code-discipline reached 7.2.

## 0.3.1

### Changed

- Tracks `@trebired/code-discipline` 7.1.2. Only the preset's declared `forVersion` moved; no rule
  configuration changed. 7.1.2 is the release that aligns code-discipline's `@trebired/utils`
  dependency onto `^0.8.0` with the rest of the `@trebired` packages.

## 0.3.0

### Changed

- Targets `@trebired/code-discipline` 7.1.0. That release stops force-excluding `.trebired/code-discipline` from every rule, narrows the generated-artifacts gitignore entry so `tsconfig.paths.json` stays tracked, and adds an imports check that fails when a directory is aliased but not covered by the root tsconfig's `include`. Projects using this preset must upgrade `@trebired/code-discipline` to 7.1.0 at the same time, and any project whose `tsconfig.json#include` omits a scan root it aliases into will need that root added.

## 0.2.2

- Removed dead `config.creator` from `package.json`.

## 0.2.0

- Added the shared Trebired Code Discipline config package.
