import {NameSpace} from '../../const.ts';
import {State} from '../../types/store-types.ts';

export const getFavoriteOffers = (state : State) => state[NameSpace.Favourites].favourites;
export const getFavoriteOffersCount = (state : State) => state[NameSpace.Favourites].favourites.length;
export const getFavouritesLoadingStatus = (state : State) => state[NameSpace.Favourites].loadingStatus || state[NameSpace.Favourites].postLoadingStatus;
