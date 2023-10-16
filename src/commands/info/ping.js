const { SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
  /**
   * 
   * @param { ChatInputCommandInteraction } interaction 
   * @param { Client } client 
   */
  async execute(interaction, client) {
    interaction.reply({ embeds: [
      new EmbedBuilder()
      .setTitle("🏓 Pong!")
      .setDescription(`💢 **Ping**: \`${client.ws.ping}\`ms`)
      .setColor("Red")
    ]});
  }
}
