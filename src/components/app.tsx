import {MainScreen} from '../pages/main/main-screen.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../pages/login/login-screen.tsx';
import {FavoritesScreen} from '../pages/favorites/favorites-screen.tsx';
import {OfferScreen} from '../pages/offers/offer-screen.tsx';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {PrivateRoute} from './private-route.tsx';
import {NotFoundScreen} from '../pages/not-found/not-found-screen.tsx';

type AppProps = {
  placesCount: number;
}

export function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placesCount={placesCount}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen />}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesScreen /></PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />}/>
        <Route path={AppRoute.Other} element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}
