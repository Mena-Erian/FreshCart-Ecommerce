import { ViwportService } from './../../../core/services/veiwport/veiwport.service';
import {
  Component,
  inject,
  Inject,
  input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faStar';
import { Iproduct } from '../../interfaces/iproducts';
import { faPlus } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faPlus';
import {
  CurrencyPipe,
  isPlatformBrowser,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-card-product',
  imports: [
    FaIconComponent,
    RouterLink,
    UpperCasePipe,
    CurrencyPipe,
    TitleCasePipe,
  ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent implements OnInit {
  public readonly cartService = inject(CartService);
  product = input<Iproduct>();
  faStar = faStar;
  faPlus = faPlus;
  width: number = 0;
  isLoading: boolean = false;
  constructor(
    private viwportService: ViwportService,
    @Inject(PLATFORM_ID) private ID: any
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.ID)) {
      this.viwportService.width$.subscribe((w) => (this.width = w));
    }
  }
  addToCart(id: string | undefined) {
    if (id) {
      this.isLoading = true;
      this.cartService.addProductToCart(id).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log(res);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        },
      });
    }
  }
}
