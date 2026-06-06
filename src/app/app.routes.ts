import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'product-detail',
    loadComponent: () =>
      import('./features/products/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent,
      ),
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'heritage',
    loadComponent: () =>
      import('./features/heritage/heritage.component').then((m) => m.HeritageComponent),
  },
  { path: '**', redirectTo: '' },
];
