const { Client, Events } = require("discord.js");
const { loadCommands } = require("../../handlers/command");

module.exports = {
  name: Events.ClientReady,
  once: true,
  /**
   * 
   * @param { Client } client 
   */
  async execute(client) {
    console.log(`${client.user.username} is online!`);
    try {
      await loadCommands(client);
    } catch (error) {
      console.error('Error loading commands:', error);
    }
  }
};