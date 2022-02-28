import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private isAdmin$$ = new BehaviorSubject<any>({});
  public isAdmin$ = this.isAdmin$$.asObservable();

  private name$$ = new BehaviorSubject<any>({});
  public name$ = this.name$$.asObservable();

  constructor(private user: UserService) { }

  getUser(token: any) {
    this.user.getUser(token).subscribe(data => {
      this.isAdmin$$.next(data);
      this.name$$.next(data);
    })
  }
}
