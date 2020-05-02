const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetreportCommand extends BaseCommand {
  constructor() {
    super('setreport', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('setreport command works');
  }
}