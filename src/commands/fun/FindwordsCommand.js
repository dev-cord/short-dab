const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FindwordsCommand extends BaseCommand {
  constructor() {
    super('findwords', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('findwords command works');
  }
}