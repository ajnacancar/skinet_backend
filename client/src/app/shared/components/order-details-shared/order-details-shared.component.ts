import { Component, Input } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-details-shared',
  templateUrl: './order-details-shared.component.html',
  styleUrls: ['./order-details-shared.component.scss'],
})
export class OrderDetailsSharedComponent {
  @Input() order: Order;
}
