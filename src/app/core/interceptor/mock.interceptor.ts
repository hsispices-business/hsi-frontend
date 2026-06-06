import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ICategory, IProduct, ProductSlug } from '../../features/products/product.model';

const MOCK_CATEGORIES: ICategory[] = [
  {
    id: 'cat-1',
    name: 'Whole Spices',
    slug: 'whole-spices',
    description: 'Pure, unground spices sourced directly from farms.',
    short_description: 'Farm-fresh whole spices',
  },
  {
    id: 'cat-2',
    name: 'Ground Spices',
    slug: 'ground-spices',
    description: 'Freshly ground spices for maximum aroma and flavour.',
    short_description: 'Freshly ground for flavour',
  },
  {
    id: 'cat-3',
    name: 'Spice Blends',
    slug: 'spice-blends',
    description: 'Expertly crafted blends of premium spices.',
    short_description: 'Crafted spice blends',
  },
];

const MOCK_PRODUCTS: IProduct[] = [
  {
    id: 'prod-1',
    name: 'HSI Haldi',
    slug: ProductSlug.HALDI,
    generic_name: 'Turmeric Powder',
    description: 'Pure turmeric powder with high curcumin content, sourced from the finest farms.',
    short_description: 'High-curcumin turmeric powder',
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'prod-2',
    name: 'HSI Mirch',
    slug: ProductSlug.MIRCH,
    generic_name: 'Red Chilli Powder',
    description: 'Bold, vibrant red chilli powder ground from premium dried chillies.',
    short_description: 'Vibrant red chilli powder',
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'prod-3',
    name: 'HSI Dhania',
    slug: ProductSlug.DHANIA,
    generic_name: 'Coriander Powder',
    description: 'Aromatic coriander powder with a warm, citrusy flavour profile.',
    short_description: 'Aromatic coriander powder',
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'prod-4',
    name: 'HSI Garam Masala',
    slug: ProductSlug.GARAM_MASALA,
    generic_name: 'Garam Masala Blend',
    description: 'A rich, warming blend of whole spices roasted and ground to perfection.',
    short_description: 'Classic warming spice blend',
    category: MOCK_CATEGORIES[2],
  },
];

const MOCK_DB: Record<string, unknown> = {
  '/api/products': MOCK_PRODUCTS,
  '/api/categories': MOCK_CATEGORIES,
};

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  const path = new URL(req.url, 'http://localhost').pathname;

  if (path in MOCK_DB) {
    return of(new HttpResponse({ status: 200, body: MOCK_DB[path] }));
  }

  return next(req);
};
