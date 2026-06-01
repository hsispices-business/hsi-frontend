import { Component, computed, input, output, signal } from '@angular/core';
import { ICategory } from '../product.model';
import { ALL_CATEGORIES } from '../product.constants';

@Component({
  selector: 'app-filter-selection',
  imports: [],
  templateUrl: './filter-selection.component.html',
  styleUrl: './filter-selection.component.scss',
})
export class FilterSelectionComponent {
  readonly categories = input.required<ICategory[]>();
  readonly categorySelected = output<ICategory>();

  selectedCategory = signal<ICategory>(ALL_CATEGORIES);

  displayCategories = computed(() => [ALL_CATEGORIES, ...this.categories()]);

  selectCategory(category: ICategory): void {
    this.selectedCategory.set(category);
    this.categorySelected.emit(category);
  }

  isSelected(category: ICategory): boolean {
    return this.selectedCategory().id === category.id;
  }
}
