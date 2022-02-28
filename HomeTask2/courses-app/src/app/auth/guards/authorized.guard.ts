import { Injectable } from '@angular/core';
import {  CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.auth.isAuthorized$.subscribe((data : any) => {
        if(!data) {
          this.router.navigate(['/login']);
          return false;
        }
        else {
          return true;
        }
      })
      return true;
  }
}
