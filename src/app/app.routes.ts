import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'FC | Login' },
  { path: 'home', component: HomeComponent, title: 'FC | Home' },
  { path: 'cart', component: CartComponent, title: 'FC | Cart' },
  { path: 'products', component: ProductsComponent, title: 'FC | Products' },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'FC | Categories',
  },
  { path: 'brands', component: BrandsComponent, title: 'FC | Brands' },
];
