import { Component, computed, input, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { IProduct } from '../product.model';

const PAGE_SIZE = 8;

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  readonly productList = input.required<IProduct[]>();

  private readonly visibleCount = signal(PAGE_SIZE);

  readonly visibleProducts = computed(() => this.productList().slice(0, this.visibleCount()));
  readonly hasMore = computed(() => this.visibleCount() < this.productList().length);

  loadMore(): void {
    this.visibleCount.update((n) => n + PAGE_SIZE);
  }
}
