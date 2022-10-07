const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('quick.db');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tilt')
		.setDescription('quantidade de tilts dos jogadores da ranqueada dentro de 24hrs'),
		async execute(interaction, client) {

		db.add(`tilt_${interaction.guilds}`, 1);
        let tilt = db.fetch(`tilt_${interaction.guilds}`); 

		return interaction.reply(`Hoje já foram **${tilt}** tilts na ranqueada.`);
	},
};



