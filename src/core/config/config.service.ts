import { LoggerInterface } from '../logger/logger.interface.js';
import { ConfigInterface } from './config.interface.js';
import { DotenvParseOutput, config } from 'dotenv';

export default class ConfigService implements ConfigInterface {
  private readonly config: NodeJS.ProcessEnv;

  constructor (
    private readonly logger: LoggerInterface,
  ) {
    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error('Can\'t read .env file.');
    }

    this.config = parsedOutput.parsed as DotenvParseOutput;
    this.logger.info('.env file found and successfully parsed!');
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }
}
