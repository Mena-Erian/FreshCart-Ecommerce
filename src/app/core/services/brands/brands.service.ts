import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IAllBrands, ISpacificBrand } from '../../../shared/interfaces/iBrands';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly httpClient = inject(HttpClient);

  // brandName = signal('brand');
  brandName: WritableSignal<string> = signal('');
  constructor() {}
  getAllBrands(): Observable<IAllBrands> {
    return this.httpClient.get<IAllBrands>(
      `${environment.BaseUrl}/api/v1/brands`
    );
  }
  getSpecificBrand(id: string): Observable<ISpacificBrand> {
    return this.httpClient.get<ISpacificBrand>(
      `${environment.BaseUrl}/api/v1/brands/${id}`
    );
  }
  fetchBrandName(id: string) {
    this.httpClient
      .get<ISpacificBrand>(`${environment.BaseUrl}/api/v1/brands/${id}`)
      .subscribe((res) => {
        return this.brandName.set(res.data.name);
      });
  }
}
