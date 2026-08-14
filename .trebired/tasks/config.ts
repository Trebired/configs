export default {
  runner: {
    globalConcurrency: 2,
    heartbeatMs: 2000,
    leaseMs: 15000,
    pollIntervalMs: 250,
    staleScanIntervalMs: 5000,
    stopTimeoutMs: 10000,
  },
  storage: {
    postgres: {
      schema: "public",
      tablePrefix: "tb_",
    },
  },
};
