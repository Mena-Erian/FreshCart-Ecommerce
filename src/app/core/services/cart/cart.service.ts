import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ICartRoot } from '../../../shared/interfaces/iCart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myToken: string = localStorage.getItem('token')!;
  constructor(private httpClient: HttpClient) {}
  addProductToCart(id: string): Observable<any> {
    return this.httpClient.post(
      `${environment.BaseUrl}/api/v1/cart`,
      {
        productId: id,
      },
      {
        headers: {
          token: this.myToken,
        },
      }
    );
  }
  getLoggedCart(): Observable<ICartRoot> {
    return this.httpClient.get<ICartRoot>(
      `${environment.BaseUrl}/api/v1/cart`,
      {
        headers: {
          token: this.myToken,
        },
      }
    );
  }
  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.BaseUrl}/api/v1/cart/${id}`, {
      headers: {
        token: this.myToken,
      },
    });
  }
  clearAllCart(): Observable<any> {
    return this.httpClient.delete(`${environment.BaseUrl}/api/v1/cart`, {
      headers: {
        token: this.myToken,
      },
    });
  }
  updateCountOfProductCart(
    idProduct: string,
    newCount: number
  ): Observable<ICartRoot> {
    return this.httpClient.put<ICartRoot>(
      `${environment.BaseUrl}/api/v1/cart/${idProduct}`,
      {
        count: `${newCount}`,
      },
      {
        headers: {
          token: this.myToken,
        },
      }
    );
  }
}
