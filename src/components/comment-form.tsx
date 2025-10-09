import {Fragment, useState} from 'react';

type StarInputProps = {
  rating: RatingValue;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const titlesForRate = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
} as const;

type RatingValue = keyof typeof titlesForRate;

function StarInput({rating, handleChange} :StarInputProps) {
  const id = `${rating}_stars`;
  const title: string = titlesForRate[rating];
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={id} type="radio" onChange={handleChange}/>
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default function CommentForm() {
  const [formData, setFormData] = useState({rating: -1, review: ''});
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarInput rating={5} handleChange={handleChange}></StarInput>
        <StarInput rating={4} handleChange={handleChange}></StarInput>
        <StarInput rating={3} handleChange={handleChange}></StarInput>
        <StarInput rating={2} handleChange={handleChange}></StarInput>
        <StarInput rating={1} handleChange={handleChange}></StarInput>
      </div>
      <textarea className="reviews__textarea form__textarea" id="reviSew" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review} onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
