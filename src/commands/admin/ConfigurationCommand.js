const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ConfigurationCommand extends BaseCommand {
  constructor() {
    super('configuration', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('configuration command works');
  }
}