import { defineConfig } from "@trebired/startup/config";

export default defineConfig({
    forVersion: "0.9.0",
    logs: {
      welcome: {
        level: "success",
        on: "ready",
        text: ["Welcome to {product.name} {product.version}"],
      },
      ready: {
        level: "success",
        on: "ready",
        text: ["Server is ready on port {port}. Startup took {duration}."],
      },
    },
    responses: {
      starting: {
        on: "starting",
        text: [
          "{product.name} {product.version} is starting on port {port}.",
          "It will be ready in a few seconds. Try again shortly.",
        ],
        until: ["ready", "failed"],
      },
    },
});
