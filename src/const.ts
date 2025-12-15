
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Other = '*',
  NotFound = '/404',
}

export enum Routes {
  Offer = '/offer/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export enum APIRoute {
  Offers = '/offers',
  OfferInfo = '/offers/{offerId}',
  OfferNearby = '/offers/{offerId}/nearby',
  Favourites = '/favorite',
  SetFavourite = '/favorite/{offerId}/{status}',
  Comments = '/comments/{offerId}',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  City = 'CITY',
  CityOffers = 'CITYOFFERS',
  Offers = 'OFFERS',
  User = 'USER',
  Favourites = 'FAVOURITES',
}
