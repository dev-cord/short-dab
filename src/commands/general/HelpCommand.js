const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('help command works');
  }
}