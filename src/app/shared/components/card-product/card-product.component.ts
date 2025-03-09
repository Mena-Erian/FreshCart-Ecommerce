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
  JsonPipe,
  DatePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { StockStatusPipe } from '../../pipes/stock-status.pipe';

@Component({
  selector: 'app-card-product',
  imports: [
    FaIconComponent,
    RouterLink,
    UpperCasePipe,
    CurrencyPipe,
    TitleCasePipe,
    DatePipe,
    StockStatusPipe,
  ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent implements OnInit {
  public readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);
  devRes: object = {};
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
          this.devRes = res;
          console.log(res, '   add');
          if (res.status === 'success') {
            this.toastrService.success(res.message, res.status);
            // this.cartService.cartCounter.next(res.numOfCartItems);
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        },
      });
    }
  }
}
