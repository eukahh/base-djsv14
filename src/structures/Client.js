const { Client, Collection } = require('discord.js');
const { loadEvents } = require('../handlers/event');

class Bot extends Client {
  constructor() {
    super({
      intents: 3276799
    });

    this.commands = new Collection();

    loadEvents(this);
  }

  start() {
    if (!process.env.BOT_TOKEN) {
      console.error('Bot token not configured. Set the token in your environment variable.');
      return;
    }

    this.login(process.env.BOT_TOKEN)
      .catch((error) => {
        console.error('Error starting the bot:', error);
      });
  }
}

module.exports = { Bot };
