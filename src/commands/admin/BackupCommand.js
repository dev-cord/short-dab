const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BackupCommand extends BaseCommand {
  constructor() {
    super('backup', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('backup command works');
  }
}