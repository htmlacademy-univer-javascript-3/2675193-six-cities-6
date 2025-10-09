import {City} from './city.ts';
import {Location} from './location.ts';

export type Offer = {
  id: string;
  name: string;
  type: 'apartment' | 'room' | 'hotel' | 'house';
  price: number;
  city: City | null;
  location: Location | null;
  isBookmarked: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  bedrooms: number;
  peoplesCountMax: number;
  inside: string;
};
