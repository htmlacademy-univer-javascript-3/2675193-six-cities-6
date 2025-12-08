import {FavouritesDataState} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {getFavoritesAction, updateFavoriteStatusAction} from '../api-actions.ts';

const initialState: FavouritesDataState = {
  favourites: [],
  loadingStatus: false,
  postLoadingStatus: false,
};

export const favouritesData = createSlice({
  name: NameSpace.Favourites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFavoritesAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(getFavoritesAction.fulfilled, (state, payload) => {
        state.loadingStatus = false;
        state.favourites = payload.payload;
      })
      .addCase(getFavoritesAction.rejected, (state) => {
        state.loadingStatus = false;
      })
      .addCase(updateFavoriteStatusAction.pending, (state) => {
        state.loadingStatus = false;
      })
      .addCase(updateFavoriteStatusAction.fulfilled, (state, action) => {
        const {status} = action.meta.arg;
        const updatedOffer = action.payload;

        if (status === 1) {
          state.favourites.push(updatedOffer);
        } else {
          state.favourites = state.favourites.filter((offer) => offer.id !== updatedOffer.id);
        }

        state.postLoadingStatus = false;
      })
      .addCase(updateFavoriteStatusAction.rejected, (state) => {
        state.postLoadingStatus = false;
      });
  }
});
