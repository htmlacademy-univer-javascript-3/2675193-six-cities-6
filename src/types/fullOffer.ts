import {Offer} from './offer.ts';
import {Host} from './host.ts';

export type FullOffer = Omit<Offer, 'previewImage' | 'smallImageSrc'> & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
};
