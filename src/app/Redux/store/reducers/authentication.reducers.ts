import { createReducer, on } from '@ngrx/store';

import {
  onLoginAction,
  onLoginFailureAction,
  onLoginSuccessAction,
} from '../actions/authentication.actions';

interface InitialState {
  username: string;
  password: string;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  username: '',
  password: '',
  isSuccess: false,
  isError: false,
};

const authReducer = createReducer<InitialState>(
  initialState,
  on(onLoginAction, (state) => {
    return {
      ...state,
    };
  }),
  on(onLoginSuccessAction, (state, action) => {
    return {
      ...state,
      isSuccess: action.isSuccess,
      isError: false,
    };
  }),
  on(onLoginFailureAction, (state, action) => {
    return {
      ...state,
      isSuccess: false,
      isError: action.isError,
    };
  })
);

export default authReducer;
