import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IUser } from 'src/app/shared/models/user';
import { AdminService } from 'src/app/admin/services/admin.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token?: string;
  constructor(
    private accountService: AccountService,
    private adminService: AdminService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (window.location.href.includes('/admin')) {
      this.adminService.currentAdminUser$.pipe(take(1)).subscribe({
        next: (user: IUser) => {
          this.token = user.token;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.accountService.currentUser$.pipe(take(1)).subscribe({
        next: (user: IUser) => {
          this.token = user.token;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
