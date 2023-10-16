const { Bot } = require('./src/structures/Client')
require('dotenv').config();

const client = new Bot();

client.start();