import CLIApplication from './app/cli.js';
import GenerateCommand from './core/cli-command/generate-command.js';
import HelpCommand from './core/cli-command/help.command.js';
import ImportCommand from './core/cli-command/import.command.js';
import VerionCommand from './core/cli-command/version.command.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand, new VerionCommand, new ImportCommand, new GenerateCommand
]);

myManager.processCommand(process.argv);
