import ReviewsMemo from '../review/reviews.tsx';
import CommentForm from '../comment-form/comment-form.tsx';
import {Map} from '../map/map.tsx';
import {useAppSelector} from '../../hooks/store-hooks.ts';
import {getComments, getNearby} from '../../store/offers-data/selectors.ts';
import {getCity} from '../../store/city-data/selectors.ts';
import {memo, useMemo} from 'react';
import {FullOffer} from '../../types/fullOffer.ts';

type OfferComponentProps = {
  offer: FullOffer;
}

function OfferComponent({offer}: OfferComponentProps) {
  const {price, images, isPremium, title, host, rating, description, maxAdults, bedrooms, type, goods} = offer;
  const starsWidth = `${rating * 20}%`;

  const reviews = useAppSelector(getComments);
  const activeCity = useAppSelector(getCity);
  const nearby = useAppSelector(getNearby);
  const currentPoint = useMemo(() => ({
    location: offer.location,
    id: offer.id
  }), [offer]);
  const mapPoints = useMemo(() => nearby.map((x) => ({
    location: x.location,
    id: x.id,
  })).concat(currentPoint), [nearby, currentPoint]);

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((image) =>
            (
              <div className="offer__image-wrapper" key={image}>
                <img className="offer__image" src={image} alt="Photo studio"/>
              </div>))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div> }
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
              Beautiful &amp; luxurious studio at great location
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: starsWidth}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((item) =>
                (
                  <li className="offer__inside-item" key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="offer__user-name">
                {host.name}
              </span>
              <span className="offer__user-status">
                {host.isPro}
              </span>
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ReviewsMemo reviews={reviews}/>
            <CommentForm/>
          </section>
        </div>
      </div>
      <Map activeCity={activeCity} points={mapPoints} selectedPoint={currentPoint} className='offer__map map'/>
    </section>
  );
}

const OfferComponentMemo = memo(OfferComponent);
export default OfferComponentMemo;
