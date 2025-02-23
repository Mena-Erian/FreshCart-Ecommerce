import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from './../../core/services/cart/cart.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Data, ICartRoot, Product2 } from '../../shared/interfaces/iCart';
import { CartProductComponent } from '../../shared/components/cart-product/cart-product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  // cartRes: ICartRoot = {} as ICartRoot;
  cartData: Data = {} as Data;

  cartProducts: Product2[] = [];
  ngOnInit(): void {
    this.getCartData();
  }
  getCartData(): void {
    this.cartService.getLoggedCart().subscribe({
      next: (res) => {
        console.log(res);

        this.cartData = res.data;
        this.cartProducts = this.cartData.products;
        console.log(this.cartData);
      },
    });
  }
  updateCartData(res: ICartRoot): void {
    this.cartData = res.data;
    this.cartProducts = this.cartData.products;
  }
  deleteAllProducts(): void {
    this.cartService.clearAllCart().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getCartData();
  }
}
