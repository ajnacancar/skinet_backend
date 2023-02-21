import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { IBrand } from 'src/app/shared/models/brand';
import { IProduct } from 'src/app/shared/models/product';
import { IPrdocutType } from 'src/app/shared/models/product_type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminShopService {
  baseUrl = environment.apiUrl;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IPrdocutType[] = [];

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
}
