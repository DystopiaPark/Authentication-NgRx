import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  onLogin,
  onLoginFailureAction,
  onLoginSuccessAction,
} from '../actions/authentication.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export default class AuthenticationEffect {
  public onLoginEffect = createEffect(
    () =>
      this.action$.pipe(
        ofType(onLogin),
        map((state) => {
          const { username, password } = state;
          if (username == 'admin@test.com' && password == '1234567') {
            return onLoginSuccessAction({ isSuccess: true });
            // return this.store.dispatch(onLoginSuccessAction({ isSuccess: true })); if dispatch flag is set to false, we have to call the store to dispatch
          } else {
            return onLoginFailureAction({ isError: true });
          }
        }),
        catchError((err) => EMPTY)
      )
    // {dispatch: false}
  );
  constructor(private action$: Actions) {}
}
