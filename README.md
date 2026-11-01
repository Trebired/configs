# @trebired/configs

Shared Trebired configuration presets for Code Discipline and `@trebired/frontend`.

This package owns reusable Trebired configuration payloads. Callers own their repository-specific overrides, banned patterns, source boundaries, and their own `@trebired/frontend` containers.

## Install

Runtime support: Bun 1+.

```sh
bun i @trebired/configs
```

## Quick Start

Use the package as an external Code Discipline preset:

```ts
import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
  presets: {
    use: ["@trebired/configs"],
  },
});
```

## Configuration

### Code Discipline

The root export points at `.trebired/code-discipline/config.ts`. The config declares the Code Discipline major and minor version it targets through `forVersion`.

Repositories add only their own overrides in `.trebired/code-discipline/config.ts`.

### Frontend

`.trebired/frontend/config.ts` is a complete `@trebired/frontend` config: fonts, icon packs, the palette with its dark and light modes, semantic tokens, the theme, runtime options, systems, and every token of every package component, motion included. An application loads it the same way it loads the Code Discipline preset:

```ts
import { defineConfig } from "@trebired/frontend/config";

import { containers } from "./containers";

export default defineConfig({
  forVersion: "29.10.0",
  presets: {
    use: ["@trebired/configs"],
  },
  containers,
});
```

`@trebired/frontend` reads the preset from this package's `.trebired/frontend/config.ts` and merges the application's own config over it. The preset declares the `@trebired/frontend` version it targets through `forVersion`.

The application installs the packages the preset names: `@fontsource/inter`, `remixicon`, `simple-icons` and `material-icon-theme`. A missing icon pack renders no icons from that pack.

`@trebired/frontend` is an optional peer dependency. A repository that loads only the Code Discipline preset does not install it.

## Public API

The package root default-exports the Code Discipline preset. The frontend preset is read from `.trebired/frontend/config.ts` by `@trebired/frontend`, not imported. The package exports no helper functions.

## What It Does Not Do

This package does not:

- Own application-specific banned patterns.
- Own an application's frontend containers. The preset styles the package's components; each application declares its own boxes.
- Set `forVersion` for an application's frontend config. The application states the `@trebired/frontend` version it targets.
- Wrap or replace `@trebired/code-discipline`.
- Ship generated alias maps for consuming repositories.
