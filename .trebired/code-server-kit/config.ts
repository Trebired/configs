export default {
  browser: {
    diagnostics: {
      bridgeProperty: "__repositoryIdeBridge",
      policy: {
        bootstrapTimeoutMs: 15000,
        target: "workbench",
      },
    },
    html: {
      stripKnownBrokenModuleScripts: true,
    },
  },
};
