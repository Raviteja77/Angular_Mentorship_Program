import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.reducer";

const REQUEST_CURRENT_USER = createAction('[USER_REQUEST] current user', props<{ body: string }>());
const REQUEST_CURRENT_USER_SUCCESS = createAction('[USER_REQUEST] current user success', props<{user: UserState}>());
const REQUEST_CURRENT_USER_FAILURE = createAction('[USER_REQUEST] current user failure');

export const UserRequestActions = {REQUEST_CURRENT_USER, REQUEST_CURRENT_USER_SUCCESS, REQUEST_CURRENT_USER_FAILURE}