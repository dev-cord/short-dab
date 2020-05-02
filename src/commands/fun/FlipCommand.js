const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FlipCommand extends BaseCommand {
  constructor() {
    super('flip', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('flip command works');
  }
}