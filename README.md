# @trebired/configs

Shared Trebired configuration presets for package tooling.

This package owns reusable Trebired tool configuration payloads. Callers own their repository-specific overrides, banned patterns, source boundaries, and package-specific runtime configs.

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

## Public API

The package exports one default config object from the package root. It does not export helper functions.

## What It Does Not Do

This package does not:

- Own application-specific banned patterns.
- Own package runtime config.
- Wrap or replace `@trebired/code-discipline`.
- Ship generated alias maps for consuming repositories.
