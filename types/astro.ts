export interface BuildConfig {
  readonly concurrency: number;
  readonly serverEntry: string;
  readonly assetsDir: string;
}

export interface SecurityHeaders {
  readonly [key: string]: string;
}

export interface PathConfig {
  readonly [key: string]: string;
}

export interface PortConfig {
  readonly dev: number;
  readonly prod: number;
}

export interface AliasConfig {
  readonly [key: string]: string;
}
