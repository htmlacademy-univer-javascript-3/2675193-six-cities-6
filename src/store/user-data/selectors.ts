import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getEmail = (state: State): string => state[NameSpace.User].email;
export const getUserLoadingStatus = (state: State): boolean => state[NameSpace.User].loadingStatus;
