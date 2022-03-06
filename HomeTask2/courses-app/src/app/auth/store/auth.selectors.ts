import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { AuthState } from "./auth.reducer";


export const isUserAuthorized = createSelector(
    ( state: State ) => state.auth,
    ( auth: AuthState ) => auth.isAuthorized,
)

export const getToken = createSelector(
    ( state: State ) => state.auth,
    ( auth: AuthState ) => auth.token,
)

export const getSpecificErrorMessage = createSelector(
    ( state: State ) => state.auth,
    ( auth: AuthState ) => auth.errorMessage,
)