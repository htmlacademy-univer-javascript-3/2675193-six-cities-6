export enum SortOptionType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  Rating = 'Top rated first',
}

export type SortOptionTypeKeys = keyof typeof SortOptionType;
