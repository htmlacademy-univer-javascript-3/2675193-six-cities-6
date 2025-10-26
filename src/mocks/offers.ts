import {Offer} from '../types/offer.ts';

export const offers : Offer[] = [{
  id: '1',
  isFavorite: false,
  isPremium: true,
  previewImage: 'img/apartment-01.jpg',
  smallImageSrc: 'img/apartment-small-03.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful &amp; luxurious studio at great location',
  type: 'Apartment',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.87561,
    longitude: 2.375499,
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
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  location: {
    latitude: 51.225402,
    longitude: 6.784314,
    zoom: 16
  },
},{
  id: '3',
  isFavorite: false,
  isPremium: false,
  previewImage: 'img/apartment-02.jpg',
  smallImageSrc: '/img/apartment-small-04.jpg',
  price: 132,
  rating: 4,
  title: 'White Castle',
  type: 'Hotel',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
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
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.84461,
    longitude: 2.374499,
    zoom: 16
  },
}
];
