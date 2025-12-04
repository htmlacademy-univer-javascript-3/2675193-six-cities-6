import {City} from './city.ts';
import {Offer} from './offer.ts';
import { AuthorizationStatus} from '../const.ts';
import {store} from '../store';


export type SiteDataState = {
  city: City;
  offers: Offer[];
  loadingStatus: boolean;
}

export type UserDataState = {
  email: string;
  authorizationStatus: AuthorizationStatus;
  loadingStatus: boolean;
}

export type State = ReturnType<typeof store.getState>;
