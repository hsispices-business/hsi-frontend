import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  readonly httpService = inject(HttpService);
}
