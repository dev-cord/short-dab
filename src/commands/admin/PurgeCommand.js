const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('purge command works');
  }
}