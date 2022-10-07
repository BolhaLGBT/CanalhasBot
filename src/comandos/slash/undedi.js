const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('undedi')
		.setDescription('Undedi opiniões'),
	async execute(interaction) {
		return interaction.reply('Comando deletado.');
	},
};
