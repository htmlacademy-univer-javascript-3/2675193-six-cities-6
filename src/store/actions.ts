import {City} from '../types/city.ts';
import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';

export const updateCity = createAction<{ city: City }>('updateCity');
export const updateOffers = createAction<{ offers: Offer[] }>('updateOffers');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const updateAuthStatus = createAction<AuthorizationStatus>('auth/updateAuthStatus');
export const updateEmail = createAction<string>('auth/updateEmail');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
