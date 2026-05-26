import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getProductList(): Observable<unknown[]> {
    return of([]); // Placeholder for actual API call
  }
}
