import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { UserState } from "./user.reducer";


export const role = createSelector(
    ( state: State ) => state.currentUser,
    ( user: UserState ) => user.role,
)

export const getName = createSelector(
    ( state: State ) => state.currentUser,
    ( user: UserState ) => user.name,
)