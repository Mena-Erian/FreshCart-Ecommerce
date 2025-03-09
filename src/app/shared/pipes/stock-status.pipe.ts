import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {
  transform(qty: number | undefined): string | null {
    if (qty) {
      if (qty < 50) {
        return `onle ${qty} left`;
      } else return null;
    } else {
      return null;
    }
  }
}
