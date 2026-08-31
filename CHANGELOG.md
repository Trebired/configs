# Changelog

All notable changes to `@trebired/configs` will be documented here.

This project follows semantic versioning once published.

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
