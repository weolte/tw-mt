type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type CustomCSSStyleDeclaration =
  RecursivePartial<CSSStyleDeclaration> & {
    [key: string]: CustomCSSStyleDeclaration | string;
  };
