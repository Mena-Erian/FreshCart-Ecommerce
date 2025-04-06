import { BrandsService } from './core/services/brands/brands.service';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { islogedGuard } from './core/guards/isloged.guard';
import { DetailsComponent } from './pages/details/details.component';
import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BrandsResolver } from './pages/brands-details/brands-details.resolver';

function setBrandTitle(): string {
  const brandsService = inject(BrandsService);
  console.log(brandsService.brandName());
  return `${brandsService.brandName()} Brand`;
}

// function setBrandTitle(route: any) {
//   const title = inject(Title);
//   const brandName = route.data['brand name'];
//   const brandsService = inject(BrandsService);
//   return title.setTitle(brandName ? `brand - ${brandName}` : 'Brand Details');
// }

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((c) => c.CartComponent),
        title: 'Cart',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./pages/allorders/allorders.component').then(
            (c) => c.AllordersComponent
          ),
        title: 'All Orders',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/brands/brands.component').then(
            (c) => c.BrandsComponent
          ),
        title: 'Brands',
      },
      {
        path: 'brands-details/:brandId',
        loadComponent: () =>
          import('./pages/brands-details/brands-details.component').then(
            (c) => c.BrandsDetailsComponent
          ),
        resolve: { brandName: BrandsResolver },
        title: setBrandTitle,
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (c) => c.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'products-of-categories/:categoryId',
        loadComponent: () =>
          import(
            './pages/products-of-categories/products-of-categories.component'
          ).then((c) => c.ProductsOfCategoriesComponent),
        title: 'category Details',
      },
      {
        path: 'checkout/:cartId',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then(
            (c) => c.CheckoutComponent
          ),
        title: 'checkout',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details',
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [islogedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'Register',
      },
      {
        path: 'forgetPassword',
        loadComponent: () =>
          import('./pages/forget-password/forget-password.component').then(
            (c) => c.ForgetPasswordComponent
          ),
        title: 'Forget Password',
      },
      { path: '**', component: NotFoundComponent, title: 'Not Found' },
    ],
  },
];
