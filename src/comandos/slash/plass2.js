const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plass2')
		.setDescription('Plass sendo incompetente parte 2'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/FJws1A2.gif');
	},
};