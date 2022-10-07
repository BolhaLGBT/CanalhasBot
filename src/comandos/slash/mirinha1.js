const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mirinha1')
		.setDescription('Mirinha matador de iniciante parte 2'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/MCqd2xu.png');
	},
};