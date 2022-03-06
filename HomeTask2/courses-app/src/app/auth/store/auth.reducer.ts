import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

const authFeatureKey = 'auth';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(AuthActions.REQUEST_LOGIN_SUCCESS, (state, { auth }) => ({
    ...state,
    isAuthorized: auth.isAuthorized,
    token: auth.token,
    errorMessage: auth.errorMessage,
  })),
  on(AuthActions.REQUEST_LOGIN_FAILURE, (state, { auth }) => ({
    ...state,
    errorMessage: auth.errorMessage,
  })),
  on(AuthActions.REQUEST_REGISTER_FAILURE, (state, { auth }) => ({
    ...state,
    errorMessage: auth.errorMessage,
  })),
  on(AuthActions.REQUEST_LOGOUT_SUCCESS, () => ({
    isAuthorized: false,
    token: '',
    errorMessage: '',
  }))
);

export const authReducer = (
  state: AuthState | undefined,
  action: Action
): AuthState => reducer(state, action);
