import { Component, computed, inject, signal } from '@angular/core';
import { FilterSelectionComponent } from './filter-selection/filter-selection.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ICategory } from './product.model';
import { ALL_CATEGORIES } from './product.constants';

@Component({
  selector: 'app-products',
  imports: [FilterSelectionComponent, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly productsService = inject(ProductsService);

  allProducts = toSignal(this.productsService.getAllProducts(), { initialValue: [] });
  categories = toSignal(this.productsService.getCategories(), { initialValue: [] });

  selectedCategory = signal<ICategory>(ALL_CATEGORIES);

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    if (category.id === ALL_CATEGORIES.id) return this.allProducts();
    return this.allProducts().filter((p) => p.category.id === category.id);
  });

  onCategorySelected(category: ICategory): void {
    this.selectedCategory.set(category);
  }
}
