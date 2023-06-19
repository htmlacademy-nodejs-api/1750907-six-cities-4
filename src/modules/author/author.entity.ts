import { Author } from '../../types/author.type.js';
import typegoose, { getModelForClass } from '@typegoose/typegoose';

const { prop } = typegoose;

export class AuthorEntity implements Author {
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