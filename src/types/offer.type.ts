import { Author } from './author.type';
import { City } from './city.enum';
// import { Features } from './features.enum';
import { Flat } from './flat.enum';
import { Location } from './location.type';

export type Offer = {
  title: string;
  description: string;
  offerDate: Date;
  city: City;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  flatType: Flat;
  rooms: number;
  guests: number;
  price: number;
  features: string[];
  author: Author;
  location: Location;
}
