const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GoodbyeCommand extends BaseCommand {
  constructor() {
    super('goodbye', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('goodbye command works');
  }
}