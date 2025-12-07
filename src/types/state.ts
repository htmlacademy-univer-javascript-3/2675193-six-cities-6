import {City} from './city.ts';
import {Offer} from './offer.ts';
import { AuthorizationStatus} from '../const.ts';
import {store} from '../store';
import {Review} from './review.ts';
import {FullOffer} from './fullOffer.ts';


export type OffersDataState = {
  offer: FullOffer;
  nearbyOffers: Offer[];
  nearbyLoadingStatus: boolean;
  comments: Review[];
  commentsLoadingStatus: boolean;
  loadingStatus: boolean;
}

export type CityOffersDataState = {
  offers: Offer[];
  loadingStatus: boolean;
}


export type CityDataState = {
  city: City;
}

export type UserDataState = {
  email: string;
  authorizationStatus: AuthorizationStatus;
  loadingStatus: boolean;
}

export type State = ReturnType<typeof store.getState>;
