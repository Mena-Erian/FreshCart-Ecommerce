import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ICartAddRoot, ICartRoot } from '../../../shared/interfaces/iCart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myToken: string = localStorage.getItem('token')!;
  // cartCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartCounter: WritableSignal<number> = signal<number>(0);
  constructor(private httpClient: HttpClient) {}
  addProductToCart(id: string): Observable<ICartAddRoot> {
    return this.httpClient.post<ICartAddRoot>(
      `${environment.BaseUrl}/api/v1/cart`,
      {
        productId: id,
      }
    );
  }
  getLoggedCart(): Observable<ICartRoot> {
    return this.httpClient.get<ICartRoot>(`${environment.BaseUrl}/api/v1/cart`);
  }
  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.BaseUrl}/api/v1/cart/${id}`);
  }
  clearAllCart(): Observable<any> {
    return this.httpClient.delete(`${environment.BaseUrl}/api/v1/cart`);
  }
  updateCountOfProductCart(
    idProduct: string,
    newCount: number
  ): Observable<ICartRoot> {
    return this.httpClient.put<ICartRoot>(
      `${environment.BaseUrl}/api/v1/cart/${idProduct}`,
      {
        count: `${newCount}`,
      }
    );
  }
}
