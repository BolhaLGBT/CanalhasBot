const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kass2')
		.setDescription('Kass combo!'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/qc0EWGY.gif');
	},
};