import { inject, injectable } from 'inversify';

import { AuthorEntity } from './author.entity.js';
import { DocumentType, types } from '@typegoose/typegoose';
import CreateAuthorDto from './dto/create-author.dto.js';
import { AuthorServiceInterface} from './author-service.interface';
import { AppComponent } from '../../types/app-component.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';

@injectable()
export default class AuthorService implements AuthorServiceInterface {
  constructor(
    @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface,
    @inject(AppComponent.AuthorModel) private readonly authorModel: types.ModelType<AuthorEntity>,
  ){}

  public async create(dto: CreateAuthorDto, salt: string): Promise<DocumentType<AuthorEntity>> {
    const author = new AuthorEntity(dto);
    author.setPassword(dto.password, salt);

    const result = await this.authorModel.create(author);
    this.logger.info(`Author ${author.email} created`);

    return result;
  }

  public async findByEmail(email: string): Promise<DocumentType<AuthorEntity> | null> {
    return this.authorModel.findOne({email});
  }

  public async findOrCreate(dto: CreateAuthorDto, salt: string): Promise<DocumentType<AuthorEntity>> {
    const existedUser = await this.findByEmail(dto.email);

    if (existedUser) {
      return existedUser;
    }

    return this.create(dto, salt);
  }
}