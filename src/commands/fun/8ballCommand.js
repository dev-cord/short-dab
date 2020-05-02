const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class 8ballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('8ball command works');
  }
}