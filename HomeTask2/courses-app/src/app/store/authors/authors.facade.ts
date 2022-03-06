import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "..";
import { AuthorActions } from "./authors.actions";
import { getAddedAuthors, getAuthors, isLoadingSelector } from "./authors.selectors";


@Injectable()
export class AuthorsStateFacade {

    constructor(private store: Store<State>) {}

    public authors$ = this.store.pipe(select(getAuthors));
    public addedAuthors$ = this.store.pipe(select(getAddedAuthors));
    public isLoading$ = this.store.pipe(select(isLoadingSelector));

    getAllAuthors() {
        this.store.dispatch(AuthorActions.REQUEST_AUTHORS());
    }

    addAuthor(body: string) {
        this.store.dispatch(AuthorActions.REQUEST_ADD_AUTHOR({ body }));
    }

}