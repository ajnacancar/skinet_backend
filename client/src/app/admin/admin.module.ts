import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrandsComponent } from './brands/brands.component';
import { TypesComponent } from './types/types.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrderDetailsComponent } from './orders/admin-order-details/admin-order-details.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    BrandsComponent,
    TypesComponent,
    ProductsAdminComponent,
    AdminHomeComponent,
    AddProductComponent,
    OrdersComponent,
    AdminOrderDetailsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
