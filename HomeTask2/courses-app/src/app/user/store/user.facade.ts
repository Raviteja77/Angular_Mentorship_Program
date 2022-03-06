import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "src/app/store";
import { UserRequestActions } from "./user.actions";
import { role, getName } from "./user.selectors";

@Injectable()
export class UserFacade {

    public role$ = this.store.pipe(select(role));
    public name$ = this.store.pipe(select(getName));

    constructor(private store: Store<State>) {}

    getCurrentUser(body: string): void {
        this.store.dispatch(UserRequestActions.REQUEST_CURRENT_USER({ body }));
    }

}