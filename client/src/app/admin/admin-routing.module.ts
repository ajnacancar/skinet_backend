import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrandsComponent } from './brands/brands.component';
import { AuthAdminGuard } from '../core/guards/auth-admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AdminLoginComponent,
  },
  {
    path: 'brands',
    component: BrandsComponent,
    canActivate: [AuthAdminGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
