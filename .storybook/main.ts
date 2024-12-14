import type { StorybookConfig } from "@storybook/web-components-vite";
import type { UserConfig } from "vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    // Consider adding these useful addons:
    // "@storybook/addon-viewport", // for responsive design testing
  ],

  framework: {
    name: "@storybook/web-components-vite",
    options: {
      // You might want to add specific framework options
      // builder: {
      //   useSWC: true, // For faster builds
      // }
    },
  },

  viteFinal: async (config: UserConfig): Promise<UserConfig> => {
    try {
      return mergeConfig(config, {
        // Build optimizations
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../src"),
          },
        },

        // Dependencies optimization
        optimizeDeps: {
          include: [
            // Consider adding frequently used dependencies
          ],
          exclude: [], // Add any problematic packages here
        },

        // Build configuration
        build: {
          commonjsOptions: {
            include: [/node_modules/],
          },
          // Consider adding:
          // sourcemap: true, // for better debugging
          // minify: process.env.NODE_ENV === 'production',
        },

        // CSS processing
        css: {
          postcss: {
            plugins: [
              require("tailwindcss"), // Processes Tailwind class definitions
              require("autoprefixer"), // Adds vendor prefixes like -webkit-, -moz-, etc.
            ],
          },
        },

        // Server configuration
        server: {
          fs: {
            strict: true,
            allow: [".."],
          },
        },

        // For better TypeScript/JSX support
        esbuild: {
          jsxFactory: "h", // For JSX/TSX support
          jsxFragment: "Fragment",
          // Also supports:
          // target: 'es2020', // Specify JS version
          // minify: true, // Minification
        },
      });
    } catch (error) {
      console.error("Error in Storybook Vite config:", error);
      throw error;
    }
  },

  docs: {
    autodocs: "tag", // or "true" to generate docs for all stories
    defaultName: "Documentation", // Default name for auto-generated docs entries
  },

  // Consider adding:
  // staticDirs: ['../public'], // For serving static files
  // features: {
  //   storyStoreV7: true,
  //   buildStoriesJson: true,
  // },
};

export default config;
