const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kass1')
		.setDescription('Kass morrendo para o tempo.'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/iehKXbS.gif');
	},
};