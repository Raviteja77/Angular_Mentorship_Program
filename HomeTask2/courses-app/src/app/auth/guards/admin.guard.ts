import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAdmin = false;
    this.userStore.isAdmin$.subscribe((data) => {
      isAdmin = data?.result?.role.toLowerCase() === 'admin' ? true : false;
    });
    if (!isAdmin) {
      this.router.navigate(['/courses']);
      return false;
    } else {
      return true;
    }
  }
}
