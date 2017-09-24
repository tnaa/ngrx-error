import 'rxjs/add/operator/do';


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/do';

import * as AppActions from './app.actions'

@Injectable()
export class AppEffects {

  @Effect() log$: Observable<Action> = this.actions$.ofType(AppActions.RESET)
    .do(() => console.info('Resetting counter '));

  constructor(
    private actions$: Actions
  ) { }
}
