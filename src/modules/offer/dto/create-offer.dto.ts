import { City } from '../../../types/city.enum.js';
import { Flat } from '../../../types/flat.enum.js';
import { Features } from '../../../types/features.enum.js';
import { Location } from '../../../types/location.type.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public offerDate!: Date;
  public city!: City;
  public preview!: string;
  public photos!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public flatType!: Flat;
  public rooms!: number;
  public guests!: number;
  public price!: number;
  public features!: Features[];
  public author!: string;
  public location!: Location;
}