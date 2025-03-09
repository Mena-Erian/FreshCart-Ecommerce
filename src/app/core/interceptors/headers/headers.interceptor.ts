import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  // const router: Router = inject(Router);

  if (localStorage.getItem('token')) {
    if (
      req.url.includes('cart') ||
      req.url.includes('orders') ||
      req.url.includes('wishlist')
    ) {
      req = req.clone({
        setHeaders: {
          token: localStorage.getItem('token') || '',
        },
      });
    }
  }
  return next(req);
};
