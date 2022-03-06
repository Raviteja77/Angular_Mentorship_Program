import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { AuthActions } from '../store/auth.actions'
 
@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}
 
    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.REQUEST_LOGIN),
        switchMap((action) => this.authService.login(action.body).
        pipe(
            map((data: any) => AuthActions.REQUEST_LOGIN_SUCCESS({ auth: { isAuthorized: data.successful, token: data.result, errorMessage: '' } }),
            catchError((error) => of(AuthActions.REQUEST_LOGIN_FAILURE({ auth: { isAuthorized: false, token: '', errorMessage: error } })))
          ))
        )
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.REQUEST_LOGOUT),
        switchMap((action) => this.authService.logout(action.body).
        pipe(
            map(() => AuthActions.REQUEST_LOGOUT_SUCCESS()),
            catchError(() => EMPTY)
        ))
    ))

    register$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.REQUEST_REGISTER),
        switchMap((action) => this.authService.register(action.body).
        pipe(
            map(() => {
                this.router.navigate(['/login']); 
                return AuthActions.REQUEST_REGISTER_SUCCESS()
            },
            catchError((error) => of(AuthActions.REQUEST_REGISTER_FAILURE({ auth: { isAuthorized: false, token: '', errorMessage: error } }))))
        ))
    ))
}