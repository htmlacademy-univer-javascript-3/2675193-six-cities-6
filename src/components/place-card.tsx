type PlaceCardProps = {
  isPremium: boolean;
  isBookmarked: boolean;
  imageSrc: string;
  price: number;
  title: string;
  starsCount: number;
  cardType: string;
};


export function PlaceCard({isPremium, imageSrc, price, isBookmarked, starsCount, title, cardType}: PlaceCardProps): JSX.Element {
  const bookmarkButtonClassName = `${isBookmarked ? 'place-card__bookmark-button--active' : ''} button`;
  const bookmarkStatus = `${isBookmarked ? 'In bookmarks' : ''} To bookmarks`;

  return (
    <article className="cities__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {
            <button className={`place-card__bookmark-button ${bookmarkButtonClassName}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{bookmarkStatus}</span>
            </button>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${starsCount * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>
  );
}
