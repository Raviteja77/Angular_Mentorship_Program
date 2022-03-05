import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { UserRequestActions } from '../store/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserRequestActions.REQUEST_CURRENT_USER),
      switchMap((action) =>
        this.userService.getUser(action.body).pipe(
          map(
            (data: any) =>
              UserRequestActions.REQUEST_CURRENT_USER_SUCCESS({
                user: { role: data.result.role, name: data.result.name },
              }),
            catchError(() =>
              of(UserRequestActions.REQUEST_CURRENT_USER_FAILURE)
            )
          )
        )
      )
    )
  );
}
