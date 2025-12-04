import {Offer} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';
import {City} from '../../types/city.ts';

export const getOffers = (state : State) : Offer[] => state[NameSpace.Site].offers;
export const getLoadingStatus = (state : State) : boolean => state[NameSpace.Site].loadingStatus;
export const getCity = (state : State) : City => state[NameSpace.Site].city;
