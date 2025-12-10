import {UserDataPublic} from './user-data.ts';

export type Review = {
  id: string;
  user: UserDataPublic;
  rating: number;
  comment: string;
  date: string;
  dateString: string;
  dateNumber: number;
}

export function setDate(review : Review){
  const dateDate = new Date(review.date);
  review.dateString = dateDate.toLocaleDateString('en-US', {year: 'numeric', month:'long'});
  review.dateNumber = dateDate.getTime();
}

export type ReviewPost = Omit<Review, 'date'|'user'>;
