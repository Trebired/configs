export default {
  forVersion: "6.0.15",
  logging: {
    warnings: false,
  },
  ignore: {
    entries: [],
    use_gitignore: true,
  },
  rules: {
    formatting: {},
    bannedFiles: {
      patterns: [
        { glob: "**/*.spec.ts" },
        { glob: "**/*.spec.tsx" },
      ],
    },
    minDeclarationName: {},
    maxCharactersPerLine: {},
    structuralBlankLines: {},
    minFileLines: {},
    maxFileLines: {
      max: 350,
    },
    maxFunctionLines: {
      max: 50,
    },
    redundantPathSegments: {},
    removeComments: {},
    imports: {
      alias: {
        strategy: "random",
      },
      allowRelative: ["./"],
      output: {
        type: "alias-map",
      },
      runtime: {
        normalize: "relative-dot-prefix",
        restoreAfterRun: false,
      },
      removeDeadImports: true,
    },
    dry: {
      minDuplicateCharacters: 120,
    },
  },
};
