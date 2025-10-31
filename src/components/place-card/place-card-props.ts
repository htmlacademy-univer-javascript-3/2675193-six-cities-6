export type PlaceCardProps = {
  id: string;
  title: string;
  type: 'Room' | 'Apartment' | 'Hotel';
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  smallImageSrc: string;
};
