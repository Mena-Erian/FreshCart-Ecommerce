import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductRoot } from '../../../shared/interfaces/iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //  private readonly httpClient=inject(HttpClient)
  constructor(private httpClient: HttpClient) {}
  BaseUrl: string = 'https://ecommerce.routemisr.com';
  getAllProduct(): Observable<IproductRoot> {
    return this.httpClient.get<IproductRoot>(`${this.BaseUrl}/api/v1/products`);
  }
  getSpecificProduct(productId: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.BaseUrl}/api/v1/products/${productId}`
    );
  }
}
