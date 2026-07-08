export type Lang = "en" | "bn";

export interface TranslationMap {
  [key: string]: string;
}

export interface CartState {
  items: CartItemLocal[];
  total: number;
}

export interface CartItemLocal {
  productId: bigint;
  titleEn: string;
  titleBn: string;
  priceInPaisa: bigint;
  quantity: number;
  coverImageUrl: string;
}

export interface NavItem {
  label: string;
  labelBn: string;
  href: string;
  icon?: string;
}

/** Frontend-friendly StudyMaterial filter shape.
 *  Mirrors the backend StudyMaterialFilter but uses plain numbers for
 *  year/semester so the UI can work with form values without bigint casts. */
export interface StudyMaterialFilters {
  department?: string;
  year?: number;
  semester?: number;
  regulation?: string;
  classTest?: string;
  subjectCode?: string;
}
