const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('workzera')
		.setDescription('Workezera Combo'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/daxclzT.gif');
	},
};