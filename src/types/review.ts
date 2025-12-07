import {UserDataPublic} from './user-data.ts';

export type Review = {
  id: string;
  user: UserDataPublic;
  rating: number;
  comment: string;
  date: string;
}

export type ReviewPost = Omit<Review, 'date'|'user'>;
