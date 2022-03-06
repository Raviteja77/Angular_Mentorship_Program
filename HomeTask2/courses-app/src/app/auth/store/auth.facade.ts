import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from 'src/app/store'
import { AuthActions } from "./auth.actions";
import { getSpecificErrorMessage, getToken, isUserAuthorized } from "./auth.selectors";


@Injectable()
export class AuthFacade {
    public isAuthorized$ = this.store.pipe(select(isUserAuthorized));
    public getToken$ = this.store.pipe(select(getToken));
    public getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));
    public getRegisterErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

    constructor(private store: Store<State>) {}

    login(body: any) {
        this.store.dispatch(AuthActions.REQUEST_LOGIN({ body }));
    }

    register(body: any) {
        this.store.dispatch(AuthActions.REQUEST_REGISTER({ body }));
    }

    logout(body: string) {
        this.store.dispatch(AuthActions.REQUEST_LOGOUT({ body }))
    }

}
