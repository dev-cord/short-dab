const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'image', []);
  }

  run(client, message, args) {
    message.channel.send('avatar command works');
  }
}