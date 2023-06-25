import { DocumentType } from '@typegoose/typegoose';
import CreateAuthorDto from './dto/create-author.dto.js';
import { AuthorEntity } from './author.entity.js';

export interface AuthorServiceInterface {
  create(dto: CreateAuthorDto, salt: string): Promise<DocumentType<AuthorEntity>>;
  findByEmail(email: string): Promise<DocumentType<AuthorEntity> | null>;
  findOrCreate(dto: CreateAuthorDto, salt: string): Promise<DocumentType<AuthorEntity>>;
}