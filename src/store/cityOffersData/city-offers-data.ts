import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CityOffersDataState,} from '../../types/state';
import {fetchOffersAction} from '../api-actions';


const initialState: CityOffersDataState = {
  offers: [],
  loadingStatus: false,
};


export const cityOffersData = createSlice({
  name: NameSpace.Offers,
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
