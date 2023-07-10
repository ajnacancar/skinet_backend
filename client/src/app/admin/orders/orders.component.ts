import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { ShopParamsBase } from 'src/app/shared/models/shopParamsBase';
import { AdminShopService } from '../services/admin-shop.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  shopParamsBase: ShopParamsBase;
  totalCount: number;

  constructor(private adminShopService: AdminShopService) {
    this.shopParamsBase = adminShopService.getShopBaseParams();
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.adminShopService.getAllOrders().subscribe({
      next: (response) => {
        this.orders = response.data;
        this.totalCount = response.count;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onPageChanged(event: any): void {
    const params = this.adminShopService.getShopBaseParams();

    if (params.pageNumber !== event.page) {
      params.pageNumber = event.page;
      this.adminShopService.setShopBaseParams(params);
      this.shopParamsBase = params;
      this.getOrders();
    }
  }
}
