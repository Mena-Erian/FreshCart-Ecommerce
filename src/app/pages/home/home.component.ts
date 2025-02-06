import { CategoryService } from './../../core/services/category/category.service';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { IproductRoot, Iproduct } from '../../shared/interfaces/iproducts';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { ICategory, ICategoryRoot } from '../../shared/interfaces/iCategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CardProductComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  private readonly productsService = inject(ProductsService);
  private readonly categoryService = inject(CategoryService);
  productsRootRes!: IproductRoot;
  products!: Iproduct[];
  categoriesRootRes!: ICategoryRoot;
  categories!: ICategory[];
  getProductsData(): void {
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
  getCategoreisData(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesRootRes = res;
        this.categories = this.categoriesRootRes.data;
        console.log(this.categories);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }
  ngOnInit(): void {
    this.getProductsData();
    this.getCategoreisData();
  }
}
