import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
  },
  {
    path: 'dev/testing/home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'dev/testing/products',
    loadComponent: () =>
      import('./features/products/products.component').then((m) => m.ProductsComponent),
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
