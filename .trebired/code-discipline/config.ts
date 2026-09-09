export default {
  forVersion: "7.2.0",
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
    maxDeclarationName: {},
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
    removeEmptyFolders: {},
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
