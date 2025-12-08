import {FullOffer} from '../types/full-offer.ts';
import {Offer} from '../types/offer.ts';

export const convertFullOfferToOffer = (offer: FullOffer): Offer => ({
  ...offer,
  previewImage: offer.images[0] || '',
  smallImageSrc: offer.images[0] || '',
});
