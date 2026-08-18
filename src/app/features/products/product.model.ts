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
  JEERA = 'hsi-jeera',
  KALI_MIRCH = 'hsi-kali-mirch',
  ELAICHI = 'hsi-elaichi',
  LAUNG = 'hsi-laung',
  DALCHINI = 'hsi-dalchini',
  METHI = 'hsi-methi',
  AJWAIN = 'hsi-ajwain',
  SAUNF = 'hsi-saunf',
  HING = 'hsi-hing',
  AMCHUR = 'hsi-amchur',
  KESAR = 'hsi-kesar',
  JAVITRI = 'hsi-javitri',
  JAIPHAL = 'hsi-jaiphal',
  CHAAT_MASALA = 'hsi-chaat-masala',
  KITCHEN_KING = 'hsi-kitchen-king',
  BIRYANI_MASALA = 'hsi-biryani-masala',
  SABZI_MASALA = 'hsi-sabzi-masala',
  TANDOORI_MASALA = 'hsi-tandoori-masala',
  PAV_BHAJI_MASALA = 'hsi-pav-bhaji-masala',
  CHOLE_MASALA = 'hsi-chole-masala',
}
