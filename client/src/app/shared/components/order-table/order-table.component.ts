import { Component, Input } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
    @Input() orders: Order[];
    @Input() redirectUrl: string
}
