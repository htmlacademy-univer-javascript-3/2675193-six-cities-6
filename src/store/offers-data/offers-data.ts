import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersDataState} from '../../types/state';
import {fetchOfferAction, fetchOfferNearby, getReviewsAction,} from '../api-actions';
import {offersFull} from '../../mocks/offers-full.ts';


const initialState: OffersDataState = {
  offer: offersFull[1],
  nearbyOffers: [],
  nearbyLoadingStatus: false,
  comments: [],
  commentsLoadingStatus: false,
  loadingStatus: false,
};


export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loadingStatus = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loadingStatus = false;
      })
      .addCase(fetchOfferNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyLoadingStatus = false;
      })
      .addCase(fetchOfferNearby.pending, (state) => {
        state.nearbyLoadingStatus = true;
      })
      .addCase(getReviewsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoadingStatus = false;
      })
      .addCase(getReviewsAction.rejected, (state) => {
        state.comments = [];
        state.commentsLoadingStatus = false;
      })
      .addCase(getReviewsAction.pending, (state) => {
        state.commentsLoadingStatus = true;
      });
  }
});
