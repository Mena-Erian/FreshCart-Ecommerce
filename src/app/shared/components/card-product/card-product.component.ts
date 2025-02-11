import { ViwportService } from './../../../core/services/veiwport/veiwport.service';
import { Component, Inject, input, OnInit, PLATFORM_ID } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faStar';
import { Iproduct } from '../../interfaces/iproducts';
import { faPlus } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faPlus';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  product = input<Iproduct>();
  width: number = 0;
  constructor(
    private viwportService: ViwportService,
    @Inject(PLATFORM_ID) private ID: any
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.ID)) {
      this.viwportService.width$.subscribe((w) => (this.width = w));
    }
  }
}
