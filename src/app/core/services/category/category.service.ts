import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { ICategoryRoot } from '../../../shared/interfaces/iCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}
  getAllCategories(): Observable<ICategoryRoot> {
    return this.httpClient.get<ICategoryRoot>(
      `${environment.BaseUrl}/api/v1/categories`
    );
  }
  getSpecificCategories(categId: string): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.BaseUrl}/api/v1/categories/${categId}`
    );
  }
}
