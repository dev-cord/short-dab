const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class IgnoreCommand extends BaseCommand {
  constructor() {
    super('ignore', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('ignore command works');
  }
}