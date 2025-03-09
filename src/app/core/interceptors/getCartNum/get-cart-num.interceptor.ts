import { CartService } from './../../services/cart/cart.service';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

interface IMyRes {
  numOfCartItems: number;
}

export const getCartNumInterceptor: HttpInterceptorFn = (req, next) => {
  const cartService: CartService = inject(CartService);
  return next(req).pipe(
    map((event) => {
      if (event instanceof HttpResponse && event.body) {
        const myRes = event.body as IMyRes;
        console.log(myRes);
        if (myRes.numOfCartItems) {
          console.log(myRes.numOfCartItems, 'get inter');
          cartService.cartCounter.next(myRes.numOfCartItems);
        }
      }
      return event;
    })
  );
};

// return next(req).pipe(
//   tap((event) => {
//     if (event.type === HttpEventType.Response) {
//       console.log(req.url, 'res from interceptors', event.status, '\n');
//       console.log(event.body?.numOfCartItems);
//     }
//   })
// );

// if (req.url.includes('cart')) {
//  intercept
// }
