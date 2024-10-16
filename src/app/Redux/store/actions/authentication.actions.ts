import { createAction, props } from '@ngrx/store';

const onLogin = '[App Component] Login Action';
const onLoginSuccess = '[App Component] Login Success Action';
const onLoginFailure = '[App Component] Login Failure Action';

const onLoginAction = createAction(
  onLogin,
  props<{ username: string; password: string }>()
);
const onLoginSuccessAction = createAction(
  onLoginSuccess,
  props<{ isSuccess: boolean }>()
);
const onLoginFailureAction = createAction(
  onLoginFailure,
  props<{ isError: boolean }>()
);

export {
  onLogin,
  onLoginSuccess,
  onLoginFailure,
  onLoginAction,
  onLoginSuccessAction,
  onLoginFailureAction,
};
