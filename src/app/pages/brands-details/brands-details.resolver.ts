import { BrandsService } from './../../core/services/brands/brands.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsResolver implements Resolve<any> {
  constructor(private brandsService: BrandsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const brandId: string = route.paramMap.get('brandId')!;
    console.log('brand res ');
    return this.brandsService.fetchBrandName(brandId);
  }
}
