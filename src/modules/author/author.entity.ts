import { Author } from '../../types/author.type.js';
import typegoose, { defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { createSHA256 } from '../../core/helpers/common.js';

const { prop, modelOptions } = typegoose;

export interface AuthorEntity extends defaultClasses.Base{}

@modelOptions({
  schemaOptions: {
    collection: 'authors'
  }
})

export class AuthorEntity extends defaultClasses.TimeStamps implements Author {
  @prop({ unique: true, required: true })
  public email = '';

  @prop({ required: false, default: ''})
  public avatarPath = '';

  @prop({required: true, default: ''})
  public firstname = '';

  @prop({required: true, default: ''})
  public lastname = '';

  @prop({required: true, default: ''})
  private password?: string;

  constructor(authorData: Author) {
    super();

    this.email = authorData.email;
    this.avatarPath = authorData.avatarPath;
    this.firstname = authorData.firstname;
    this.lastname = authorData.lastname;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt)
  }

  public getPassword() {
    return this.password;
  }
}

export const AuthorModel = getModelForClass(AuthorEntity);