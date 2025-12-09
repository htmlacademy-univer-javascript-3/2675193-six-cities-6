import {NameSpace} from '../const.ts';
import {userData} from './user-data/user-data.ts';
import {offersData} from './offers-data/offers-data.ts';
import {combineReducers} from '@reduxjs/toolkit';
import {cityData} from './city-data/city-data.ts';
import {cityOffersData} from './cit-offers-data/city-offers-data.ts';
import {favouritesData} from './favorites-data/favorites-data.ts';

export const rootReducer = combineReducers({
  [NameSpace.City]: cityData.reducer,
  [NameSpace.CityOffers]: cityOffersData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Favourites]: favouritesData.reducer,
});
