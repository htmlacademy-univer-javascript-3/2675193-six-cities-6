import {Fragment, memo} from 'react';
import ReviewComponentMemo from './review-component.tsx';
import {Review} from '../../types/review.ts';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews} : ReviewsProps) {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => <ReviewComponentMemo key={review.id} {...review}/>)}
      </ul>
    </Fragment>);
}

const ReviewsMemo = memo(Reviews);
export default ReviewsMemo;
