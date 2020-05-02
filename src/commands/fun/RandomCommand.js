const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RandomCommand extends BaseCommand {
  constructor() {
    super('random', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('random command works');
  }
}