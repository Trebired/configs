import { components } from "./components";
import { palette } from "./palette";
import { scales } from "./scales";
import { systems } from "./systems";
import { runtime, semantics } from "./theme";

export default {
  assets: {
    fonts: {
      families: {
        sans: {
          family: "Inter",
          package: "inter",
          styles: ["normal", "italic"],
          subsets: ["latin", "latin-ext"],
          weights: [100, 400, 500, 600, 700],
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
    scales,
    semantics,
  },
  runtime,
  systems,
};
