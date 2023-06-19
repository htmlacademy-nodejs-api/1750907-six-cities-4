import { Author } from '../../types/author.type.js';
import typegoose, { defaultClasses, getModelForClass } from '@typegoose/typegoose';

const { prop } = typegoose;

export interface AuthorEntity extends defaultClasses.Base{}
export class AuthorEntity extends defaultClasses.TimeStamps implements Author {
  @prop({ unique: true, required: true })
  public email = '';

  @prop({ required: false, default: ''})
  public avatarPath = '';

  @prop({required: true})
  public firstname = '';

  @prop({required: true})
  public lastname = '';
}

export const AuthorModel = getModelForClass(AuthorEntity);