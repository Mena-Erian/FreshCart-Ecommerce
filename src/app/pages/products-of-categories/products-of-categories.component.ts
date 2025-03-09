import { Subscription } from 'rxjs';
import { CategoryService } from './../../core/services/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/iCategory';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-products-of-categories',
  imports: [DatePipe],
  templateUrl: './products-of-categories.component.html',
  styleUrl: './products-of-categories.component.scss',
})
export class ProductsOfCategoriesComponent implements OnInit, OnDestroy {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly categoryService = inject(CategoryService);
  categSubsc!: Subscription;
  categoryData: ICategory = {} as ICategory;
  loaded: boolean = false;
  ngOnInit(): void {
    console.log(this.categoryData, typeof this.categoryData);

    this.categSubsc = this.getCategory(this.getParmId());
  }
  getParmId(): string {
    let categId: any = '';
    this.activatedRoute.paramMap.subscribe((param) => {
      categId = param.get('categoryId');
      console.log(categId);
    });
    return categId;
  }
  getCategory(param: string): Subscription {
    return this.categoryService.getSpecificCategories(param).subscribe({
      next: (res) => {
        this.categoryData = res.data;
        this.loaded = true;
        console.log(this.categoryData);
      },
    });
  }
  ngOnDestroy(): void {
    this.categSubsc.unsubscribe();
  }
}
