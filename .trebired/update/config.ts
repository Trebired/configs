export default {
  client: {
    allowDowngrade: false,
    allowSameVersion: false,
  },
  scheduler: {
    intervalMs: 7200000,
    mode: "check",
    unrefTimer: true,
  },
  selection: {
    entity: "platform",
    product: "platform",
  },
};
