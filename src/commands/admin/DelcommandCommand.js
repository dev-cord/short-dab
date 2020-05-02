const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DelcommandCommand extends BaseCommand {
  constructor() {
    super('delcommand', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('delcommand command works');
  }
}