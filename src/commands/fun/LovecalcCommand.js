const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LovecalcCommand extends BaseCommand {
  constructor() {
    super('lovecalc', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('lovecalc command works');
  }
}