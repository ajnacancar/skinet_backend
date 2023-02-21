import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account/account.service';
import { AdminService } from './admin/services/admin.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'skinet';
  isAdminPage = false;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    if (window.location.href.includes('/admin')) {
      this.isAdminPage = true;
      this.loadCurrentAdminUser();
    } else {
      this.loadBasket();
      this.loadCurrentUser();
    }
  }

  loadBasket(): void {
    const basketId = localStorage.getItem('basket_id');

    if (basketId) {
      this.basketService.getBasket(basketId).subscribe({
        next: () => {
          console.log('initialized basket');
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  loadCurrentUser(): void {
    const token = localStorage.getItem('token');

    this.accountService.loadCurrentUser(token).subscribe({
      next: () => {
        console.log('loaded user');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  loadCurrentAdminUser(): void {
    const token = localStorage.getItem('token_admin');

    this.adminService.loadCurrentAdminUser(token).subscribe({
      next: () => {
        console.log('loaded admin user');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
