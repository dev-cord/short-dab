const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodCommand extends BaseCommand {
  constructor() {
    super('slowmod', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('slowmod command works');
  }
}