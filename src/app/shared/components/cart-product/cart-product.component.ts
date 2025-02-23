import { CartService } from './../../../core/services/cart/cart.service';
import {
  Component,
  EventEmitter,
  inject,
  input,
  InputSignal,
  output,
  Output,
} from '@angular/core';
import { Data, ICartRoot, Product2 } from '../../interfaces/iCart';

@Component({
  selector: 'app-cart-product',
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss',
})
export class CartProductComponent {
  private readonly cartService = inject(CartService);
  product: InputSignal<Product2> = input.required<Product2>();
  // @Output() itemEvent: EventEmitter<number> = new EventEmitter();
  sendResEvent = output<ICartRoot>();
  deleteCartItem(id: string): void {
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.sendResEvent.emit(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateCount(id: string, newCount: number): void {
    this.cartService.updateCountOfProductCart(id, newCount).subscribe({
      next: (res) => {
        console.log(res);
        this.sendResEvent.emit(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
