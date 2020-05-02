const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('suggest command works');
  }
}