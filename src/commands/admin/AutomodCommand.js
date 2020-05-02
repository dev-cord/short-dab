const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AutomodCommand extends BaseCommand {
  constructor() {
    super('automod', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('automod command works');
  }
}