export interface ColorSystem {
  primary: {
    DEFAULT: string;
    dark: string;
    light: string;
  };
  secondary: {
    DEFAULT: string;
    dark: string;
    light: string;
  };
  surface: {
    DEFAULT: string;
    elevated: string;
    lowered: string;
  };
  text: {
    primary: string;
    secondary: string;
    inverted: string;
  };
  status: {
    success: string;
    error: string;
    warning: string;
    info: string;
  };
  background: string;
  border: string;
}
