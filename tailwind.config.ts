import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      filter: {
        none: "none",
        blur: "blur(4px)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
    },
    variants: {
      extend: {
        filter: ["hover", "focus"],
        backdropFilter: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};

export default config;