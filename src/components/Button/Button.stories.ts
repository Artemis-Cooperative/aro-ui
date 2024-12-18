import type { StoryObj, Meta } from '@storybook/html';
import type { Props } from './Button.astro';
import Button from './Button.astro';

interface StoryProps extends Props {
  children?: string;
}

const meta = {
  title: 'Components/Button',
  component: (args: Partial<StoryProps>) => Button(args).replace('><slot />', `>${args.children || ''}`),
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

// Base story
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

// Variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
};

// With Icon
export const WithIcon: Story = {
  args: {
    children: `
      <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
      </svg>
      Upload
    `,
  },
  render: (args) => Button({ ...args }).replace('><slot />', `>${args.children}`),
}; 