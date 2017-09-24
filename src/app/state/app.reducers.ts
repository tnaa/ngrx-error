import { Action } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface State {
  name: string;
  counter: any;
}

const initialState: State = {
  name: 'Awesome Counter',
  counter: 0,
};

export function AppReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AppActions.INCREMENT:

      return Object.assign({}, state, { counter: state.counter + 1 });

    case AppActions.DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });

    case AppActions.RESET:
      return Object.assign({}, state, { counter: 0 });

    default:
      return state;
  }
}
