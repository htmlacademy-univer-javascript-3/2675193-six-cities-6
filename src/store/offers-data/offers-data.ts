import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersDataState} from '../../types/state';
import {fetchOfferAction, fetchOfferNearby, getReviewsAction, sendReviewAction,} from '../api-actions';
import {offersFull} from '../../mocks/offers-full.ts';


const initialState: OffersDataState = {
  offer: offersFull[1],
  nearbyOffers: [],
  nearbyLoadingStatus: false,
  comments: [],
  commentsLoadingStatus: false,
  loadingStatus: false,
  sendingReviewsStatus: false,
  notFound: false,
};


export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.loadingStatus = true;
        state.notFound = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loadingStatus = false;
        state.notFound = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loadingStatus = false;
        state.notFound = true;
      })
      .addCase(fetchOfferNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyLoadingStatus = false;
      })
      .addCase(fetchOfferNearby.pending, (state) => {
        state.nearbyLoadingStatus = true;
      })
      .addCase(fetchOfferNearby.rejected, (state) => {
        state.nearbyLoadingStatus = false;
        state.nearbyOffers = [];
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
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.comments = state.comments.concat(action.payload);
        state.sendingReviewsStatus = false;
      }).addCase(sendReviewAction.pending, (state) => {
        state.sendingReviewsStatus = true;
      }).addCase(sendReviewAction.rejected, (state) => {
        state.sendingReviewsStatus = false;
      });
  }
});
