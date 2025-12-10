import { Offer } from '../../types/offer.ts';
import PlaceCards from '../place-card/place-cards.tsx';
import {City} from '../../types/city.ts';
import {Nullable} from 'vitest';
import {SortOptionType, SortOptionTypeKeys} from '../../types/sort-option-type.ts';
import React, {memo, useMemo, useState} from 'react';

type SortedPlaceCardsProps = {
  placeCards: Offer[];
  activeCity: City;
  setActiveCardCb: (offer: Nullable<Offer>) => void;
  onFavoriteClick?: (offerId: string, isFavorite: boolean) => void;
}

function SortedPlaceCards({placeCards, activeCity, setActiveCardCb, onFavoriteClick}: SortedPlaceCardsProps) {
  const [sortType, updateSortType] = React.useState(SortOptionType.Popular);
  const [isSortTypesSelectorOpened, openSortTypesSelector] = useState(false);
  const sortedPlaceCards = useMemo(() => placeCards.sort((a, b) => {
    switch (sortType) {
      case SortOptionType.PriceLowToHigh:
        return a.price - b.price;
      case SortOptionType.PriceHighToLow:
        return b.price - a.price;
      case SortOptionType.Rating:
        return b.rating - a.rating;
      case SortOptionType.Popular:
        return 0;
    }
  }), [placeCards, sortType]);
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placeCards.length} places to stay in {activeCity.name}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={() => openSortTypesSelector(!isSortTypesSelectorOpened)}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        {isSortTypesSelectorOpened &&
          <ul className="places__options places__options--custom places__options--opened">
            {(Object.keys(SortOptionType) as Array<SortOptionTypeKeys>).map((key) => (
              <li key={key} className={`places__option${key === sortType ? ' places__option--active' : ''}`}
                tabIndex={0} onClick={() => {
                  updateSortType(SortOptionType[key]);
                  openSortTypesSelector(false);
                }}
              >
                {SortOptionType[key]}
              </li>
            ))}
          </ul>}
      </form>
      <PlaceCards placeCards={sortedPlaceCards} setActiveCardCb={setActiveCardCb} onFavoriteClick={onFavoriteClick}/>
    </>
  );
}

const SortedPlaceCardsMemo = memo(SortedPlaceCards);
export default SortedPlaceCardsMemo;
