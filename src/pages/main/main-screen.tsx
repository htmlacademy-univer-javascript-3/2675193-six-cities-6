import PlaceCards from '../../components/place-card/place-cards.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {Map} from '../../components/map/map.tsx';
import CityList from '../../components/city-list/city-list.tsx';
import {cities} from '../../mocks/cities.ts';
import {useAppSelector} from '../../hooks/store-hooks.ts';
import Header from '../../components/header.tsx';

export function MainScreen(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const placeCards = useAppSelector((state) => state.offers.filter((o) => o.city.name === activeCity.name));
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  return (
    <div className="page page--gray page--main">
      <Header fromRoot />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={cities}/>
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
              <PlaceCards cardsProps={placeCards} setActiveCardCb={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <Map
                points={placeCards.map((x) => ({
                  location: x.location,
                  id: x.id,
                }))}
                selectedPoint={
                  activeOffer
                    ? {
                      location: activeOffer.location,
                      id: activeOffer.id,
                    }
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
