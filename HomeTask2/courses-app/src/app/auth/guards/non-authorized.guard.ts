import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class NonAuthorizedGuard implements CanActivate {
  constructor(private router: Router, private authFacade: AuthFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authFacade.isAuthorized$.subscribe((data) => {
      if (data) {
        this.router.navigate(['/courses']);
        return false;
      }
      return true;
    });
    return true;
  }
}
