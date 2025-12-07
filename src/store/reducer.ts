import {createReducer} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Offer} from '../types/offer.ts';
import {setLoadingStatus, updateAuthStatus, updateCity, updateEmail, updateOffers} from './actions.ts';
import {cities} from '../mocks/cities.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';


type State = {
  city: City;
  offers: Offer[];
  loadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string;
  appRoute: AppRoute;
}

const initialState: State = {
  city: cities[0],
  offers: [],
  loadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  appRoute: AppRoute.Root,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    })
    .addCase(updateAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(updateEmail, (state, action) => {
      state.email = action.payload;
    });
});
