import { Action, createReducer, on } from "@ngrx/store";
import { AuthorActions } from './authors.actions'


export const authorsFeatureKey = 'authors';

export interface AuthorsState {
    authors: any [],
    addedAuthor: [],
    isLoading: boolean,
}

const initialState: AuthorsState = {
    authors: [],
    addedAuthor: [],
    isLoading: true,
}

const reducer = createReducer(
    initialState,
    on(AuthorActions.REQUEST_AUTHORS_SUCCESS, (state, { allAuthors }) => ({ ...state, authors: allAuthors.authors, isLoading: allAuthors.isLoading })),
    on(AuthorActions.REQUEST_ADD_AUTHOR_SUCCESS, (state, { addedAuthors }) => ({ ...state, addedAuthor: addedAuthors.addedAuthor, authors: [...state.authors, addedAuthors.addedAuthor] }))
)

export const authorsReducer = (state: AuthorsState | undefined, action: Action): AuthorsState => reducer(state, action);