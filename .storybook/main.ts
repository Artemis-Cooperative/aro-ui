import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      plugins: [
        {
          name: 'astro-support',
          transform(code, id) {
            if (id.endsWith('.astro')) {
              return {
                code: `export default function() { return \`${code}\` }`,
                map: null,
              };
            }
          },
        },
      ],
      optimizeDeps: {
        include: [],
        exclude: [],
      },
      build: {
        commonjsOptions: {
          include: [/node_modules/],
        },
      },
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
      server: {
        fs: {
          strict: true,
          allow: ['..'],
        },
      },
    });
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;
