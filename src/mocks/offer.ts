import {City} from './city.ts';
import {Location} from './location.ts';

export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'hotel' | 'house';
  price: number;
  city: City | null;
  location: Location | null;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: [string];
  images: [string];
  maxAdults: number;
};
