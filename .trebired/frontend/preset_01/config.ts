import type { FrontendConfig } from "@trebired/frontend/config";

import { components } from "./components";
import { palette } from "./palette";
import { systems } from "./systems";
import { runtime, semantics } from "./theme";

export default {
  forVersion: "29.11.0",
  assets: {
    fonts: {
      families: {
        sans: {
          package: "inter",
          family: "Inter",
          subsets: ["latin", "latin-ext"],
          weights: [100, 400, 500, 600, 700],
          styles: ["normal", "italic"],
        },
      },
      sans: "\"Inter\", sans-serif",
    },
    icons: {
      endpoint: "/__icons/svg",
      packs: ["remixicon", "simple-icons", "material-icon-theme"],
    },
  },
  components,
  design: {
    interactions: {
      activePress: {
        enabled: true,
      },
    },
    palette,
    semantics,
  },
  runtime,
  systems,
} satisfies FrontendConfig;
