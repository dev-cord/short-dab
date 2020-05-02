const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('invite command works');
  }
}