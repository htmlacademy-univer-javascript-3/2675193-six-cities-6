import {City} from '../types/city.ts';
import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';

export const updateCity = createAction<{ city: City }>('updateCity');
export const updateOffers = createAction<{ offers: Offer[] }>('updateOffers');
