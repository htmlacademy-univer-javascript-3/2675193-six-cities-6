import {MainScreen} from '../pages/main/main-screen.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../pages/login/login-screen.tsx';
import {FavoritesScreen} from '../pages/favorites/favorites-screen.tsx';
import {OfferScreen} from '../pages/offers/offer-screen.tsx';
import {AppRoute} from '../const.ts';
import {PrivateRoute} from './private-route.tsx';
import {NotFoundScreen} from '../pages/not-found/not-found-screen.tsx';
import {checkAuthAction, fetchOffersAction, getFavoritesAction} from '../store/api-actions.ts';
import {store} from '../store';
import {useAppSelector} from '../hooks/store-hooks.ts';
import {Spinner} from './spinner.tsx';
import browserHistory from '../browser-history.ts';
import HistoryRouter from '../history-router.tsx';
import {getCommentsLoadingStatus, getLoadingStatus, getNearbyLoadingStatus,} from '../store/offers-data/selectors.ts';
import {getAuthorizationStatus, getUserLoadingStatus} from '../store/user-data/selectors.ts';
import {getCityOffersLoadingStatus} from '../store/cit-offers-data/selectors.ts';
import {getFavouritesLoadingStatus} from '../store/favorites-data/selectors.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(getFavoritesAction());

export function App(): JSX.Element {
  const isLoading = useAppSelector(getLoadingStatus);
  const isCityOffersLoading = useAppSelector(getCityOffersLoadingStatus);
  const isCommentsLoading = useAppSelector(getCommentsLoadingStatus);
  const isNearbyLoading = useAppSelector(getNearbyLoadingStatus);
  const isUserLoading = useAppSelector(getUserLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favouritesLoadingStatus = useAppSelector(getFavouritesLoadingStatus);

  if (isLoading || isUserLoading || isNearbyLoading || isCommentsLoading || isCityOffersLoading || favouritesLoadingStatus) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
        <Route path={AppRoute.Other} element={<NotFoundScreen/>}/>

      </Routes>
    </HistoryRouter>
  );
}
