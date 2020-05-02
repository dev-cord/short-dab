const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetprefixCommand extends BaseCommand {
  constructor() {
    super('setprefix', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('setprefix command works');
  }
}