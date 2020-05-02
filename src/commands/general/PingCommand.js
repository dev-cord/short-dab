const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('ping command works');
  }
}