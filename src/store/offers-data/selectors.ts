import {Offer} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';
import {createSelector} from '@reduxjs/toolkit';
import {getCity} from '../city-data/selectors.ts';

export const getOffers = (state : State) : Offer[] => state[NameSpace.Site].offers;
export const getLoadingStatus = (state : State) : boolean => state[NameSpace.Site].loadingStatus;

export const getOffersInActiveCity = createSelector(
  [getOffers, getCity],
  (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity.name),
);

export const getFavoriteOffers = createSelector(
  [getOffers],
  (offers) => offers.filter((offer) => offer.isFavorite),
);
