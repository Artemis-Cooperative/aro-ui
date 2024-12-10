import type { Preview } from "@storybook/web-components";
import type { DesignTokens } from "../types/storybook";

// Import your tailwind CSS
import "../src/styles/tailwind.css";

/**
 * Storybook preview configuration
 * @example
 * // In your stories:
 * export default {
 *   title: 'Components/Button',
 *   parameters: {
 *     backgrounds: { default: 'light' },
 *     viewport: { defaultViewport: 'md' },
 *   },
 * } as Meta;
 */
const preview: Preview = {
  parameters: {
    // =========================================================================
    // 1. DESIGN SYSTEM TOKENS
    // Mirrors tailwind.config.ts structure
    // =========================================================================
    designTokens: {
      /**
       * Color System
       * @example
       * // Primary colors
       * <button class="bg-primary hover:bg-primary-dark text-white">
       *   Primary Button
       * </button>
       *
       * // Dark mode colors
       * <button class="dark:bg-dark-primary dark:hover:bg-dark-primary-light">
       *   Dark Mode Button
       * </button>
       *
       * // Status colors
       * <div class="bg-status-success text-white">Success message</div>
       * <div class="bg-status-error text-white">Error message</div>
       */
      colors: {
        // Light Mode Colors
        primary: {
          values: [
            { name: "DEFAULT", value: "#2563eb" },
            { name: "dark", value: "#1d4ed8" },
            { name: "light", value: "#3b82f6" },
          ],
        },
        secondary: {
          values: [
            { name: "DEFAULT", value: "#64748b" },
            { name: "dark", value: "#475569" },
            { name: "light", value: "#94a3b8" },
          ],
        },
        surface: {
          values: [
            { name: "DEFAULT", value: "#ffffff" },
            { name: "elevated", value: "#f8fafc" },
            { name: "lowered", value: "#f1f5f9" },
          ],
        },
        text: {
          values: [
            { name: "primary", value: "#1e293b" },
            { name: "secondary", value: "#475569" },
            { name: "inverted", value: "#ffffff" },
          ],
        },
        status: {
          values: [
            { name: "success", value: "#22c55e" },
            { name: "error", value: "#ef4444" },
            { name: "warning", value: "#f59e0b" },
            { name: "info", value: "#3b82f6" },
          ],
        },
        background: {
          values: [{ name: "DEFAULT", value: "#ffffff" }],
        },
        border: {
          values: [{ name: "DEFAULT", value: "#e2e8f0" }],
        },

        // Dark Mode Colors
        dark: {
          primary: {
            values: [
              { name: "DEFAULT", value: "#3b82f6" },
              { name: "dark", value: "#2563eb" },
              { name: "light", value: "#60a5fa" },
            ],
          },
          secondary: {
            values: [
              { name: "DEFAULT", value: "#94a3b8" },
              { name: "dark", value: "#64748b" },
              { name: "light", value: "#cbd5e1" },
            ],
          },
          surface: {
            values: [
              { name: "DEFAULT", value: "#1e293b" },
              { name: "elevated", value: "#334155" },
              { name: "lowered", value: "#0f172a" },
            ],
          },
          text: {
            values: [
              { name: "primary", value: "#f8fafc" },
              { name: "secondary", value: "#cbd5e1" },
              { name: "inverted", value: "#1e293b" },
            ],
          },
          status: {
            values: [
              { name: "success", value: "#4ade80" },
              { name: "error", value: "#f87171" },
              { name: "warning", value: "#fbbf24" },
              { name: "info", value: "#60a5fa" },
            ],
          },
          background: {
            values: [{ name: "DEFAULT", value: "#0f172a" }],
          },
          border: {
            values: [{ name: "DEFAULT", value: "#334155" }],
          },
        },
      },

      /**
       * Spacing System
       * @example
       * // Padding
       * <div class="p-md">Medium padding (1rem)</div>
       *
       * // Margin with responsive values
       * <div class="mt-sm md:mt-lg">
       *   Responsive margins
       * </div>
       *
       * // Gap in flex/grid
       * <div class="flex gap-md">
       *   <div>Item 1</div>
       *   <div>Item 2</div>
       * </div>
       */
      spacing: {
        values: [
          { name: "2xs", value: "0.125rem" }, // 2px
          { name: "xs", value: "0.25rem" }, // 4px
          { name: "sm", value: "0.5rem" }, // 8px
          { name: "md", value: "1rem" }, // 16px
          { name: "lg", value: "1.5rem" }, // 24px
          { name: "xl", value: "2rem" }, // 32px
          { name: "2xl", value: "2.5rem" }, // 40px
          { name: "3xl", value: "3rem" }, // 48px
        ],
      },

      /**
       * Border Radius System
       * @example
       * // Basic usage
       * <div class="rounded">Default radius (0.5rem)</div>
       *
       * // Different sizes
       * <button class="rounded-lg">Large radius</button>
       * <div class="rounded-full">Circular/Pill shape</div>
       */
      borderRadius: {
        values: [
          { name: "none", value: "0" },
          { name: "sm", value: "0.25rem" },
          { name: "DEFAULT", value: "0.5rem" },
          { name: "md", value: "0.75rem" },
          { name: "lg", value: "1rem" },
          { name: "full", value: "9999px" },
        ],
      },

      /**
       * Typography System
       * @example
       * // Font sizes with line height
       * <p class="text-sm">Small text</p>
       * <h1 class="text-2xl">Large heading</h1>
       *
       * // Font weights
       * <p class="font-semibold">Semibold text</p>
       *
       * // Complete text styling
       * <p class="
       *   text-lg
       *   font-medium
       *   text-text-primary
       *   dark:text-dark-text-primary
       * ">
       *   Styled paragraph
       * </p>
       */
      typography: {
        fontSizes: {
          values: [
            { name: "xs", value: "0.75rem", lineHeight: "1rem" },
            { name: "sm", value: "0.875rem", lineHeight: "1.25rem" },
            { name: "base", value: "1rem", lineHeight: "1.5rem" },
            { name: "lg", value: "1.125rem", lineHeight: "1.75rem" },
            { name: "xl", value: "1.25rem", lineHeight: "1.75rem" },
            { name: "2xl", value: "1.5rem", lineHeight: "2rem" },
            { name: "3xl", value: "1.875rem", lineHeight: "2.25rem" },
          ],
        },
        fontWeights: {
          values: [
            { name: "normal", value: "400" },
            { name: "medium", value: "500" },
            { name: "semibold", value: "600" },
            { name: "bold", value: "700" },
          ],
        },
        fontFamilies: {
          values: [
            { name: "sans", value: "Inter, system-ui, sans-serif" },
            { name: "mono", value: "JetBrains Mono, monospace" },
          ],
        },
      },

      /**
       * Shadow System
       * @example
       * // Basic shadows
       * <div class="shadow">Default shadow</div>
       *
       * // Responsive shadows
       * <div class="
       *   shadow-sm
       *   hover:shadow-lg
       *   dark:shadow-dark-sm
       *   dark:hover:shadow-dark-lg
       * ">
       *   Interactive shadow
       * </div>
       */
      shadows: {
        values: [
          { name: "none", value: "none" },
          { name: "sm", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
          { name: "DEFAULT", value: "0 1px 3px 0 rgb(0 0 0 / 0.1)" },
          { name: "md", value: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
          { name: "lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.1)" },
          { name: "xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.1)" },
          { name: "dark-sm", value: "0 1px 2px 0 rgb(0 0 0 / 0.15)" },
          { name: "dark-DEFAULT", value: "0 1px 3px 0 rgb(0 0 0 / 0.2)" },
          { name: "dark-md", value: "0 4px 6px -1px rgb(0 0 0 / 0.25)" },
          { name: "dark-lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.3)" },
          { name: "dark-xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.35)" },
        ],
      },
      /**
       * Z-Index System
       * @example
       * // Layering elements
       * <div class="relative">
       *   <div class="z-behind">Background element</div>
       *   <div class="z-default">Default layer</div>
       *   <div class="z-dropdown">Dropdown menu</div>
       * </div>
       *
       * // Modal overlay example
       * <div class="z-modal fixed inset-0 bg-black/50">
       *   <div class="z-modal relative bg-white">
       *     Modal content
       *   </div>
       * </div>
       */
      zIndex: {
        values: [
          { name: "behind", value: "-1" },
          { name: "default", value: "1" },
          { name: "dropdown", value: "1000" },
          { name: "sticky", value: "1200" },
          { name: "modal", value: "1300" },
          { name: "popover", value: "1400" },
          { name: "tooltip", value: "1500" },
        ],
      },

      /**
       * Transition System
       * @example
       * // Basic transition
       * <button class="
       *   transition-colors
       *   duration-default
       *   ease-in-out
       *   hover:bg-primary-dark
       * ">
       *   Hover me
       * </button>
       *
       * // Complex animations
       * <div class="
       *   transition-all
       *   duration-slow
       *   ease-out
       *   hover:scale-105
       *   hover:shadow-lg
       *   active:scale-95
       * ">
       *   Interactive element
       * </div>
       *
       * // Loading state
       * <div class="
       *   transition-opacity
       *   duration-fast
       *   ease-in-out
       *   opacity-0
       *   data-[loaded]:opacity-100
       * ">
       *   Content
       * </div>
       */
      transitions: {
        properties: {
          values: [
            {
              name: "default",
              value:
                "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
            },
            {
              name: "colors",
              value: "background-color, border-color, color, fill, stroke",
            },
            { name: "opacity", value: "opacity" },
            { name: "shadow", value: "box-shadow" },
            { name: "transform", value: "transform" },
          ],
        },
        timingFunctions: {
          values: [
            { name: "default", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
            { name: "in", value: "cubic-bezier(0.4, 0, 1, 1)" },
            { name: "out", value: "cubic-bezier(0, 0, 0.2, 1)" },
            { name: "in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
          ],
        },
        durations: {
          values: [
            { name: "default", value: "150ms" },
            { name: "fast", value: "100ms" },
            { name: "slow", value: "300ms" },
          ],
        },
      },
    } satisfies DesignTokens,

    // =========================================================================
    // 2. THEME SETTINGS
    // =========================================================================
    /**
     * Theme Configuration
     * @example
     * // In your stories:
     * export const DarkTheme = () => `
     *   <div class="dark">
     *     <YourComponent />
     *   </div>
     * `;
     *
     * // Force dark theme
     * DarkTheme.parameters = {
     *   themes: { default: 'dark' }
     * };
     *
     * // Testing both themes
     * export const ThemeToggle = () => `
     *   <div class="dark:bg-dark-background">
     *     <YourComponent />
     *   </div>
     * `;
     */
    themes: {
      default: "light",
      list: [
        { name: "light", class: "light", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#0f172a" },
      ],
    },
    /**
     * Background Options
     * @example
     * // In your stories:
     * export const OnDarkBackground = () => `
     *   <YourComponent />
     * `;
     * OnDarkBackground.parameters = {
     *   backgrounds: { default: 'dark' }
     * };
     *
     * // Testing multiple backgrounds
     * export const WithBackgrounds = () => `
     *   <YourComponent />
     * `;
     * WithBackgrounds.parameters = {
     *   backgrounds: {
     *     default: 'light',
     *     values: [
     *       { name: 'light', value: '#ffffff' },
     *       { name: 'dark', value: '#0f172a' },
     *       { name: 'brand', value: '#2563eb' }
     *     ]
     *   }
     * };
     */

    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0f172a" },
        { name: "gray", value: "#f8fafc" },
      ],
    },

    // =========================================================================
    // 3. VIEWPORT & LAYOUT
    // =========================================================================
    /**
     * Viewport Settings
     * @example
     * // Responsive testing in stories:
     * export const ResponsiveComponent = () => `
     *   <div class="
     *     w-full
     *     p-4
     *     sm:p-6
     *     md:p-8
     *     lg:p-10
     *   ">
     *     <h1 class="text-lg md:text-xl lg:text-2xl">
     *       Responsive Header
     *     </h1>
     *   </div>
     * `;
     *
     * // Testing specific breakpoints
     * export const MobileView = Template.bind({});
     * MobileView.parameters = {
     *   viewport: { defaultViewport: 'sm' }
     * };
     *
     * export const TabletView = Template.bind({});
     * TabletView.parameters = {
     *   viewport: { defaultViewport: 'md' }
     * };
     *
     * // Testing responsive behavior
     * export const ResponsiveLayout = {
     *   render: () => Template,
     *   parameters: {
     *     chromatic: { viewports: [320, 768, 1024] }
     *   }
     * };
     */
    viewport: {
      viewports: {
        sm: {
          name: "SM (640px)",
          styles: { width: "640px", height: "568px" },
        },
        md: {
          name: "MD (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        lg: {
          name: "LG (1024px)",
          styles: { width: "1024px", height: "768px" },
        },
        xl: {
          name: "XL (1280px)",
          styles: { width: "1280px", height: "900px" },
        },
        "2xl": {
          name: "2XL (1536px)",
          styles: { width: "1536px", height: "1024px" },
        },
      },
      defaultViewport: "lg",
    },

    /**
     * Layout Settings
     * @example
     * // Custom padding for specific story
     * export const CustomLayout = () => `
     *   <YourComponent />
     * `;
     * CustomLayout.parameters = {
     *   layout: {
     *     padding: '4rem',
     *     fullscreen: false
     *   }
     * };
     *
     * // Fullscreen layout
     * export const FullscreenView = () => `
     *   <YourComponent />
     * `;
     * FullscreenView.parameters = {
     *   layout: { fullscreen: true }
     * };
     */
    layout: {
      padding: "2rem",
      fullscreen: false,
    },
    // =========================================================================
    // 4. STORYBOOK FEATURES
    // =========================================================================
    /**
     * Documentation Settings
     * @example
     * // In your component stories:
     * import type { Meta, StoryObj } from '@storybook/web-components';
     *
     * const meta = {
     *   title: 'Components/Button',
     *   component: 'my-button',
     *   tags: ['autodocs'],
     *   parameters: {
     *     docs: {
     *       description: {
     *         component: 'A customizable button component with various styles.',
     *       },
     *     },
     *   },
     *   argTypes: {
     *     variant: {
     *       control: 'select',
     *       options: ['primary', 'secondary'],
     *       description: 'Button variant',
     *     },
     *   },
     * } satisfies Meta;
     */
    docs: {
      description: {
        component: "Default component description",
      },
      source: {
        type: "dynamic",
        language: "typescript",
        excludeDecorators: true,
      },
    },

    /**
     * Controls Settings
     * @example
     * // In your stories:
     * export default {
     *   title: 'Components/Card',
     *   argTypes: {
     *     backgroundColor: {
     *       control: { type: 'color' },
     *       presetColors: [
     *         { color: '#2563eb', title: 'Primary' },
     *         { color: '#64748b', title: 'Secondary' },
     *       ],
     *     },
     *     size: {
     *       control: 'select',
     *       options: ['sm', 'md', 'lg'],
     *     },
     *     isLoading: {
     *       control: 'boolean',
     *     },
     *   },
     * };
     */
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      sort: "requiredFirst",
    },

    /**
     * Actions Settings
     * @example
     * // In your stories:
     * export default {
     *   title: 'Components/Button',
     *   argTypes: {
     *     onClick: { action: 'clicked' },
     *     onHover: { action: 'hovered' },
     *   },
     * };
     *
     * // Using actions in template
     * export const Primary = {
     *   render: (args) => `
     *     <button @click=${args.onClick}>
     *       Click me
     *     </button>
     *   `,
     * };
     */
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },

    /**
     * Interaction Testing
     * @example
     * // In your stories:
     * import { expect } from '@storybook/jest';
     * import { userEvent, within } from '@storybook/testing-library';
     *
     * export const WithInteractions = {
     *   play: async ({ canvasElement }) => {
     *     const canvas = within(canvasElement);
     *     const button = canvas.getByRole('button');
     *     await userEvent.click(button);
     *     await expect(button).toHaveClass('clicked');
     *   },
     * };
     */
    interactions: {
      disabled: false,
    },

    /**
     * Accessibility Settings
     * @example
     * // In your stories:
     * export const WithA11y = {
     *   parameters: {
     *     a11y: {
     *       config: {
     *         rules: [
     *           {
     *             id: 'color-contrast',
     *             enabled: true,
     *           },
     *           {
     *             id: 'label',
     *             enabled: true,
     *           },
     *         ],
     *       },
     *     },
     *   },
     * };
     *
     * // Testing specific scenarios
     * export const ScreenReaderText = {
     *   render: () => `
     *     <button>
     *       <span class="sr-only">Close</span>
     *       <IconX />
     *     </button>
     *   `,
     * };
     */
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default preview;
