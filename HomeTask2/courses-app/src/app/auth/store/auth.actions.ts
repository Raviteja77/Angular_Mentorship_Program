import { createAction, props } from "@ngrx/store";
import { AuthState } from './auth.reducer'

const REQUEST_LOGIN = createAction('[LOGIN PAGE] Login request', props<{ body: any }>());
const REQUEST_LOGIN_SUCCESS = createAction('[LOGIN PAGE] Login request success', props<{ auth: AuthState }>());
const REQUEST_LOGIN_FAILURE = createAction('[LOGIN PAGE] Login request failed', props<{ auth: AuthState }>());
const REQUEST_REGISTER = createAction('[REGISTER PAGE] Register request', props<{ body: any }>());
const REQUEST_REGISTER_SUCCESS = createAction('[REGISTER PAGE] Register request success');
const REQUEST_REGISTER_FAILURE = createAction('[REGISTER PAGE] Register request failed', props<{ auth: AuthState }>());
const REQUEST_LOGOUT = createAction('[LOGOUT PAGE] Logout request', props<{ body: string }>());
const REQUEST_LOGOUT_SUCCESS = createAction('[LOGOUT PAGE] Logout request success');

export const AuthActions = {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE,
    REQUEST_REGISTER,
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_FAILURE,
    REQUEST_LOGOUT,
    REQUEST_LOGOUT_SUCCESS
}