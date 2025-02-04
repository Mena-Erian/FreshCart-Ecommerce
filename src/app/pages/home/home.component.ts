import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { IproductRoot, Iproduct } from '../../shared/interfaces/iproducts';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  productsRootRes!: IproductRoot;
  products!: Iproduct[];
  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        this.productsRootRes = res;
        this.products = this.productsRootRes.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
