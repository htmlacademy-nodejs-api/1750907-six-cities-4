import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { readFileSync } from 'node:fs';
import { City } from '../../types/city.enum.js';
import { Flat } from '../../types/flat.enum.js';
// import { Features } from '../../types/features.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8'});
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, preview, photos, isPremium, isFavorite, rating, flatType, rooms, guests, price, features, firstname, lastname, email, avatarPath, latitude, longitude]) => ({
        title,
        description,
        offerDate: new Date(createdDate),
        city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        preview,
        photos: photos.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseInt(rating, 10),
        flatType: Flat[flatType as 'Apartment' | 'House' | 'Room' | 'Hotel'],
        rooms: Number.parseInt(rooms, 10),
        guests: Number.parseInt(guests, 10),
        price: Number.parseInt(price, 10),
        features: features.split(';'),
        author: {email, avatarPath, firstname, lastname},
        location: {
          latitude: Number.parseFloat(latitude),
          longitude: Number.parseFloat(longitude),
        }
      }));
  }
}
