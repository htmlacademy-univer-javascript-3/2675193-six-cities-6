import {NameSpace} from '../const.ts';
import {userData} from './user-data/user-data.ts';
import {siteData} from './site-data/site-data.ts';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [NameSpace.Site]: siteData.reducer,
  [NameSpace.User]: userData.reducer,
});
