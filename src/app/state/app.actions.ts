import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor() {
  }
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;

  constructor() {
  }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() {
  }
}

export type AppActions =
  | IncrementAction
  | DecrementAction
  | ResetAction;
