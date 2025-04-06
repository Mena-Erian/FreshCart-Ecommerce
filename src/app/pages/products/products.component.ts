import { ProductsService } from './../../core/services/products/products.service';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { Iproduct } from '../../shared/interfaces/iproducts';
import { SlicePipe } from '@angular/common';
import { searchProductPipe } from '../../shared/pipes/search-product.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CardProductComponent, FormsModule, searchProductPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  products: WritableSignal<Iproduct[]> = signal<Iproduct[]>([]);
  searchTerm: string = '';
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.products.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
