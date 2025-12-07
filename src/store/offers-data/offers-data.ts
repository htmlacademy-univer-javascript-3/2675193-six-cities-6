import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {SiteDataState} from '../../types/state';
import {fetchOffersAction, } from '../api-actions';


const initialState: SiteDataState = {
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
