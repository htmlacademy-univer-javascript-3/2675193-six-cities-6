import {PlaceCard} from './place-card.tsx';
import {useState} from 'react';
import {Offer} from '../../types/offer.ts';
import {Nullable} from 'vitest';

type PlaceCardsProps = {
  cardsProps: Offer[];
  setActiveCardCb: (offer: Nullable<Offer>) => void;
}

export default function PlaceCards({cardsProps, setActiveCardCb}: PlaceCardsProps) {
  const [activeCardId, setActiveCardId] = useState<string>('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsProps.map((place) => (
        <div key={place.id}
          onMouseOver={() => {
            setActiveCardCb(place);
            setActiveCardId(place.id);
          }}
          onMouseLeave={() => {
            setActiveCardId('');
            setActiveCardCb(null);
          }}
          style={{boxShadow: activeCardId === place.id ? 'black 0 0 20px' : 'none',
            zIndex: activeCardId === place.id ? 10000 : 0}}
        >
          <PlaceCard key={place.id} {...place}/>
        </div>
      ))}
    </div>
  );
}
