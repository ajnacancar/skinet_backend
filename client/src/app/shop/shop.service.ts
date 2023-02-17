import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IPrdocutType } from '../shared/models/product_type';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IPrdocutType[] = [];
  paginatioin?: IPagination;
  shopParams = new ShopParams();
  productCache = new Map<string, IPagination>();

  constructor(private http: HttpClient) {}

  getProducts(useCache = true): Observable<IPagination> {
    if (!useCache) this.productCache = new Map();

    if (this.productCache.size > 0 && useCache) {
      if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
        this.paginatioin = this.productCache.get(
          Object.values(this.shopParams).join('-')
        );
        if (this.paginatioin) return of(this.paginatioin);
      }
    }

    let params = new HttpParams();
    if (this.shopParams.brandId !== 0) {
      params = params.append('brandId', this.shopParams.brandId.toString());
    }

    if (this.shopParams.typeId !== 0) {
      params = params.append('typeId', this.shopParams.typeId.toString());
    }

    if (this.shopParams.search) {
      params = params.append('search', this.shopParams.search);
    }

    params = params.append('sort', this.shopParams.sort);
    params = params.append('pageIndex', this.shopParams.pageNumber.toString());
    params = params.append('pageSize', this.shopParams.pageSize.toString());

    return this.http
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          this.productCache.set(
            Object.values(this.shopParams).join('-'),
            response.body
          );
          this.paginatioin = response.body;

          return response.body;
        })
      );
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getShopParams() {
    return this.shopParams;
  }

  getBrands(): Observable<IBrand[]> {
    if (this.brands.length > 0) return of(this.brands);

    return this.http
      .get<IBrand[]>(this.baseUrl + 'products/brands')
      .pipe(map((brands) => (this.brands = brands)));
  }

  getTypes(): Observable<IPrdocutType[]> {
    if (this.types.length > 0) return of(this.types);
    return this.http
      .get<IPrdocutType[]>(this.baseUrl + 'products/types')
      .pipe(map((types) => (this.types = types)));
  }

  getProduct(id: number): Observable<IProduct> {
    const product = [...this.productCache.values()].reduce(
      (acc, paginationResult) => {
        return { ...acc, ...paginationResult.data.find((x) => x.id === id) };
      },
      {} as IProduct
    );

    if (Object.keys(product).length !== 0) return of(product);
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }
}
