import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdminService } from 'src/app/admin/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.adminService.currentAdminUser$.pipe(
        map((auth) => {
          if (auth) {
            true;
          } else {
            this.router.navigate(['/admin/login'], {
              queryParams: { returnUrl: state.url },
            });
            return false;
          }
        })
      );
  }

}
