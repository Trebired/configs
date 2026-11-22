import type { FrontendConfig } from "@trebired/frontend/config";

import { components } from "./components";
import { containers } from "./containers";
import { palette } from "./palette";
import { systems } from "./systems";
import { runtime, semantics } from "./theme";

export default {
  forVersion: "32.1.0",
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
      packs: ["remixicon", "simple-icons", "material-icon-theme"],
    },
  },
  components,
  containers,
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
