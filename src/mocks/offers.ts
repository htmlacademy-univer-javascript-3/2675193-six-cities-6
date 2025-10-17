import {PlaceCardProps} from '../components/place-card/place-card-props.ts';

export const offers : PlaceCardProps[] = [{
  id: '1',
  isFavorite: false,
  isPremium: true,
  previewImage: 'img/apartment-01.jpg',
  smallImageSrc: 'img/apartment-small-03.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful &amp; luxurious studio at great location',
  type: 'Apartment'
},{
  id: '2',
  isFavorite: false,
  isPremium: true,
  previewImage: 'img/room.jpg',
  smallImageSrc: 'img/room-small.jpg',
  price: 80,
  rating: 4,
  title: 'Wood and stone place',
  type: 'Room',
},{
  id: '3',
  isFavorite: false,
  isPremium: false,
  previewImage: 'img/apartment-02.jpg',
  smallImageSrc: '/img/apartment-small-04.jpg',
  price: 132,
  rating: 4,
  title: 'White Castle',
  type: 'Hotel'
},{
  id: '4',
  isFavorite: false,
  isPremium: true,
  previewImage: 'img/apartment-03.jpg',
  smallImageSrc: '/img/apartment-small-03.jpg',
  price: 180,
  rating: 5,
  title: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment'
}
];
