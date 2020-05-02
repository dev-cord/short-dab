const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DeletemodCommand extends BaseCommand {
  constructor() {
    super('deletemod', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('deletemod command works');
  }
}