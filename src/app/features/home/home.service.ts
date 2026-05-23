import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  getProductList(): Observable<any> {
    return of([]); // Placeholder for actual API call
  }
}
