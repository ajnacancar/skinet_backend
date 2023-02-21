import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isAdminPage = false;
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  currentAdminUser$: Observable<IUser>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;

    this.currentAdminUser$ = this.adminService.currentAdminUser$;
    if (window.location.href.includes('/admin')) {
      console.log('admin page');
      this.isAdminPage = true;
    }
  }

  logoutAdmin(): void {
    this.adminService.logoutAdmin();
  }

  logout(): void {
    this.accountService.logout();
  }
}
