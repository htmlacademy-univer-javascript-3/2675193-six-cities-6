import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '../types/offer.ts';
import {APIRoute} from '../const.ts';
import {AppDispatch} from '../types/store-types.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {State} from '../types/state.ts';
import {Review, ReviewPost} from '../types/review.ts';
import {FullOffer} from '../types/full-offer.ts';
import {FavoriteStatus} from '../types/favorite-status.ts';
import {convertFullOfferToOffer} from '../utils/utils.ts';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchOfferNearby = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferNearby',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const getReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Comments.replace('{offerId}', id));
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<Review, ReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Comments.replace('{offerId}', id), {comment, rating: Number(rating)});
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const getFavoritesAction = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance;
}>(
  'favourites/getFavourites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favourites);

    return data;
  }
);

export const updateFavoriteStatusAction = createAsyncThunk<Offer, FavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favourites/updateStatus',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<FullOffer>(`${APIRoute.Favourites}/${offerId}/${status}`);

    return convertFullOfferToOffer(data);
  }
);
