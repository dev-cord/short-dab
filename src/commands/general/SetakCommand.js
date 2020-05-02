const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetakCommand extends BaseCommand {
  constructor() {
    super('setak', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('setak command works');
  }
}