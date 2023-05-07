import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { generateRandomValue, getQuantedRandomItems, getRandomFloat, getRandomItem, getRandomItems } from '../../core/helpers/random.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const PHOTOS_QNT = 6;

const BOOLEAN_TRUE = 1;
const BOOLEAN_FALSE = 0;

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const RATING_MIN = 1;
const RATING_MAX = 5;

const ROOMS_MIN = 1;
const ROOMS_MAX = 8;

const GUESTS_MIN = 1;
const GUESTS_MAX = 10;

const LONGITUDE_MIN = 48;
const LONGITUDE_MAX = 56;
const LATITUDE_MIN = 2;
const LATITUDE_MAX = 12;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const offerDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY)).toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getQuantedRandomItems<string>(this.mockData.photos, PHOTOS_QNT).join(';');
    const isFavorite = generateRandomValue(BOOLEAN_FALSE, BOOLEAN_TRUE).toString();
    const isPremium = generateRandomValue(BOOLEAN_FALSE, BOOLEAN_TRUE).toString();
    const rating = getRandomFloat(RATING_MIN, RATING_MAX, 5).toString();
    const flatType = getRandomItem<string>(this.mockData.flatTypes);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const rooms = generateRandomValue(ROOMS_MIN, ROOMS_MAX).toString();
    const guests = generateRandomValue(GUESTS_MIN, GUESTS_MAX).toString();
    const features = getRandomItems<string>(this.mockData.features).join(';');
    const firstname = getRandomItem<string>(this.mockData.firstnames);
    const lastname = getRandomItem<string>(this.mockData.lastnames);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const longitude = getRandomFloat(LONGITUDE_MIN, LONGITUDE_MAX, 1).toString();
    const latitude = getRandomFloat(LATITUDE_MIN, LATITUDE_MAX, 1).toString();


    return [
      title, description, offerDate, city, preview,
      photos, isFavorite, isPremium, rating, flatType,
      rooms, guests, price, features,
      firstname, lastname, email, avatar,
      longitude, latitude,
    ].join('\t');
  }
}
