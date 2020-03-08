declare module 'services' {
  export type Services = typeof import('./index').default;
}
