import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import { AuthEffects } from '../auth/store/auth.effects'
import { userReducer, UserState } from "../user/store/user.reducer";
import { authorsReducer, AuthorsState } from "./authors/authors.reducer";
import { AuthorsEffects } from "./authors/authors.effects";
import { CoursesReducer, CoursesState } from "./courses/courses.reducer";
import { CoursesEffects } from "./courses/courses.effects";


export interface State {
    currentUser: UserState,
    auth: AuthState,
    authors: AuthorsState,
    courses: CoursesState,
}
export const reducers: ActionReducerMap<State> = {
    currentUser: userReducer,
    auth: authReducer,
    authors: authorsReducer,
    courses: CoursesReducer
};
export const effects = [UserEffects, AuthEffects, AuthorsEffects, CoursesEffects];
