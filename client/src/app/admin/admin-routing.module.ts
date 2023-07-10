import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrandsComponent } from './brands/brands.component';
import { AuthAdminGuard } from '../core/guards/auth-admin.guard';
import { TypesComponent } from './types/types.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailedComponent } from '../orders/order-detailed/order-detailed.component';
import { AdminOrderDetailsComponent } from './orders/admin-order-details/admin-order-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  },
  {
    path: 'brands',
    component: BrandsComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'types',
    component: TypesComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'products',
    component: ProductsAdminComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path:'add-new-product',
    component: AddProductComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path:'orders',
    component: OrdersComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path:'orders/:id',
    component: AdminOrderDetailsComponent,
    canActivate: [AuthAdminGuard],
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
