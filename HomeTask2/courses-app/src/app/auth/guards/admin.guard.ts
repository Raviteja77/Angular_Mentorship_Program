import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserFacade } from 'src/app/user/store/user.facade';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userFacade: UserFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAdmin = false;
    this.userFacade.role$.subscribe((data) => {
      isAdmin = data.toLowerCase() === 'admin' ? true : false;
    });
    if (!isAdmin) {
      this.router.navigate(['/courses']);
      return false;
    } else {
      return true;
    }
  }
}
