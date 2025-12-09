import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';

export const getLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].loadingStatus;
export const getCommentsLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].commentsLoadingStatus;
export const getNearbyLoadingStatus = (state : State) : boolean => state[NameSpace.Offers].nearbyLoadingStatus;

export const getOffer = (state : State) => state[NameSpace.Offers].offer;

export const getOfferFound = (state : State) => !state[NameSpace.Offers].notFound;

export const getComments = (state : State) => state[NameSpace.Offers].comments;

export const getNearby = (state: State) => state[NameSpace.Offers].nearbyOffers;
