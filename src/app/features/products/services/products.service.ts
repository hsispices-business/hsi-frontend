import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { ICategory, IProduct } from '../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly httpService = inject(HttpService);

  getAllProducts(): Observable<IProduct[]> {
    const target = `/products`;
    return this.httpService.get<IProduct[]>(target);
  }

  getCategories(): Observable<ICategory[]> {
    const target = `/categories`;
    return this.httpService.get<ICategory[]>(target);
  }
}
