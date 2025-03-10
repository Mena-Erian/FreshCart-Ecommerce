import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {}

// price = signal(2);
//   qty = signal(10);
//   //not writable signal
//   totalPrice: Signal<number> = computed(() => this.price() * this.qty());
//   change(): void {
//     this.qty.update((num) => ++num);
//     console.log(this.totalPrice());
//   }
