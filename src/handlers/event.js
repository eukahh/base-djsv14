const { Client } = require('discord.js');
const glob = require('glob');
const path = require('path');

/**
 * @param {Client} client
 */
function loadEvents(client) {
    const files = glob.sync('./src/events/**/*.js');

    for (const file of files) {
        const event = require(path.resolve(file));

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}

module.exports = { loadEvents };