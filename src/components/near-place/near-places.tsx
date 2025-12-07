import {Offer} from '../../types/offer.ts';
import {memo} from 'react';
import PlaceCardMemo from '../place-card/place-card.tsx';

type NearPlacesProps = {
  places: Offer[];
}

function NearPlaces({places}: NearPlacesProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {places.map((place) =>
            <PlaceCardMemo key={place.id} placeCard={place} fromNear />
          )}
        </div>
      </section>
    </div>
  );
}

const NearPlacesMemo = memo(NearPlaces);
export default NearPlacesMemo;
