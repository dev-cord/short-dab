const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AutoroleCommand extends BaseCommand {
  constructor() {
    super('autorole', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('autorole command works');
  }
}