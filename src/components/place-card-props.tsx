export type PlaceCardProps = {
  id: string;
  isPremium: boolean;
  isBookmarked: boolean;
  imageSrc: string;
  smallImageSrc: string;
  price: number;
  cardName: string;
  rating: number;
  cardType: 'Room' | 'Apartment' | 'Hotel';
};
