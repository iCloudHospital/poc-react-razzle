import { StateType, ActionType } from 'typesafe-actions';

declare module 'services' {
  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootState = StateType<typeof import('./root-reducer').default>;
  export type Store = StateType<typeof import('./index').default>;
}
