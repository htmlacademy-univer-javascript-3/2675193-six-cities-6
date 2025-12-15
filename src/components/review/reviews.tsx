import {Fragment, memo, useMemo} from 'react';
import ReviewComponentMemo from './review-component.tsx';
import {Review} from '../../types/review.ts';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews} : ReviewsProps) {
  const sortedReviews = useMemo(() => [...reviews].sort((a, b) => -a.dateNumber + b.dateNumber).slice(0, 10), [reviews]);
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review: Review) => <ReviewComponentMemo key={review.id} {...review}/>)}
      </ul>
    </Fragment>);
}

const ReviewsMemo = memo(Reviews);
export default ReviewsMemo;
