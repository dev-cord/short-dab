const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetmodlogsCommand extends BaseCommand {
  constructor() {
    super('setmodlogs', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('setmodlogs command works');
  }
}