import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';
import {Offer} from '../../types/offer.ts';
import Header from '../../components/header.tsx';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store-hooks.ts';
import {getFavoriteOffers} from '../../store/offers-data/selectors.ts';

export function FavoritesScreen(): JSX.Element {
  const placeCards = useAppSelector(getFavoriteOffers);
  const citiesFavoriteOffers = placeCards.reduce(
    (cityToCards: { [city: string]: Offer[] }, offer) => {
      const cardCityName = offer.city.name;
      cityToCards[cardCityName] ??= [];
      cityToCards[cardCityName].push(offer);
      return cityToCards;
    },
    {} as { [city: string]: Offer[] }
  );
  return (
    <div className="page">
      <Header fromRoot={false}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(citiesFavoriteOffers).map(([cityName, cards]) =>
                (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cards.map((placeCard: Offer) => (<FavoriteCard key={placeCard.id} {...placeCard}/>))}
                    </div>
                  </li>))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
