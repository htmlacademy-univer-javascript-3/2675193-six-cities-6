import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {GameData, SiteDataState, UserDataState} from '../../types/state';
import {fetchOffersAction, fetchQuestionAction} from '../api-actions';
import {cities} from '../../mocks/cities.ts';

const initialState: SiteDataState = {
  city: cities[0],
  offers: [],
  loadingStatus: false,
};

export const siteData = createSlice({
  name: NameSpace.Site,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loadingStatus = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loadingStatus = false;
      });
  }
});
