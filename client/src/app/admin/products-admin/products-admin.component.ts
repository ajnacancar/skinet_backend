import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IPagination } from 'src/app/shared/models/pagination';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { ShopService } from 'src/app/shop/shop.service';
import { AdminShopService } from '../services/admin-shop.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent implements OnInit {
  products: IProduct[];
  totalCount: number;
  shopParams: ShopParams;
  constructor(
    private adminShopService: AdminShopService,
    private shopService: ShopService,
    private toastr: ToastrService
  ) {
    this.shopParams = shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.shopService.getProducts().subscribe({
      next: (response: IPagination) => {
        this.products = response.data;
        this.totalCount = response.count;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(id: number) {
    this.adminShopService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id);
        this.toastr.success('Product is succesuflly deleted!');
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }

  onPageChanged(event: any): void {
    const params = this.shopService.getShopParams();

    if (params.pageNumber !== event.page) {
      params.pageNumber = event.page;
      this.shopService.setShopParams(params);
      this.shopParams = params;
      this.getProducts();
    }
  }
}
