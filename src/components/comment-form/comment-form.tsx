import React, {Fragment, useCallback, useState} from 'react';
import {sendReviewAction} from '../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import {ReviewPost} from '../../types/review.ts';
import {getSendingReviewsStatus} from '../../store/offers-data/selectors.ts';

type StarInputProps = {
  rating: RatingValue;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 300;
const titlesForRate = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
} as const;

type RatingValue = keyof typeof titlesForRate;

function StarInput({rating, onHandleChange} :StarInputProps) {
  const id = `${rating}_stars`;
  const title: string = titlesForRate[rating];
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={id} type="radio" onChange={onHandleChange}/>
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

type CommentFormProps = {
  offerId: string;
}

export default function CommentForm({offerId}: CommentFormProps) {
  const [formData, setFormData] = useState({rating: -1, review: ''});
  const dispatch = useAppDispatch();
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }, [formData]);

  const isReviewSending = useAppSelector(getSendingReviewsStatus);

  const isSubmitDisabled = !(
    formData.rating > 0 &&
    formData.review &&
    formData.review.length >= MIN_MESSAGE_LENGTH &&
    formData.review.length <= MAX_MESSAGE_LENGTH
  ) || isReviewSending;

  const handleSubmit = useCallback((evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.review && formData.rating > 0) {
      dispatch(sendReviewAction({rating: formData.rating, comment: formData.review, id: offerId} as ReviewPost));
      setFormData({rating: -1, review: ''});
    }
  }, [offerId, formData, dispatch]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((num) =>
          <StarInput key={num} rating={num as RatingValue} onHandleChange={handleChange}></StarInput>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="reviSew" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review} onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_MESSAGE_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}
