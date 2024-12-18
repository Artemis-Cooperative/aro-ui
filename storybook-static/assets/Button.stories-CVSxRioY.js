function r(){return`---
import type { HTMLAttributes } from 'astro/types';

export interface Props extends HTMLAttributes<'button'> {
  /**
   * The variant of the button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /**
   * The size of the button
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * The type of the button
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Additional CSS classes
   */
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  class: className,
  ...rest
} = Astro.props;

// Base classes
const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

// Size classes
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}[size];

// Variant classes
const variantClasses = {
  primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary/50',
  secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary/50',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
  ghost: 'text-primary hover:bg-primary/10 focus:ring-primary/50'
}[variant];

// State classes
const stateClasses = [
  disabled && 'opacity-50 cursor-not-allowed',
  loading && 'cursor-wait'
].filter(Boolean).join(' ');

const classes = [
  baseClasses,
  sizeClasses,
  variantClasses,
  stateClasses,
  className
].filter(Boolean).join(' ');
---

<button
  type={type}
  disabled={disabled || loading}
  class={classes}
  {...rest}
  aria-disabled={disabled || loading}
  aria-busy={loading}
>
  {loading && (
    <span class="mr-2">
      <span class="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" 
            aria-hidden="true">
      </span>
    </span>
  )}
  <slot />
</button> `}const M={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost"],description:"The visual style of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Whether the button is in a loading state",table:{defaultValue:{summary:!1}}},type:{control:"select",options:["button","submit","reset"],description:"The type of the button",table:{defaultValue:{summary:"button"}}}}},s={args:{variant:"primary",children:"Primary Button"},render:e=>r().replace("><slot />",`>${e.children}`)},a={args:{variant:"secondary",children:"Secondary Button"},render:e=>r().replace("><slot />",`>${e.children}`)},t={args:{variant:"outline",children:"Outline Button"},render:e=>r().replace("><slot />",`>${e.children}`)},n={args:{variant:"ghost",children:"Ghost Button"},render:e=>r().replace("><slot />",`>${e.children}`)},o={args:{size:"sm",children:"Small Button"},render:e=>r().replace("><slot />",`>${e.children}`)},l={args:{size:"lg",children:"Large Button"},render:e=>r().replace("><slot />",`>${e.children}`)},i={args:{disabled:!0,children:"Disabled Button"},render:e=>r().replace("><slot />",`>${e.children}`)},c={args:{loading:!0,children:"Loading Button"},render:e=>r().replace("><slot />",`>${e.children}`)},d={args:{children:`
      <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
      </svg>
      Upload
    `},render:e=>r().replace("><slot />",`>${e.children}`)};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,f,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,S,x;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var $,z,w;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,L,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var T,V,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var j,O,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading Button'
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var A,D,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: \`
      <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
      </svg>
      Upload
    \`
  },
  render: args => Button().replace('><slot />', \`>\${args.children}\`)
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const H=["Primary","Secondary","Outline","Ghost","Small","Large","Disabled","Loading","WithIcon"];export{i as Disabled,n as Ghost,l as Large,c as Loading,t as Outline,s as Primary,a as Secondary,o as Small,d as WithIcon,H as __namedExportsOrder,M as default};
