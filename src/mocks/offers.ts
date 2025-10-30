import {Offer} from '../types/offer.ts';

export const offers : Offer[] = [{
  id: '1',
  isFavorite: true,
  isPremium: true,
  previewImage: 'img/apartment-01.jpg',
  smallImageSrc: 'img/apartment-small-03.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful &amp; luxurious studio at great location',
  type: 'Apartment',
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 13
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 16
  },
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
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 13
    }
  },
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 16
  },
},{
  id: '3',
  isFavorite: true,
  isPremium: false,
  previewImage: 'img/apartment-02.jpg',
  smallImageSrc: 'img/apartment-small-04.jpg',
  price: 132,
  rating: 4,
  title: 'White Castle',
  type: 'Hotel',
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 13
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 16
  },
},{
  id: '4',
  isFavorite: false,
  isPremium: true,
  previewImage: 'img/apartment-03.jpg',
  smallImageSrc: '/img/apartment-small-03.jpg',
  price: 180,
  rating: 5,
  title: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment',
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 13
    }
  },
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 16
  },
}
];
