import { Component, input } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  readonly productList = input.required<IProduct[]>();
}
