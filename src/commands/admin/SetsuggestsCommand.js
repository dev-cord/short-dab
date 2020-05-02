const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetsuggestsCommand extends BaseCommand {
  constructor() {
    super('setsuggests', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('setsuggests command works');
  }
}