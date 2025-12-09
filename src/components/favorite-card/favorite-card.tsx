import {Link} from 'react-router-dom';
import {Routes} from '../../const.ts';
import {Offer} from '../../types/offer.ts';
import React from 'react';

type Props = {
  offer: Offer;
  onFavoriteClick?: (offerId: string, isFavorite: boolean) => void;
}

function FavoriteCard({offer, onFavoriteClick}: Props) {
  const {id, isPremium, price, rating, title, type, previewImage, isFavorite} = offer;
  const starsWidth = `${rating * 20}%`;
  const bookmarkButtonClassName = `${isFavorite ? 'place-card__bookmark-button--active' : ''} button`;
  //const bookmarkStatus = `${isFavorite ? 'In bookmarks' : ''} To bookmarks`;
  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${bookmarkButtonClassName}`} type="button"
            onClick={() => {
              onFavoriteClick?.(id, isFavorite);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={Routes.Offer + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const FavoriteCardMemo = React.memo(FavoriteCard);
export default FavoriteCardMemo;
