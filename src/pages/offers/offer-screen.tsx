import Header from '../../components/header.tsx';
import {
  fetchOfferAction,
  fetchOfferNearby,
  getReviewsAction,
  updateFavoriteStatusAction
} from '../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import {getNearby, getOffer, getOfferFound} from '../../store/offers-data/selectors.ts';
import {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import OfferComponentMemo from '../../components/offer/offer-component.tsx';
import NearPlacesMemo from '../../components/near-place/near-places.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {getAuthorizationStatus} from '../../store/user-data/selectors.ts';

export function OfferScreen(): JSX.Element {
  const {id} = useParams<{ id: string }>();

  const nav = useNavigate();

  const offer = useAppSelector(getOffer);
  const isFound = useAppSelector(getOfferFound);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!id) {
      return;
    }
    if (isFound && offer.id !== id){
      dispatch(fetchOfferAction(id));
      dispatch(getReviewsAction(id));
      dispatch(fetchOfferNearby(id));
    }
  }, [id, dispatch]);
  if (!isFound) {
    nav(AppRoute.NotFound);
  }
  const nearby = useAppSelector(getNearby);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const onFavoriteClick = useCallback((offerId: string, isFavorite: boolean) => {
    if (authStatus === AuthorizationStatus.Auth) {
      const status = isFavorite ? 0 : 1;
      dispatch(updateFavoriteStatusAction({offerId, status}));
    } else {
      nav(AppRoute.Login);
    }
  }, [dispatch]);
  return (
    <div className="page">
      <Header fromRoot={false}/>

      <main className="page__main page__main--offer">
        <OfferComponentMemo offer={offer} onFavoriteClick={onFavoriteClick}/>
        <NearPlacesMemo places={nearby} onFavoriteClick={onFavoriteClick}/>
      </main>
    </div>
  );
}
