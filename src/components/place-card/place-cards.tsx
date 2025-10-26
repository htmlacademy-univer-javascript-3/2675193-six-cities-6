import {PlaceCard} from './place-card.tsx';
import {useState} from 'react';
import {Offer} from '../../types/offer.ts';

type PlaceCardsProps = {
  cardsProps: Offer[];
}

export default function PlaceCards({cardsProps}: PlaceCardsProps) {
  const [activeCardId, setActiveCardId] = useState<string>('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsProps.map((place) => (
        <div key={place.id}
          onMouseOver={() => setActiveCardId(place.id)}
          onMouseLeave={() => setActiveCardId('')}
          style={{boxShadow: activeCardId === place.id ? 'black 0 0 20px' : 'none',
            zIndex: activeCardId === place.id ? 10000 : 0}}
        >
          <PlaceCard key={place.id} {...place}/>
        </div>
      ))}
    </div>
  );
}
