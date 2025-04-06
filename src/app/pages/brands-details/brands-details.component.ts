import { BrandsService } from './../../core/services/brands/brands.service';
import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { IBrandDetails } from '../../shared/interfaces/iBrands';

@Component({
  selector: 'app-brands-details',
  imports: [DatePipe],
  templateUrl: './brands-details.component.html',
  styleUrl: './brands-details.component.scss',
})
export class BrandsDetailsComponent implements OnInit, OnDestroy {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly brandsService = inject(BrandsService);
  brandSubscription: Subscription = new Subscription();
  brandData: IBrandDetails = {} as IBrandDetails;
  loaded: boolean = false;
  ngOnInit(): void {
    this.brandSubscription = this.getBrand(this.getParmId());
    this.setBrandTitle();
  }
  getParmId(): string {
    let brandId: string = '';
    this.activatedRoute.paramMap.subscribe((param) => {
      brandId = param.get('brandId')!;
      console.log(brandId);
    });
    return brandId;
  }
  getBrand(param: string): Subscription {
    return this.brandsService.getSpecificBrand(param).subscribe({
      next: (res) => {
        this.brandData = res.data;
        this.loaded = true;
        console.log(this.brandData);
      },
    });
  }
  setBrandTitle(): void {
    this.brandsService.brandName.set(this.brandData.name);
  }
  ngOnDestroy(): void {
    this.brandSubscription.unsubscribe();
  }
}
