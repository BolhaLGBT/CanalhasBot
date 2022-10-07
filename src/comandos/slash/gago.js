const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('quick.db');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gago')
		.setDescription('fck gago.'),
		async execute(interaction, client) {

		db.add(`fckgago_${interaction.guilds}`, 1);
        let fckgago = db.fetch(`fckgago_${interaction.guilds}`); 

		return interaction.reply(`**<@${interaction.member.id}>** mandou um **fck** **\`Gago\`**. \nHoje o chat do Hotel ja mandou o **Gago** se fuder **${fckgago}** vezes!`);
	},
};



