import { createSelector } from '@ngrx/store';

interface AppAuthState {
  username: string;
  password: string;
  isSuccess: boolean;
  isError: boolean;
}

export interface AppState {
  authStore: AppAuthState;
}

const store = (state: AppState) => state.authStore;

const isSuccessSelector = createSelector(store, (s) => s.isSuccess);
const isErrorSelector = createSelector(store, (s) => s.isError);

export { isSuccessSelector, isErrorSelector };
