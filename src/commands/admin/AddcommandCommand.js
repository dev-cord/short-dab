const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AddcommandCommand extends BaseCommand {
  constructor() {
    super('addcommand', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('addcommand command works');
  }
}