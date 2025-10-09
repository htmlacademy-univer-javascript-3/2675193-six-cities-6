import {PlaceCardProps} from '../components/place-card-props.tsx';

export const offers : PlaceCardProps[] = [{
  id: '1',
  isBookmarked: false,
  isPremium: true,
  imageSrc: 'img/apartment-01.jpg',
  smallImageSrc: 'img/apartment-small-03.jpg',
  price: 120,
  rating: 4.8,
  cardName: 'Beautiful &amp; luxurious studio at great location',
  cardType: 'Apartment'
},{
  id: '2',
  isBookmarked: false,
  isPremium: true,
  imageSrc: 'img/room.jpg',
  smallImageSrc: 'img/room-small.jpg',
  price: 80,
  rating: 4,
  cardName: 'Wood and stone place',
  cardType: 'Room',
},{
  id: '3',
  isBookmarked: false,
  isPremium: false,
  imageSrc: 'img/apartment-02.jpg',
  smallImageSrc: '/img/apartment-small-04.jpg',
  price: 132,
  rating: 4,
  cardName: 'White Castle',
  cardType: 'Hotel'
},{
  id: '4',
  isBookmarked: false,
  isPremium: true,
  imageSrc: 'img/apartment-03.jpg',
  smallImageSrc: '/img/apartment-small-03.jpg',
  price: 180,
  rating: 5,
  cardName: 'Nice, cozy, warm big bed apartment',
  cardType: 'Apartment'
}
];
