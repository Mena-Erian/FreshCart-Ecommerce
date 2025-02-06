import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faStar';
import { Iproduct } from '../../interfaces/iproducts';
import { faPlus } from './../../../../../node_modules/@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-card-product',
  imports: [FaIconComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  faStar = faStar;
  faPlus = faPlus;
  product = input<Iproduct>();
}
