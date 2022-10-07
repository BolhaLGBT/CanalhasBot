const { Client, Intents, GatewayIntentBits, Discord, Collection, Partials } = require('discord.js');
const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel, Partials.Message, Partials.Reaction]
});

const config = require('../src/util/config');
const fs = require('fs');
const token = config['nina'][0].token;

module.exports = client;

//Eventos
['eventos'].forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});


//Token
client.login(token);