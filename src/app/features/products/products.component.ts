import { Component, computed, inject } from '@angular/core';
import { FilterSelectionComponent } from './filter-selection/filter-selection.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products',
  imports: [FilterSelectionComponent, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly productsService = inject(ProductsService);
  allProducts = toSignal(this.productsService.getAllProducts(), { initialValue: [] });
  duplicateProducts = computed(() => this.allProducts().concat(this.allProducts()));
}
