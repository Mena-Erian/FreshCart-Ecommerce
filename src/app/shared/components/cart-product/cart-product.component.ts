import { CartService } from './../../../core/services/cart/cart.service';
import { Component, inject, input, InputSignal } from '@angular/core';
import { Product2 } from '../../interfaces/iCart';

@Component({
  selector: 'app-cart-product',
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss',
})
export class CartProductComponent {
  private readonly cartService = inject(CartService);
  product: InputSignal<Product2> = input.required<Product2>();
  deleteCartItem(id: string): void {
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
