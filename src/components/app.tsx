import {MainScreen} from '../pages/main/main-screen.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../pages/login/login-screen.tsx';
import {FavoritesScreen} from '../pages/favorites/favorites-screen.tsx';
import {OfferScreen} from '../pages/offers/offer-screen.tsx';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {PrivateRoute} from './private-route.tsx';
import {NotFoundScreen} from '../pages/not-found/not-found-screen.tsx';
import {PlaceCardProps} from './place-card-props.tsx';

type AppProps = {
  placesCount: number;
  offers: PlaceCardProps[];
}

export function App({placesCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placesCount={placesCount} placeCards={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen />}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen placeCards={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
        <Route path={AppRoute.Other} element={<NotFoundScreen/>}/>

      </Routes>
    </BrowserRouter>
  );
}
