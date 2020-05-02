const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ReportCommand extends BaseCommand {
  constructor() {
    super('report', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('report command works');
  }
}