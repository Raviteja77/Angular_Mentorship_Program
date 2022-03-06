import { createAction, props } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

const REQUEST_AUTHORS = createAction('[AUTHORS REQUEST] Request authors');
const REQUEST_AUTHORS_SUCCESS = createAction('[AUTHORS REQUEST] Request authors success', props<{ allAuthors: AuthorsState }>());
const REQUEST_AUTHORS_FAILURE = createAction('[AUTHORS REQUEST] Request authors failure');
const REQUEST_ADD_AUTHOR = createAction('[ADD AUTHOR REQUEST] Request add author', props<{ body: string }>());
const REQUEST_ADD_AUTHOR_SUCCESS = createAction('[ADD AUTHOR REQUEST] Request add author success', props<{ addedAuthors: AuthorsState }>());
const REQUEST_ADD_AUTHOR_FAILURE = createAction('[ADD AUTHOR REQUEST] Request add author failure');

export const AuthorActions = {
    REQUEST_AUTHORS,
    REQUEST_AUTHORS_SUCCESS,
    REQUEST_AUTHORS_FAILURE,
    REQUEST_ADD_AUTHOR,
    REQUEST_ADD_AUTHOR_SUCCESS,
    REQUEST_ADD_AUTHOR_FAILURE
}