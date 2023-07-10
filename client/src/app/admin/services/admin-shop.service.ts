import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { IBrand } from 'src/app/shared/models/brand';
import { Order } from 'src/app/shared/models/order';
import { IPagination } from 'src/app/shared/models/pagination';
import { IProduct } from 'src/app/shared/models/product';
import { IPrdocutType } from 'src/app/shared/models/product_type';
import { ShopParamsBase } from 'src/app/shared/models/shopParamsBase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminShopService {
  baseUrl = environment.apiUrl;
  products: IProduct[] = [];
  pagination?: IPagination;
  brands: IBrand[] = [];
  types: IPrdocutType[] = [];
  orders: Order[] = [];
  shopParamsBase = new ShopParamsBase();

  constructor(private http: HttpClient) {}

  getBrands(): Observable<IBrand[]> {
    if (this.brands.length > 0) return of(this.brands);

    return this.http
      .get<IBrand[]>(this.baseUrl + 'products/brands')
      .pipe(map((brands) => (this.brands = brands)));
  }

  deleteBrand(id: number): Observable<IBrand> {
    return this.http.delete<IBrand>(
      this.baseUrl + 'products/admin/brands/' + id
    );
  }

  addNewBrand(data: any): Observable<IBrand> {
    return this.http.post<IBrand>(this.baseUrl + 'products/admin/brands', data);
  }

  getTypes(): Observable<IPrdocutType[]> {
    if (this.types.length > 0) return of(this.types);

    return this.http
      .get<IPrdocutType[]>(this.baseUrl + 'products/types')
      .pipe(map((types) => (this.types = types)));
  }

  deleetType(id: number): Observable<IPrdocutType> {
    return this.http.delete<IPrdocutType>(
      this.baseUrl + 'products/admin/types/' + id
    );
  }

  addNewType(data: any): Observable<IPrdocutType> {
    return this.http.post<IPrdocutType>(
      this.baseUrl + 'products/admin/types',
      data
    );
  }

  addNewProduct(data: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl + 'products/admin', data);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(this.baseUrl + 'products/admin/' + id);
  }

  setShopBaseParams(params: ShopParamsBase) {
    this.shopParamsBase = params;
  }

  getShopBaseParams() {
    return this.shopParamsBase;
  }

  getAllOrders(): Observable<IPagination> {
    let params = new HttpParams();
    params = params.append(
      'pageIndex',
      this.shopParamsBase.pageNumber.toString()
    );
    params = params.append('pageSize', this.shopParamsBase.pageSize.toString());
    return this.http
      .get<IPagination>(this.baseUrl + 'orders/admin/all', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          this.pagination = response.body;
          return response.body;
        })
      );
  }

  getOrderDetailedForAdmin(id: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/admin/' + id);
  }
}
