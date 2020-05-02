const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class JokeCommand extends BaseCommand {
  constructor() {
    super('joke', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('joke command works');
  }
}