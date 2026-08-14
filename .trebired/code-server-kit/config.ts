export default {
  forVersion: "1.5.0",
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
