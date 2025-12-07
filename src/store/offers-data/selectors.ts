import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';
import {createSelector} from '@reduxjs/toolkit';
import {getOffers} from '../cityOffersData/selectors.ts';

export const getLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].loadingStatus;
export const getCommentsLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].commentsLoadingStatus;
export const getNearbyLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].nearbyLoadingStatus;

export const getFavoriteOffers = createSelector(
  [getOffers],
  (offers) => offers.filter((offer) => offer.isFavorite),
);

export const getOffer = (state : State) => state[NameSpace.Offers].offer;

export const getComments = (state : State) => state[NameSpace.Offers].comments;

export const getNearby = (state: State) => state[NameSpace.Offers].nearbyOffers;
