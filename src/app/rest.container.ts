import { Container } from 'inversify';

import RestApplication from './rest.js'; // приложение связи с REST API
import { RestSchema } from '../core/config/rest.schema.js'; // схема работы с БД

import { AppComponent } from '../types/app-component.enum'; // тип для appcomponent

import { LoggerInterface } from '../core/logger/logger.interface.js';
import PinoService from '../core/logger/pino.service.js';

import { ConfigInterface } from '../core/config/config.interface.js';
import ConfigService from '../core/config/config.service.js'; // чтение конфига

import { DatabaseClientInterface } from '../core/database-client/database-client.interface';
import MongoClientService from '../core/database-client/mongo-client.service';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();
  restApplicationContainer.bind<RestApplication>(AppComponent.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restApplicationContainer.bind<DatabaseClientInterface>(AppComponent.DatabaseClientInterface).to(MongoClientService).inSingletonScope();

  return restApplicationContainer;
}
