import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated() && this.authService.decodedToken.role === 'Admin') {
      return true;
    } else {
      if (this.authService.isAuthenticated() && this.authService.decodedToken.role !== 'Admin') {
        this.router.navigate(['/not-found']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
