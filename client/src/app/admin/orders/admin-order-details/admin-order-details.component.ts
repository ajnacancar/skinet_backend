import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { AdminShopService } from '../../services/admin-shop.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.scss'],
})
export class AdminOrderDetailsComponent implements OnInit {
  order?: Order;

  constructor(
    private adminShopService: AdminShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    id &&
      this.adminShopService.getOrderDetailedForAdmin(+id).subscribe({
        next: (order) => {
          this.order = order;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
