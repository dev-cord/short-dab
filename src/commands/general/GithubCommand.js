const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GithubCommand extends BaseCommand {
  constructor() {
    super('github', 'general', []);
  }

  run(client, message, args) {
    message.channel.send('github command works');
  }
}