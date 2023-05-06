import CLIApplication from './app/cli.js';
import HelpCommand from './core/cli-command/help.command.js';
import VerionCommand from './core/cli-command/version.command.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand, new VerionCommand
]);

myManager.processCommand(process.argv);
