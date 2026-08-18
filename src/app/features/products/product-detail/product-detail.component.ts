import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsService = inject(ProductsService);

  readonly product = signal<IProduct | null>(null);
  readonly slug = computed(() => this.route.snapshot.paramMap.get('slug') ?? '');

  ngOnInit(): void {
    const slug = this.slug();
    this.productsService.getAllProducts().subscribe({
      next: (products) => {
        const found = products.find((p) => p.slug === slug);
        if (!found) {
          this.router.navigate(['/products']);
          return;
        }
        this.product.set(found);
      },
    });
  }
}
