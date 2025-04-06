import { BrandsService } from './../../core/services/brands/brands.service';
import {
  Component,
  computed,
  OnDestroy,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { IBrand } from '../../shared/interfaces/iBrands';

@Component({
  selector: 'app-brands',
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit, OnDestroy {
  constructor(private brandsService: BrandsService) {}
  brands: IBrand[] = [];
  brandsSubscription: Subscription = new Subscription();
  res: any;
  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands(): void {
    this.brandsSubscription = this.brandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.res = res;
        this.brands = res.data;
      },
    });
  }
  ngOnDestroy(): void {
    this.brandsSubscription.unsubscribe();
  }
}

// price = signal(2);
//   qty = signal(10);
//   //not writable signal
//   totalPrice: Signal<number> = computed(() => this.price() * this.qty());
//   change(): void {
//     this.qty.update((num) => ++num);
//     console.log(this.totalPrice());
//   }
