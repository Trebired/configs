# @trebired/configs

Shared Trebired configuration presets for Code Discipline, `@trebired/frontend` and `@trebired/startup`.

This package owns reusable Trebired configuration payloads. Callers own their repository-specific overrides, banned patterns, source boundaries, their own `@trebired/frontend` containers, and their own startup logs and responses.

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
| Startup `preset_01` | `.trebired/startup/preset_01/config.ts` | `@trebired/configs/startup/preset_01` |

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

### Startup preset_01

`preset_01` holds the Trebired `@trebired/startup` texts:

- two logs on `ready`: `welcome` (`Welcome to {product.name} {product.version}`) and `ready` (`Server is ready on port {port}. Startup took {duration}.`);
- one response, `starting`, active from `starting` until `ready` or `failed`: `{product.name} {product.version} is starting on port {port}.` then `It will be ready in a few seconds. Try again shortly.`

An application overrides any of them by key, or adds its own logs and responses on its own events:

```ts
import { defineConfig } from "@trebired/startup/config";

export default defineConfig({
  forVersion: "0.9.0",
  presets: {
    use: ["@trebired/configs/startup/preset_01"],
  },
  logs: {
    ready: { enabled: false, on: "ready" },
  },
});
```

`@trebired/frontend` and `@trebired/startup` are optional peer dependencies. A repository installs only the tools whose presets it loads.

## Public API

The package has no import entry. Tools read its presets from the `.trebired/<tool>/<preset>/` folders through `@trebired/utils`. The package exports no helper functions.

## What It Does Not Do

This package does not:

- Own application-specific banned patterns.
- Own an application's frontend containers. A frontend preset styles the package's components; each application declares its own boxes.
- Set `forVersion` for an application's frontend config. The application states the `@trebired/frontend` version it targets.
- Wrap or replace `@trebired/code-discipline`.
- Ship generated alias maps for consuming repositories.
