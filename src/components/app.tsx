import {MainScreen} from '../pages/main/main-screen.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../pages/login/login-screen.tsx';
import {FavoritesScreen} from '../pages/favorites/favorites-screen.tsx';
import {OfferScreen} from '../pages/offers/offer-screen.tsx';
import {AppRoute} from '../const.ts';
import {PrivateRoute} from './private-route.tsx';
import {NotFoundScreen} from '../pages/not-found/not-found-screen.tsx';
import {checkAuthAction, fetchOffersAction} from '../store/api-actions.ts';
import {store} from '../store';
import {useAppSelector} from '../hooks/store-hooks.ts';
import {Spinner} from './spinner.tsx';
import browserHistory from '../browser-history.ts';
import HistoryRouter from '../history-router.tsx';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

export function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const isLoading = useAppSelector((state) => state.loadingStatus);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isLoading) {
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
              <FavoritesScreen placeCards={offers.filter((place) => place.isFavorite)}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
        <Route path={AppRoute.Other} element={<NotFoundScreen/>}/>

      </Routes>
    </HistoryRouter>
  );
}
