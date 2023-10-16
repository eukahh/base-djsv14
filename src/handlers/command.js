const { Client } = require('discord.js');
const glob = require('glob');
const path = require('path');

/**
 * @param {Client} client
 */
async function loadCommands(client) {
    const commandsArray = [];

    const files = glob.sync('./src/commands/**/*.js');

    for (const file of files) {
        const command = require(path.resolve(file));

        client.commands.set(command.data.name, command);
        commandsArray.push(command.data.toJSON ? command.data.toJSON() : command.data);
    }

    await client.application.commands.set(commandsArray);
}

module.exports = { loadCommands };
