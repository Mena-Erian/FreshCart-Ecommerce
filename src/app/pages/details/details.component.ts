import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproducts';
import { faStar } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/faStar';
import { faPlus } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/faPlus';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-details',
  imports: [FaIconComponent, CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  public readonly productsService = inject(ProductsService);
  faStar = faStar;
  faPlus = faPlus;
  productId: string = '';
  productDetails: Iproduct | null = null;
  getParamId(): string {
    this.activatedRoute.paramMap.subscribe({
      next: (paramID) => {
        this.productId = paramID.get('id') || '';
      },
      error: (err) => {
        console.log(err);
      },
    });
    return this.productId;
  }
  getProductDetails(): void {
    this.productsService.getSpecificProduct(this.getParamId()).subscribe({
      next: (res) => {
        this.productDetails = res.data;
        console.log(this.productDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getProductDetails();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
  };
}
