const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plass3')
		.setDescription('Plass vs Iniciantes'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/AgACFiF.png');
	},
};