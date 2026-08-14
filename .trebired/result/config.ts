export default {
  forVersion: "1.2.0",
  tracing: {
    failedResultSeverity: "warn",
    processHooks: {
      exitOnUncaughtException: false,
      exitOnUnhandledRejection: false,
    },
  },
};
