import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(private router: Router, private authFacade: AuthFacade) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authFacade.isAuthorized$.subscribe((data) => {
      if (!data) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    });
    return true;
  }
}
