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
  //ngx-owl-carousel-o
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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
      1024: {
        items: 5,
      },
    },
    nav: false,
  };
  customMainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
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
