import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {Offer} from '../../types/offer.ts';
import {createSelector} from '@reduxjs/toolkit';
import {getCity} from '../city-data/selectors.ts';

export const getOffers = (state : State) : Offer[] => state[NameSpace.CityOffers].offers;

export const getCityOffersLoadingStatus = (state : State) : boolean => state[NameSpace.CityOffers].loadingStatus;

export const getOffersInActiveCity = createSelector(
  [getOffers, getCity],
  (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity.name),
);
