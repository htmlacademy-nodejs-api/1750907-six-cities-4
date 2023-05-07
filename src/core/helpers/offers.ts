import { Offer } from '../../types/offer.type.js';
import { City } from '../../types/city.enum.js';
import { Flat } from '../../types/flat.enum.js';
import { Features } from '../../types/features.enum.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    offerDate,
    city,
    preview,
    photos,
    isPremium,
    isFavorite,
    rating,
    flatType,
    rooms,
    guests,
    price,
    features,
    email,
    avatarPath,
    firstname,
    lastname,
    latitude,
    longitude
  ] = offerData.replace('\n', '').split('\t');

  const author = {
    email,
    firstname,
    lastname,
    avatarPath
  };

  return {
    title,
    description,
    offerDate: new Date(offerDate),
    city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    preview,
    photos: photos.split(';'),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rating: Number.parseFloat(rating),
    flatType: Flat[flatType as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    features: features.split(';').map((feature) => Features[feature as 'Washer']),
    author,
    location: {
      latitude: Number.parseFloat(latitude),
      longitude: Number.parseFloat(longitude),
    }
  };
}
