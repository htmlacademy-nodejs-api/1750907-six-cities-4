import { readFileSync } from 'node:fs';
import { CliCommandInterface } from './cli-command.interface.js';
import {resolve} from 'node:path';

export default class VerionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const contentPageJSON = readFileSync(resolve('./package.json'), 'utf-8');
    const content = JSON.parse(contentPageJSON);
    return content.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(version);
  }
}
