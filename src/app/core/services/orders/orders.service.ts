import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ICheckoutRoot } from '../../../shared/interfaces/icheckout';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  myToken: any = localStorage.getItem('token');
  constructor(private httpClient: HttpClient) {
    console.log(this.myToken);
  }
  getAllOrders(): Observable<any> {
    return this.httpClient.get(`${environment.BaseUrl}/api/v1/orders/`);
  }
  checkoutSession(cartId: string, formData: any): Observable<ICheckoutRoot> {
    return this.httpClient.post<ICheckoutRoot>(
      `${environment.BaseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: formData,
      }
    );
  }
}
`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/66c91634ed0dc0016c217bb3?url=http://localhost:3000`;
