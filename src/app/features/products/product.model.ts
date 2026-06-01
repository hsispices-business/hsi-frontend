export interface IProduct {
  id: string;
  name: string;
  slug: ProductSlug;
  generic_name?: string;
  description: string;
  short_description?: string;
  category: ICategory;
}

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description?: string;
  image_url?: string;
}

export enum ProductSlug {
  HALDI = 'hsi-haldi',
  MIRCH = 'hsi-mirch',
  DHANIA = 'hsi-dhania',
  GARAM_MASALA = 'hsi-garam-masala',
}
