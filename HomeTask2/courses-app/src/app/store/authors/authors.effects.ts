import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { AuthorsService } from "src/app/services/authors/authors.service";
import { AuthorActions } from "./authors.actions";


@Injectable()
export class AuthorsEffects {

    constructor(private actions$: Actions, private authorsService: AuthorsService) {}

    getAuthors$ = createEffect(() => this.actions$.pipe(
        ofType(AuthorActions.REQUEST_AUTHORS),
        switchMap(() => this.authorsService.getAllAuthors().pipe(
            map((data: any) => AuthorActions.REQUEST_AUTHORS_SUCCESS({ allAuthors: { authors: data.result, isLoading: false, addedAuthor: [] } })),
            catchError((error) => of(AuthorActions.REQUEST_AUTHORS_FAILURE))
        ))
    ))

    addAuthor$ = createEffect(() => this.actions$.pipe(
        ofType(AuthorActions.REQUEST_ADD_AUTHOR),
        switchMap((action) => this.authorsService.addAuthor(action.body).pipe(
            map((data: any) => AuthorActions.REQUEST_ADD_AUTHOR_SUCCESS({ addedAuthors: { addedAuthor: data.result, isLoading: false, authors: [] } })),
            catchError((error) => of(AuthorActions.REQUEST_ADD_AUTHOR_FAILURE))
        ))
    ))

}