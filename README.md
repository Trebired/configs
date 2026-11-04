# @trebired/configs

Shared Trebired configuration presets for Code Discipline and `@trebired/frontend`.

This package owns reusable Trebired configuration payloads. Callers own their repository-specific overrides, banned patterns, source boundaries, and their own `@trebired/frontend` containers.

## Install

Runtime support: Bun 1+.

```sh
bun i @trebired/configs
```

## Quick Start

Name a preset as `<package>/<tool>/<preset>` in that tool's config:

```ts
import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
  presets: {
    use: ["@trebired/configs/code-discipline/preset_01"],
  },
});
```

## Configuration

### Presets per tool

Each tool's presets live in that tool's folder, one folder per named preset:

| Preset | File | Name in `presets.use` |
| --- | --- | --- |
| Code Discipline `preset_01` | `.trebired/code-discipline/preset_01/config.ts` | `@trebired/configs/code-discipline/preset_01` |
| Frontend `preset_01` | `.trebired/frontend/preset_01/config.ts` | `@trebired/configs/frontend/preset_01` |

Every tool resolves these names through `applyPresets` in `@trebired/utils`. A name always carries the package, the tool and the preset, and a tool refuses a preset written for another tool. Each preset declares the tool version it targets through `forVersion`.

### Code Discipline preset_01

`preset_01` is the Trebired baseline: comment removal, aliases, formatting, structural blank lines, 350-line files, 50-line functions, 150-character lines, the duplicate check and the banned spec files. Repositories add only their own overrides.

### Frontend preset_01

`preset_01` is a complete `@trebired/frontend` config: fonts, icon packs, the palette with its dark and light modes, semantic tokens, the touch-target floor, the theme, runtime options, systems, and every token of every package component, motion included. An application adds only its own containers:

```ts
import { defineConfig } from "@trebired/frontend/config";

import { containers } from "./containers";

export default defineConfig({
  forVersion: "30.0.0",
  presets: {
    use: ["@trebired/configs/frontend/preset_01"],
  },
  containers,
});
```

The application installs the packages the preset names: `@fontsource/inter`, `remixicon`, `simple-icons` and `material-icon-theme`. A missing icon pack renders no icons from that pack.

`@trebired/frontend` is an optional peer dependency. A repository that loads only the Code Discipline preset does not install it.

## Public API

The package has no import entry. Tools read its presets from the `.trebired/<tool>/<preset>/` folders through `@trebired/utils`. The package exports no helper functions.

## What It Does Not Do

This package does not:

- Own application-specific banned patterns.
- Own an application's frontend containers. A frontend preset styles the package's components; each application declares its own boxes.
- Set `forVersion` for an application's frontend config. The application states the `@trebired/frontend` version it targets.
- Wrap or replace `@trebired/code-discipline`.
- Ship generated alias maps for consuming repositories.
