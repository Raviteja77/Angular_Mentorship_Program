import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$ = new BehaviorSubject<any>('');
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient, private sessionStore: SessionStorageService, private userStore: UserStoreService, private router: Router) { }

  register(postRegisterDetails: any) {
    return this.http.post('http://localhost:3000/register', {
      email: postRegisterDetails.email,
      name: postRegisterDetails.name,
      password: postRegisterDetails.password,
    }).subscribe(() => {
      this.router.navigate(['/login']);
    })
  }

  login(postLoginDetails: any) {
    return this.http.post('http://localhost:3000/login', {
      email: postLoginDetails.email,
      password: postLoginDetails.password,
    }).subscribe((data : any)=> {
      this.isAuthorized$$.next(data.result);
      this.sessionStore.setToken(data.result);
      const token = this.sessionStore.getToken();
      this.userStore.getUser(token);
    });
  }

  logout(authorizationToken: string) {
    return this.http.delete('http://localhost:3000/logout', {
      headers: { Authorization: authorizationToken },
    }).subscribe(() => {
      this.isAuthorized$$.next(false);
      this.sessionStore.deleteToken();
    })
  }
}
