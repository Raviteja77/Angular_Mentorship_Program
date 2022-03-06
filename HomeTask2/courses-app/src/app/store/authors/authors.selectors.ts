import { createSelector } from "@ngrx/store";
import { State } from "..";
import { AuthorsState } from "./authors.reducer";


export const getAuthors = createSelector(
    ( state: State ) => state.authors,
    ( authors: AuthorsState ) => authors.authors,
)

export const getAddedAuthors = createSelector(
    ( state: State ) => state.authors,
    ( authors: AuthorsState ) => authors.addedAuthor,
)

export const isLoadingSelector = createSelector(
    ( state: State ) => state.authors,
    ( authors: AuthorsState ) => authors.isLoading,
)