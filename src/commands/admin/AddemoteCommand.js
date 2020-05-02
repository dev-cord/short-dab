const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AddemoteCommand extends BaseCommand {
  constructor() {
    super('addemote', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('addemote command works');
  }
}