import type { Config } from "tailwindcss";
import type { ColorSystem } from "./types/theme";

/**
 * Tailwind CSS configuration
 * Defines the design system tokens and utility classes
 * @example
 * // In your components:
 * <div class="
 *   bg-primary
 *   hover:bg-primary-dark
 *   dark:bg-dark-primary
 *   text-white
 *   p-md
 *   rounded-lg
 *   shadow-md
 * ">
 *   Component content
 * </div>
 */
const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  safelist: [
    {
      pattern:
        /^(bg|text|border)-(primary|secondary|success|error|warning|info)/,
    },
  ],
  theme: {
    extend: {
      /**
       * Color System
       * Defines the color palette for light and dark modes
       * @example
       * // Basic usage
       * <button class="bg-primary text-white">Button</button>
       *
       * // With hover states
       * <button class="
       *   bg-primary
       *   hover:bg-primary-dark
       *   active:bg-primary-light
       * ">
       *   Interactive Button
       * </button>
       *
       * // Dark mode support
       * <div class="
       *   bg-surface
       *   dark:bg-dark-surface
       *   text-text-primary
       *   dark:text-dark-text-primary
       * ">
       *   Dark mode aware component
       * </div>
       *
       * // Status indicators
       * <div class="bg-status-success">Success</div>
       * <div class="bg-status-error">Error</div>
       * <div class="bg-status-warning">Warning</div>
       * <div class="bg-status-info">Info</div>
       */
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#64748b",
          dark: "#475569",
          light: "#94a3b8",
        },
        surface: {
          DEFAULT: "#ffffff",
          elevated: "#f8fafc",
          lowered: "#f1f5f9",
        },
        text: {
          primary: "#1e293b",
          secondary: "#475569",
          inverted: "#ffffff",
        },
        status: {
          success: "#22c55e",
          error: "#ef4444",
          warning: "#f59e0b",
          info: "#3b82f6",
        },
        background: "#ffffff",
        border: "#e2e8f0",

        // Dark mode colors
        dark: {
          primary: {
            DEFAULT: "#3b82f6",
            dark: "#2563eb",
            light: "#60a5fa",
          },
          secondary: {
            DEFAULT: "#94a3b8",
            dark: "#64748b",
            light: "#cbd5e1",
          },
          surface: {
            DEFAULT: "#1e293b",
            elevated: "#334155",
            lowered: "#0f172a",
          },
          text: {
            primary: "#f8fafc",
            secondary: "#cbd5e1",
            inverted: "#1e293b",
          },
          status: {
            success: "#4ade80",
            error: "#f87171",
            warning: "#fbbf24",
            info: "#60a5fa",
          },
          background: "#0f172a",
          border: "#334155",
        },
      } satisfies ColorSystem & { dark: ColorSystem },

      /**
       * Spacing System
       * Consistent spacing scale for margin, padding, gap, etc.
       * @example
       * // Padding
       * <div class="p-md">Medium padding (1rem)</div>
       *
       * // Margin
       * <div class="mt-lg mb-sm">Vertical margins</div>
       *
       * // Gap in flex layouts
       * <div class="flex gap-sm">
       *   <div>Item 1</div>
       *   <div>Item 2</div>
       * </div>
       *
       * // Responsive spacing
       * <div class="
       *   p-sm    // Mobile: 0.5rem
       *   md:p-md // Tablet: 1rem
       *   lg:p-lg // Desktop: 1.5rem
       * ">
       *   Responsive padding
       * </div>
       */
      spacing: {
        "2xs": "0.125rem",
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "8xl": "96rem",
        "9xl": "128rem",
      },

      /**
       * Border Radius System
       * Consistent rounded corners across components
       * @example
       * // Basic usage
       * <button class="rounded">Default radius (0.5rem)</button>
       *
       * // Size variations
       * <div class="rounded-sm">Small radius</div>
       * <div class="rounded-lg">Large radius</div>
       * <div class="rounded-full">Circular</div>
       *
       * // Mixed radius
       * <div class="rounded-t-lg rounded-b-none">
       *   Top corners only
       * </div>
       *
       * // Responsive radius
       * <div class="
       *   rounded-full
       *   md:rounded-lg
       *   lg:rounded
       * ">
       *   Responsive corners
       * </div>
       */
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        full: "9999px",
        "4xl": "2rem",
      },

      /**
       * Typography System
       * Font sizes, weights, and line heights
       * @example
       * // Font sizes with line height
       * <p class="text-sm">Small text (0.875rem/1.25rem)</p>
       * <p class="text-base">Base text (1rem/1.5rem)</p>
       * <h1 class="text-2xl">Large heading (1.5rem/2rem)</h1>
       *
       * // Font weights
       * <p class="font-normal">Normal text</p>
       * <p class="font-medium">Medium text</p>
       * <strong class="font-bold">Bold text</strong>
       *
       * // Font families
       * <p class="font-sans">Sans-serif text</p>
       * <code class="font-mono">Monospace text</code>
       *
       * // Complete text styling
       * <h1 class="
       *   text-2xl
       *   font-bold
       *   text-text-primary
       *   dark:text-dark-text-primary
       *   leading-tight
       * ">
       *   Styled heading
       * </h1>
       *
       * // Responsive typography
       * <h2 class="
       *   text-lg     // Mobile
       *   md:text-xl  // Tablet
       *   lg:text-2xl // Desktop
       *   font-semibold
       * ">
       *   Responsive heading
       * </h2>
       */
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      /**
       * Shadow System
       * Elevation and depth using box shadows
       * @example
       * // Basic shadows
       * <div class="shadow">Default shadow</div>
       * <div class="shadow-lg">Large shadow</div>
       *
       * // Interactive shadows
       * <button class="
       *   shadow
       *   hover:shadow-md
       *   active:shadow-sm
       *   transition-shadow
       * ">
       *   Interactive element
       * </button>
       *
       * // Dark mode shadows
       * <div class="
       *   shadow-lg
       *   dark:shadow-dark-lg
       *   hover:shadow-xl
       *   dark:hover:shadow-dark-xl
       * ">
       *   Dark mode aware shadow
       * </div>
       *
       * // Card example
       * <div class="
       *   shadow-md
       *   hover:shadow-lg
       *   dark:shadow-dark-md
       *   dark:hover:shadow-dark-lg
       *   transition-shadow
       *   duration-300
       * ">
       *   Card content
       * </div>
       */
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
        // Dark mode shadows
        "dark-sm": "0 1px 2px 0 rgb(0 0 0 / 0.15)",
        "dark-DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.2)",
        "dark-md": "0 4px 6px -1px rgb(0 0 0 / 0.25)",
        "dark-lg": "0 10px 15px -3px rgb(0 0 0 / 0.3)",
        "dark-xl": "0 20px 25px -5px rgb(0 0 0 / 0.35)",
      },

      /**
       * Z-Index System
       * Consistent layering system
       * @example
       * // Basic layering
       * <div class="relative">
       *   <div class="z-behind">Background decoration</div>
       *   <div class="z-default">Main content</div>
       *   <div class="z-dropdown">Dropdown menu</div>
       * </div>
       *
       * // Modal example
       * <div class="z-modal fixed inset-0">
       *   <div class="z-modal bg-black/50">Overlay</div>
       *   <div class="z-modal relative">Modal content</div>
       * </div>
       *
       * // Tooltip example
       * <div class="relative">
       *   <button>Hover me</button>
       *   <div class="z-tooltip absolute">Tooltip content</div>
       * </div>
       */
      zIndex: {
        behind: "-1",
        default: "1",
        dropdown: "1000",
        sticky: "1200",
        modal: "1300",
        popover: "1400",
        tooltip: "1500",
      },

      /**
       * Responsive Breakpoints
       * Mobile-first breakpoint system
       * @example
       * // Responsive layout
       * <div class="
       *   w-full          // Mobile: full width
       *   md:w-1/2       // Tablet: half width
       *   lg:w-1/3       // Desktop: third width
       *   xl:w-1/4       // Large: quarter width
       * ">
       *   Responsive width
       * </div>
       *
       * // Responsive grid
       * <div class="
       *   grid
       *   grid-cols-1    // Mobile: single column
       *   sm:grid-cols-2 // Small: two columns
       *   md:grid-cols-3 // Tablet: three columns
       *   lg:grid-cols-4 // Desktop: four columns
       * ">
       *   Grid content
       * </div>
       *
       * // Responsive spacing
       * <div class="
       *   space-y-4      // Mobile: 1rem gap
       *   md:space-y-6   // Tablet: 1.5rem gap
       *   lg:space-y-8   // Desktop: 2rem gap
       * ">
       *   Stacked content
       * </div>
       */
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      /**
       * Transition Properties
       * Define what properties should animate
       * @example
       * // Basic transitions
       * <button class="
       *   transition-colors  // Only animate colors
       *   hover:bg-primary-dark
       * ">
       *   Color transition
       * </button>
       *
       * // Multiple properties
       * <div class="
       *   transition-all    // Animate everything
       *   hover:scale-105
       *   hover:shadow-lg
       *   hover:bg-primary-light
       * ">
       *   Multiple transitions
       * </div>
       *
       * // Specific properties
       * <div class="
       *   transition-[height,opacity]  // Custom properties
       *   hover:h-32
       *   hover:opacity-75
       * ">
       *   Custom transitions
       * </div>
       */
      transitionProperty: {
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },

      /**
       * Transition Timing Functions
       * Control the acceleration curve of animations
       * @example
       * // Basic easing
       * <button class="
       *   transition-all
       *   ease-default     // Default easing
       *   hover:scale-105
       * ">
       *   Smooth scaling
       * </button>
       *
       * // Different timing functions
       * <div class="
       *   transition-opacity
       *   ease-in          // Fast end
       *   hover:opacity-0
       * ">
       *   Fade out
       * </div>
       *
       * <div class="
       *   transition-all
       *   ease-out         // Fast start
       *   hover:translate-x-4
       * ">
       *   Slide effect
       * </div>
       *
       * // Complex animation
       * <div class="
       *   transition-all
       *   ease-in-out
       *   hover:scale-110
       *   hover:rotate-3
       *   active:scale-95
       * ">
       *   Interactive element
       * </div>
       */
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /**
       * Transition Durations
       * Control how long animations take
       * @example
       * // Different speeds
       * <button class="
       *   transition-colors
       *   duration-fast     // Quick transition
       *   hover:bg-primary
       * ">
       *   Quick button
       * </button>
       *
       * <div class="
       *   transition-all
       *   duration-slow     // Slow transition
       *   hover:scale-110
       * ">
       *   Slow transform
       * </div>
       *
       * // Combined with other properties
       * <div class="
       *   transition-all
       *   duration-default
       *   ease-in-out
       *   hover:shadow-lg
       *   hover:translate-y-[-4px]
       * ">
       *   Hover effect
       * </div>
       *
       * // Complex animation sequence
       * <div class="
       *   group
       *   relative
       * ">
       *   <div class="
       *     absolute
       *     transition-all
       *     duration-slow
       *     ease-in-out
       *     opacity-0
       *     group-hover:opacity-100
       *     group-hover:translate-y-0
       *     translate-y-4
       *   ">
       *     Animated content
       *   </div>
       * </div>
       */
      transitionDuration: {
        default: "150ms",
        fast: "100ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
