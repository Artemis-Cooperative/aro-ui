export interface DesignToken<T> {
  name: string;
  value: T;
}

export interface ColorToken extends DesignToken<string> {}
export interface SpacingToken extends DesignToken<string> {}
export interface BorderRadiusToken extends DesignToken<string> {}
export interface FontSizeToken extends DesignToken<string> {
  lineHeight: string;
}
export interface FontWeightToken extends DesignToken<string> {}
export interface FontFamilyToken extends DesignToken<string> {}
export interface ShadowToken extends DesignToken<string> {}
export interface ZIndexToken extends DesignToken<string> {}
export interface TransitionPropertyToken extends DesignToken<string> {}
export interface TransitionTimingToken extends DesignToken<string> {}
export interface TransitionDurationToken extends DesignToken<string> {}

export interface DesignTokenGroup<T> {
  values: T[];
}

export interface ColorTokenGroup {
  primary: DesignTokenGroup<ColorToken>;
  secondary: DesignTokenGroup<ColorToken>;
  surface: DesignTokenGroup<ColorToken>;
  text: DesignTokenGroup<ColorToken>;
  status: DesignTokenGroup<ColorToken>;
  background: DesignTokenGroup<ColorToken>;
  border: DesignTokenGroup<ColorToken>;
  dark: {
    primary: DesignTokenGroup<ColorToken>;
    secondary: DesignTokenGroup<ColorToken>;
    surface: DesignTokenGroup<ColorToken>;
    text: DesignTokenGroup<ColorToken>;
    status: DesignTokenGroup<ColorToken>;
    background: DesignTokenGroup<ColorToken>;
    border: DesignTokenGroup<ColorToken>;
  };
}

export interface DesignTokens {
  colors: ColorTokenGroup;
  spacing: DesignTokenGroup<SpacingToken>;
  borderRadius: DesignTokenGroup<BorderRadiusToken>;
  typography: {
    fontSizes: DesignTokenGroup<FontSizeToken>;
    fontWeights: DesignTokenGroup<FontWeightToken>;
    fontFamilies: DesignTokenGroup<FontFamilyToken>;
  };
  shadows: DesignTokenGroup<ShadowToken>;
  zIndex: DesignTokenGroup<ZIndexToken>;
  transitions: {
    properties: DesignTokenGroup<TransitionPropertyToken>;
    timingFunctions: DesignTokenGroup<TransitionTimingToken>;
    durations: DesignTokenGroup<TransitionDurationToken>;
  };
}
