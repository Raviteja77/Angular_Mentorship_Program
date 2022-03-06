import { createReducer, on, Action } from '@ngrx/store';
import { UserRequestActions } from './user.actions';

export const userFeatureKey = 'currentUser';

export interface UserState {
    role: string,
    name: string,
}

const initialState: UserState = {
    role: '',
    name: '',
}

const reducer = createReducer(
    initialState,
    on(UserRequestActions.REQUEST_CURRENT_USER_SUCCESS, (state, { user }) => ({ ...state, role: user.role, name: user.name }))
);

export const userReducer = (state:
    UserState | undefined, action: Action): UserState => reducer(state, action);