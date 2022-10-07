const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kass')
		.setDescription('Kass morrendo para Wick 😂'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/VIGbz17.gif');
	},
};