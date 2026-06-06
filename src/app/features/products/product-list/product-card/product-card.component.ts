import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../product.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly product = input.required<IProduct>();
}
