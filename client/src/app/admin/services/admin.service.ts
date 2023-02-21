import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.apiUrl;
  private currentAdminUserSource = new ReplaySubject<IUser | null>(1);
  currentAdminUser$ = this.currentAdminUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  loadCurrentAdminUser(token: string | null) {
    if (token === null) {
      this.currentAdminUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', { headers }).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token_admin', user.token);

          this.currentAdminUserSource.next(user);
        }
      })
    );
  }

  loginAdmin(values: any): Observable<IUser> {
    return this.http
      .post<IUser>(this.baseUrl + 'account/admin/login', values)
      .pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token_admin', user.token);

            this.currentAdminUserSource.next(user);

            return user;
          } else {
            return null;
          }
        })
      );
  }

  logoutAdmin(): void {
    localStorage.removeItem('token_admin');
    this.currentAdminUserSource.next(null);
    this.router.navigateByUrl('/admin/login');
  }
}
