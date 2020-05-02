const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ImgCommand extends BaseCommand {
  constructor() {
    super('img', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('img command works');
  }
}