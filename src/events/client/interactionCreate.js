const { Events, EmbedBuilder, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { commandName, reply, editReply } = interaction;

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(commandName);

        if (!command) {
            return reply({ content: "Command not found", ephemeral: true });
        }

        try {
            command.execute(interaction, client );
        } catch (error) {
            const errEmbed = new EmbedBuilder()
                .setTitle('An error occurred')
                .setDescription(`\`\`\`${error}\`\`\``)
                .setColor(0xe32424);

            editReply({ embeds: [errEmbed] });

            console.log(error)
        }
    }
};
