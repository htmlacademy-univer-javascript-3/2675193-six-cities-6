import {createReducer} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Offer} from '../types/offer.ts';
import {offers} from '../mocks/offers.ts';
import {updateCity, updateOffers} from './actions.ts';
import {cities} from '../mocks/cities.ts';


type State = {
  city: City;
  offers: Offer[];
}

const initialState: State = {
  city: cities[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
