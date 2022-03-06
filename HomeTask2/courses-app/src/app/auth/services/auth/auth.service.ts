import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$ = new BehaviorSubject<any>('');
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient) { }

  register(postRegisterDetails: any) {
    return this.http.post(environment.endpoints.register, {
      email: postRegisterDetails.email,
      name: postRegisterDetails.name,
      password: postRegisterDetails.password,
    });
  }

  login(postLoginDetails: any) {
    return this.http.post(environment.endpoints.login, {
      email: postLoginDetails.email,
      password: postLoginDetails.password,
    });
  }

  logout(authorizationToken: string) {
    return this.http.delete(environment.endpoints.logout, {
      headers: { Authorization: authorizationToken },
    });
  }
}
