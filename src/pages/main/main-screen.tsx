import PlaceCards from '../../components/place-card/place-cards.tsx';
import {Offer} from '../../types/offer.ts';
import {useCallback, useMemo, useState} from 'react';
import {Nullable} from 'vitest';
import {Map} from '../../components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import HeaderMemo from '../../components/header.tsx';
import CityListMemo from '../../components/city-list/city-list.tsx';
import {getCity} from '../../store/city-data/selectors.ts';
import {getOffersInActiveCity} from '../../store/cityOffersData/selectors.ts';
import MainEmptyScreenMemo from './main-empty-screen.tsx';
import {updateFavoriteStatusAction} from '../../store/api-actions.ts';

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
  const onFavoriteClick = useCallback((offerId: string, isFavorite: boolean) => {
    const status = isFavorite ? 0 : 1;
    dispatch(updateFavoriteStatusAction({offerId, status}));
  }, [dispatch]);

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
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placeCards.length} places to stay in {activeCity.name}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                        Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <PlaceCards placeCards={placeCards} setActiveCardCb={setActiveOfferCb} onFavoriteClick={onFavoriteClick}/>
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
