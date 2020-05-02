const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class StatsCommand extends BaseCommand {
  constructor() {
    super('stats', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('stats command works');
  }
}