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
