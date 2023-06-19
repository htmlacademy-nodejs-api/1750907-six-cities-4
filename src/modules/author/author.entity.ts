import { Author } from '../../types/author.type.js';

export class AuthorEntity implements Author {
  public email = '';
  public avatarPath = '';
  public firstname = '';
  public lastname = '';
}