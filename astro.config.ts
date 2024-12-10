import { defineConfig } from "astro/config";
import type { AstroIntegration } from "astro";
import type {
  BuildConfig,
  SecurityHeaders,
  PathConfig,
  PortConfig,
  AliasConfig,
} from "./types/astro";
import tailwind from "@astrojs/tailwind";
import path from "path";
import type { UserConfig as ViteConfig } from "vite";
import type { RollupOptions } from "rollup";

/**
 * Astro Configuration for Aro UI
 * @see https://astro.build/config
 *
 * Features:
 * - TypeScript support with strict type checking
 * - Environment-aware configuration (dev/prod)
 * - Security headers in production
 * - Optimized build settings
 * - Development tools and debugging support
 * - Comprehensive aliasing for imports
 * - Markdown and syntax highlighting
 *
 * Usage:
 * - Development: npm run dev
 * - Production: npm run build
 * - Preview: npm run preview
 *
 * Environment Variables:
 * - NODE_ENV: 'development' | 'production'
 * - BASE_PATH: Base path for deployment
 * - PORT: Server port number
 * - HOST_BINDING: Host binding configuration
 * - OPEN_BROWSER: Auto-open browser in dev mode
 */

// =========================================================================
// Type Definitions
// =========================================================================
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      BASE_PATH?: string;
      PORT?: string;
      HOST_BINDING?: string;
      OPEN_BROWSER?: string;
      SITE_URL?: string;
    }
  }
}

// Path aliases with type safety
const ALIASES: AliasConfig = {
  "@": "./src",
  "@components": "./src/components",
  "@layouts": "./src/layouts",
  "@utils": "./src/utils",
  "@styles": "./src/styles",
  "@assets": "./src/assets",
  "@types": "./src/types",
} as const;

// =========================================================================
// Configuration Constants
// =========================================================================
const CONFIG = {
  ports: {
    dev: 3000,
    prod: 8080,
  } satisfies PortConfig,

  paths: {
    src: "./src",
    public: "./public",
    dist: "./dist",
    client: "./client",
    server: "./server",
  } satisfies PathConfig,

  build: {
    concurrency: 5,
    serverEntry: "entry.mjs",
    assetsDir: "_astro",
  } satisfies BuildConfig,

  security: {
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "X-XSS-Protection": "1; mode=block",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Content-Security-Policy": [
        "default-src 'self'",
        "img-src 'self' data: https:",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' data:",
      ].join("; "),
    } satisfies SecurityHeaders,
  },
} as const;

// =========================================================================
// Environment & Helper Functions
// =========================================================================
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

// Environment validation
const validateEnv = () => {
  const required = ["NODE_ENV"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`,
    );
  }
};

// Port configuration with validation
const getPort = () => {
  const port = parseInt(process.env.PORT || CONFIG.ports.dev.toString());
  if (isNaN(port)) {
    throw new Error("Invalid PORT environment variable");
  }
  if (port < 1 || port > 65535) {
    throw new Error("PORT must be between 1 and 65535");
  }
  return port;
};

// Security headers with environment-specific additions
const getSecurityHeaders = () => ({
  ...CONFIG.security.headers,
  ...(isDev
    ? {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    : {}),
});

// Path resolution with validation
const resolvePath = (pathStr: string) => {
  const resolved = path.resolve(pathStr);
  if (!resolved) {
    throw new Error(`Failed to resolve path: ${pathStr}`);
  }
  return resolved;
};

// Alias resolution
const resolveAliases = () =>
  Object.entries(ALIASES).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: resolvePath(value),
    }),
    {},
  );

// Integration configuration
const getIntegrations = (): AstroIntegration[] => [
  tailwind({
    configFile: "./tailwind.config.ts",
    applyBaseStyles: isDev,
  }),
  // Add more integrations conditionally
  ...(isDev
    ? [
        /* dev-only integrations */
      ]
    : []),
];

// =========================================================================
// Directory Configuration
// =========================================================================
const srcDir = resolvePath(CONFIG.paths.src);
const publicDir = resolvePath(CONFIG.paths.public);
const outDir = resolvePath(CONFIG.paths.dist);

// Development helpers
if (isDev) {
  console.log("Configuration:", {
    environment: process.env.NODE_ENV,
    port: getPort(),
    paths: {
      src: srcDir,
      public: publicDir,
      out: outDir,
    },
  });
}

// Validate environment
validateEnv();

// =========================================================================
// Astro Configuration
// =========================================================================
const config: Parameters<typeof defineConfig>[0] = {
  // =========================================================================
  // Base Configuration
  // =========================================================================
  base: process.env.BASE_PATH || "/",

  // Directory Structure
  srcDir,
  publicDir,
  outDir,

  // =========================================================================
  // Build Configuration
  // =========================================================================
  build: {
    format: "directory",
    assets: CONFIG.build.assetsDir,
    inlineStylesheets: "auto",
    client: resolvePath(path.join(outDir, CONFIG.paths.client)),
    server: resolvePath(path.join(outDir, CONFIG.paths.server)),
    serverEntry: CONFIG.build.serverEntry,
    redirects: true,
    concurrency: CONFIG.build.concurrency,
  },

  // =========================================================================
  // Development Server
  // =========================================================================
  server: {
    port: getPort(),
    host: process.env.HOST_BINDING || false,
    open: process.env.OPEN_BROWSER || false,
    headers: isProd ? getSecurityHeaders() : undefined,
  },

  // =========================================================================
  // Integrations
  // =========================================================================
  integrations: getIntegrations(),

  // =========================================================================
  // Markdown Configuration
  // =========================================================================
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    gfm: true,
    smartypants: true,
  },

  // =========================================================================
  // Vite Configuration
  // =========================================================================
  vite: {
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    resolve: {
      alias: resolveAliases(),
    },
    build: {
      sourcemap: true,
      minify: isProd ? "terser" : false,
      cssCodeSplit: true,
      rollupOptions: {
        onwarn(warning: any, warn: (warning: any) => void) {
          if (warning.code === "BUNDLE_SIZE_WARNING") {
            console.warn("Bundle size warning:", warning.message);
          }
          warn(warning);
        },
        output: {
          manualChunks: isProd
            ? {
                vendor: [], // Add vendor packages here
                styles: ["@/styles"],
                utils: ["@/utils"],
              }
            : undefined,
        },
      } satisfies RollupOptions,
      chunkSizeWarningLimit: 1000,
    },
    server: {
      watch: {
        ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"],
      },
      fs: {
        strict: true,
        allow: ["."],
      },
      // Development-specific options
      ...(isDev && {
        hmr: {
          overlay: true,
        },
        open: process.env.OPEN_BROWSER === "true",
      }),
    },
    // Add optimizations
    optimizeDeps: {
      exclude: ["@astrojs/image"],
    },
  } satisfies ViteConfig,

  // =========================================================================
  // Output Configuration
  // =========================================================================
  output: isProd ? "static" : "server",
};

// Perform final validation
if (isProd) {
  // Additional production checks
  const criticalPaths = [srcDir, publicDir, outDir];
  criticalPaths.forEach((path) => {
    if (!path) {
      throw new Error(`Critical path not found: ${path}`);
    }
  });
}

export default defineConfig(config);
