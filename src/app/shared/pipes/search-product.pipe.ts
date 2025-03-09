import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interfaces/iproducts';

@Pipe({
  name: 'searchProduct',
})
export class searchProductPipe implements PipeTransform {
  transform(products: Iproduct[], searchTerm: string) {
    return products.filter((product, index) => {
      if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return product;
      } else {
        return null;
      }
    });
  }
}
