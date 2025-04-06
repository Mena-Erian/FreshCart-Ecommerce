import { Subscription } from 'rxjs';
import { CategoryService } from './../../core/services/category/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/iCategory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private categoryService: CategoryService) {}
  categories: ICategory[] = [];
  categSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(): void {
    this.categSubscription = this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
    });
  }
  ngOnDestroy(): void {
    this.categSubscription.unsubscribe();
  }
}
