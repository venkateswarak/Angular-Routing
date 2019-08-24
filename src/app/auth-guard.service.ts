import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated()
.then(
  (authenticated: boolean) => {
    if (authenticated) {
      return true;
    } else {
      return this.router.navigate (['/']);
    }
  }
);
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  return this.canActivate(route, state);
}
}
