import {Offer} from '../../types/offer.ts';
import {useCallback, useMemo, useState} from 'react';
import {Nullable} from 'vitest';
import {Map} from '../../components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import HeaderMemo from '../../components/header.tsx';
import CityListMemo from '../../components/city-list/city-list.tsx';
import {getCity} from '../../store/city-data/selectors.ts';
import {getOffersInActiveCity} from '../../store/cit-offers-data/selectors.ts';
import MainEmptyScreenMemo from './main-empty-screen.tsx';
import {updateFavoriteStatusAction} from '../../store/api-actions.ts';
import SortedPlaceCardsMemo from '../../components/sorted-place-cards/sorted-place-cards.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {getAuthorizationStatus} from '../../store/user-data/selectors.ts';
import {useNavigate} from 'react-router-dom';

export function MainScreen(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const placeCards = useAppSelector(getOffersInActiveCity);
  const mapPoints = useMemo(() => placeCards.map((x) => ({
    location: x.location,
    id: x.id,
  })), [placeCards]);
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const setActiveOfferCb = useCallback((offer: Nullable<Offer>) => setActiveOffer(offer), []);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const onFavoriteClick = useCallback((offerId: string, isFavorite: boolean) => {
    if (authStatus === AuthorizationStatus.Auth) {
      const status = isFavorite ? 0 : 1;
      dispatch(updateFavoriteStatusAction({offerId, status}));
    } else {
      navigate(AppRoute.Login);
    }
  }, []);

  return (
    <div className="page page--gray page--main">
      <HeaderMemo fromRoot />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityListMemo/>
        {(placeCards.length === 0) ? (
          <MainEmptyScreenMemo cityName={activeCity.name}/>) :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <SortedPlaceCardsMemo placeCards={placeCards} activeCity={activeCity} setActiveCardCb={setActiveOfferCb} onFavoriteClick={onFavoriteClick}/>
              </section>
              <div className="cities__right-section">
                <Map
                  activeCity={activeCity}
                  points={mapPoints}
                  selectedPoint={
                    activeOffer
                      ? {
                        location: activeOffer.location,
                        id: activeOffer.id,
                      }
                      : undefined
                  }
                  className='cities__map map'
                />
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
}
