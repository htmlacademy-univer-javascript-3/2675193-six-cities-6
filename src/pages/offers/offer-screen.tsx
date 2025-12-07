import Header from '../../components/header.tsx';
import {fetchOfferAction, fetchOfferNearby, getReviewsAction} from '../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import {getNearby, getOffer} from '../../store/offers-data/selectors.ts';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import OfferComponentMemo from '../../components/offer/offer-component.tsx';
import NearPlacesMemo from '../../components/near-place/near-places.tsx';

export function OfferScreen(): JSX.Element {
  const {id} = useParams<{ id: string }>();

  const offer = useAppSelector(getOffer);
  const nearby = useAppSelector(getNearby);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!id) {
      return;
    }
    if (offer.id !== id){
      dispatch(fetchOfferAction(id));
      dispatch(getReviewsAction(id));
      dispatch(fetchOfferNearby(id));
    }
  }, [id, dispatch]);

  return (
    <div className="page">
      <Header fromRoot={false}/>

      <main className="page__main page__main--offer">
        <OfferComponentMemo offer={offer} />
        <NearPlacesMemo places={nearby}/>
      </main>
    </div>
  );
}
