const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const config = require('../util/config.json');
const clientId = config['nina'][0].clientId;
const guildId = config['nina'][0].guildId;
const token = config['nina'][0].token;

const commands = [];
const commandFiles = fs.readdirSync('../comandos/slash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../comandos/slash/${file}`);
	if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
	commands.push(command.data)
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Os comandos com de Slash Commands foram registrados com sucesso no servidor local!');
	} catch (error) {
		console.error(error);
	}
})();